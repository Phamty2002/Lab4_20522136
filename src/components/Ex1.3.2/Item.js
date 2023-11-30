// Item.js
import React from 'react';

const Item = ({ title, content }) => {
  return (
    <div className="component-item">
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Item;
