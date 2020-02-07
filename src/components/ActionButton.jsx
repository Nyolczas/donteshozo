import React from 'react';

const ActionButton = (props) => (
  <div>
    <button
      className= "big-button"
      onClick={props.handlePick}
    >
    Mit tegyek?
    </button>
  </div>
);

export default ActionButton;