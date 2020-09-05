import React from 'react';
import './App.css';
import Header from './Header.jsx';
import InputForm from './InputForm.jsx';
import '../node_modules/uikit/dist/css/uikit.css'
import '../node_modules/uikit/dist/js/uikit.js'

function App() {
  return (
    <div className="App">
      <Header />
      <InputForm />
    </div>
  );
}

export default App;
