import React from 'react';
import './../App.css';
import Header from './Header';
import ActionButton from './ActionButton';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

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

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Írj be egy opciót!';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Ezt már megadtad, adj meg valami másik lehetőséget!';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }

  render() {
    const subtitle = 'Ha nem tudsz egy kérdésben dűlőre jutni, akkor jó helyen jársz';
    return (
      <div>
        <Header subtitle={subtitle}/>
        <div className="container">
          {this.state.options.length > 1 && <ActionButton handlePick={this.handlePick}/>}
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
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
