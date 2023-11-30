// App.js or any other parent component
import React from 'react';
import Item from './Item'; // Adjust the import path as necessary

const App = () => {
  const list = [
    { title: 'title 1', content: 'content 1' },
    { title: 'title 2', content: 'content 2' },
    { title: 'title 3', content: 'content 3' },
  ];

  return (
    <div>
      {list.map((item, index) => (
        <Item key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default App;
