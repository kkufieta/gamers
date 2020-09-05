import React from 'react';
import './App.css';
import '../node_modules/uikit/dist/css/uikit.css'
import '../node_modules/uikit/dist/js/uikit.js'
import Header from './Header.jsx';
import InputForm from './InputForm.jsx';
import GamerList from './GamerList.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="uk-grid">
        <div className="uk-width-3-5">
          <GamerList />
        </div>
        <div className="uk-width-2-5">
          <InputForm />
        </div>
      </div>
    </div>
  );
}

export default App;
