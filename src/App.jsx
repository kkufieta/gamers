import React from 'react';
import './App.css';
import '../node_modules/uikit/dist/css/uikit.css'
import '../node_modules/uikit/dist/js/uikit.js'
import Header from './Header.jsx';
import InputForm from './InputForm.jsx';
import GamerList from './GamerList.jsx';

class App extends React.Component {
  state = {
    gamers: []
  }

  addGamer = gamer => {
    console.log(gamer)
    this.setState((prevState) => ({
      gamers: [...prevState.gamers, gamer]
    }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="uk-grid">
          <div className="uk-width-3-5">
            <GamerList gamers={this.state.gamers} />
          </div>
          <div className="uk-width-2-5">
            <InputForm addGamer={this.addGamer} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
