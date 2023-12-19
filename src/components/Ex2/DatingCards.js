import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './DatingCards.css';
import axios from 'axios';

const DatingCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/dating/cards");
      setPeople(req.data);
    }
    
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // Call the code to remove the person from the list
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
    // Call the code to handle the card leaving the screen
  };

  return (
    <div className="datingCards">
      <div className="datingCards__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default DatingCards;
