import React from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  const users = window.cs142models.userListModel();

  return (
    <div>
      {users.map((user) => (
        <Link key={user._id} to={`/users/${user._id}`}>
          {user.first_name} {user.last_name}
        </Link>
      ))}
    </div>
  );
};

export default UserList;
