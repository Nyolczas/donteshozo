import React from 'react';
import './../App.css';
import Header from './Header';

export default class App extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  render() {
    return (
      <div>
        
        <Header subtitle='Add át a döntés felelősségét a számítógépnek!'/>

      </div>
    );
  }
}
