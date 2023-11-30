// PeopleContainer.js
import Media from 'react-media';
import { Redirect, Route, Switch } from 'react-router-dom';
import Person from './Person';
import PeopleList from './PeopleList';
import people from './people';

const PeopleContainer = () => {
  return (
    <Media queries={{ small: '(max-width: 700px)' }}>
      {(size) =>
        size.small ? (
          <Switch>
            <Route path="/people/:id" component={Person} />
            <Route component={PeopleList} />
          </Switch>
        ) : (
          <div style={{ display: 'flex' }}>
            <PeopleList />
            <Switch>
              <Route path="/people/:id" component={Person} />
              <Redirect to={`/people/${people[0].id}`} />
            </Switch>
          </div>
        )
      }
    </Media>
  );
};

export default PeopleContainer;
