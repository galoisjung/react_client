import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Hello } from "./Hello";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [currentStatus, setCurrentStatus] = useState('logged out')
  const [popup, setPopup] = useState({open: true, title: "", message: "", callback: false});
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
        currentForm === "login" & currentStatus === "logged out" 
        ? <Login onFormSwitch={toggleForm} /> : (
          currentForm === "login" & currentStatus === "logged in" 
          ? <Hello onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />)
      }
      
    
      
    </div>
  );
}

export default App;
