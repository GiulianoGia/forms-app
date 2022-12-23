import React from 'react';
import logo from './logo.svg';
import './App.css';
import RadioButton from './RadioButton';

function App() {
  const list:string[] = ['apple', 'samsung', 'oppo']
  return (
    <div className="App">
      <RadioButton titles={list}/>
    </div>
  );
}

export default App;
