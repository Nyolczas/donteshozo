import React from 'react';

const ActionButton = (props) => (
  <div>
    <button
      className= "big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
    Mit tegyek?
    </button>
  </div>
);

export default ActionButton;