import React from 'react';
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
      return 'Írj be egy tényleges opciót!';
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

  headerTitleText = () => {
    if(this.state.options.length === 0) {
      return 'A döntéshez adj meg legalább két választási lehetőséget!';
    } else if (this.state.options.length === 1) {
      return 'Adj meg legalább még egy választási lehetőséget!';
    } else {
      return 'Az opcióid, amik közül választhatsz:';
    }
  }

  render() {
    const subtitle = 'Ha egy kérdésben nem tudsz dűlőre jutni, akkor jó helyen jársz.';
    return (
      <div>
        <Header subtitle={subtitle}/>
        <div className="container">
          {this.state.options.length > 1 && <ActionButton handlePick={this.handlePick}/>}
          <div className="widget">
            <Options
              title={this.headerTitleText}
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
