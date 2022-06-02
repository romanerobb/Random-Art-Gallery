import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RandomArt from './components/randomart';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <div className="App">
      <RandomArt/>
    </div>
  );
}

export default App;
