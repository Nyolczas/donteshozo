import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>

   { props.options.length >= 2 &&
     <div className="widget-header">
      <h3 className="widget-header__title">Az opcióid, amik közül választhatsz:</h3>
    </div>}

    {props.options.length < 2 && <p className="widget__message">A döntéshez adj meg legalább két választási lehetőséget!</p>}
    {
      props.options.map((option, index) => (
        <Option
          key={option}
          optionText={option}
          count={index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
    {props.options.length > 1 && 
      <button className="button button--link" onClick={props.handleDeleteOptions}>
      Az összes törlése
    </button>}
  </div>
);

export default Options;