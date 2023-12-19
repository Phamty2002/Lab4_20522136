import React from 'react';

const TopBar = ({ currentView }) => {
  return (
    <div className="topBar">
      <div>Your Name</div>
      <div>{currentView}</div>
    </div>
  );
};

export default TopBar;
