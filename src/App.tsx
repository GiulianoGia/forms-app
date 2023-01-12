import React from 'react';
import './App.css';
import RadioButton from './RadioButton';
import ToggleButton from './ToggleButton';
import ButtonGroup from './ButtonGroup';

function App() {
  const list:string[] = ['apple', 'samsung', 'oppo']
  return (
    <div className="App">
      <RadioButton titles={list}/>
      <ButtonGroup>
        <ToggleButton title="test"/>
        <ToggleButton title="test1"/>
      </ButtonGroup>
    </div>
  );
}

export default App;
