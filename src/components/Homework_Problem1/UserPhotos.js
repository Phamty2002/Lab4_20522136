import React from 'react';
import { useParams } from 'react-router-dom';

const UserPhotos = () => {
  const { userId } = useParams();
  const photos = window.cs142models.photoOfUserModel(userId);

  return (
    <div>
      {photos.map((photo) => (
        <div key={photo._id}>
          <img src={`/images/${photo.file_name}`} alt="" />
          <div>Date: {photo.date_time}</div>
          {photo.comments.map((comment) => (
            <div key={comment._id}>
              <div>
                Comment by: <Link to={`/users/${comment.user._id}`}>{`${comment.user.first_name} ${comment.user.last_name}`}</Link>
              </div>
              <div>Date: {comment.date_time}</div>
              <div>{comment.comment}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default UserPhotos;
