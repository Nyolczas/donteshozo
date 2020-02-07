import React from 'react';
import './../App.css';
import Header from './Header';
import ActionButton from './ActionButton';
import Options from './Options';
import AddOption from './AddOption';

export default class App extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleDeleteOptions = (optionToRemove) => {

  };

  handleDeleteOption = () => {

  };

  handleAddOption = (option) => {

  };

  render() {
    const subtitle = 'Ha nem tudsz egy kérdésben dűlőre jutni, akkor jó helyen jársz';
    return (
      <div>
        <Header subtitle={subtitle}/>
        <div className="container">
          <ActionButton
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
      </div>
    );
  }
}
