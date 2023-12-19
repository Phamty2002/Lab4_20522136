import React from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams();
  const user = window.cs142models.userModel(userId);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>{user.first_name} {user.last_name}</h1>
      <div>Location: {user.location}</div>
      <div>Description: {user.description}</div>
      <div>Occupation: {user.occupation}</div>
      <Link to={`/photos/${user._id}`}>View Photos</Link>
    </div>
  );
};

export default UserDetail;
