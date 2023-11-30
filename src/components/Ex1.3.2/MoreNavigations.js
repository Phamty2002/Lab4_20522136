import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const users = [
  { id: 'kip-russel', name: 'Kip Russel', details: { id: 28977780, address: 'Some Address for Kip', department: 'Sales' } },
  { id: 'carter-heaney', name: 'Carter Heaney', details: { id: 28977789, address: '1095 Johnny Ridge\nLynchstad Iowa\n81452-3853', department: 'Clothing' } },
];

const UserList = () => (
  <div style={{ float: 'left', width: '20%', padding: '10px' }}>
    {users.map(user => (
      <Link key={user.id} to={`/${user.id}`} style={{ display: 'block', margin: '10px 0' }}>
        {user.name}
      </Link>
    ))}
  </div>
);

const UserDetail = ({ match }) => {
  const user = users.find(u => u.id === match.params.userId);
  return user ? (
    <div style={{ float: 'right', width: '75%', padding: '10px' }}>
      <h2>{user.name}</h2>
      <p>ID: {user.details.id}</p>
      <p>Address: {user.details.address}</p>
      <p>Department: {user.details.department}</p>
    </div>
  ) : (
    <p>User not found</p>
  );
};

const App = () => (
  <Router>
    <UserList />
    <Switch>
      {users.map(user => (
        <Route key={user.id} path={`/${user.id}`} render={(props) => <UserDetail {...props} />} />
      ))}
    </Switch>
  </Router>
);

export default App;
