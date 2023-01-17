import React, { FormEvent, FormEventHandler, useEffect, useState } from 'react';
import './App.css';
import RadioButton from './RadioButton';
import ToggleButton from './ToggleButton';
import ButtonGroup from './ButtonGroup';

function App() {
  const list:string[] = ['apple', 'samsung', 'oppo']
  const [selected, setSelected] = useState<string>("");

  
  const handleClick =(title:string) => {
    console.log(title);
  }
  
  return (
    <div className="App">

      <form>
        <RadioButton titles={list} onClick={handleClick}/>
        <input type="submit" value="submit"/>
      </form>
      
      <ButtonGroup>
        <ToggleButton title="test"/>
        <ToggleButton title="test1"/>
      </ButtonGroup>
    </div>
  );
}

export default App;
