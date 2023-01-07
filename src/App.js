import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Hello } from "./Hello";
import {useCookies} from "react-cookie";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [currentStatus, setCurrentStatus] = useState('logged out')
  const [cookies] = useCookies(['session_key'])
  const toggleForm = (formName) => {
    setCurrentForm(formName);
    console.log(currentForm)
  }
  const loginStatus = (stat) => {
    setCurrentStatus(stat);
    console.log(stat)
  }

  return (
    <div className="App">
      
      {
        currentForm === "login" && cookies.session_key === undefined
        ? <Login onFormSwitch={toggleForm} /> : (
          currentForm === "login" && cookies.session_key !== undefined
          ? <Hello onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />)
      }
      
    
      
    </div>
  );
}

export default App;
