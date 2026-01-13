import React, { useState } from 'react';
import './App.css';

const math = require('./mathModule');

console.log("Addition:", math.add(10, 5));
console.log("Subtraction:", math.sub(10, 5));


function App() {
  const[count , setCount]=useState(0);
  const[name, setName]=useState('');

  // simple alert
  const showAlert=()=>{
    alert("Button Clicked");
  };

  //Confirm alert 
  const showConfirm=()=>{
    // eslint-disable-next-line no-restricted-globals
    const result=confirm("Do you want to continue?");
    if(result){
      alert("You clicked OK");

    }else{
      alert("You clicked Cancel");
    }
  };

  //Prompt alert
  const showPrompt=()=>{
    const username =prompt("Enter your name:");
    if(username){
      setName(username);
    }
  };

  //onclick counter
  const increment=()=>{
    setCount(count+1);
  };

  return(
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>React onClick & Alerts Demo</h2>
      <button onClick={showAlert}>Show Alert</button>
      <br /><br />

      <button onClick={showConfirm}>Show Confirm</button>
      <br /><br />

      <button onClick={showPrompt}>Show Prompt</button>
      <br /><br />

      <button onClick={increment}>Increase Count</button>
      <p>Count: {count}</p>

      {name && <p>Hello, {name} 👋</p>}
    </div>
  );
  
}

export default App;


