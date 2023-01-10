import React, {useEffect, useState} from "react";
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register";
import {Hello} from "./Hello";
import {useCookies} from "react-cookie";
import {BrowserRouter, Route, Router, Routes, useNavigate} from "react-router-dom";

function App() {
    const [currentForm, setCurrentForm] = useState('login');
    const [currentStatus, setCurrentStatus] = useState('logged out')
    const [cookies] = useCookies(['session_key'])
    const toggleForm = (formName) => {
        window.location.href = formName;
        console.log(currentForm)
    }
    const loginStatus = (stat) => {
        setCurrentStatus(stat);
        console.log(stat)
    }


    return (
        <div className='App'>
        <BrowserRouter>
            <Routes>
                {/*{*/}
                {/*  currentForm === "login" && cookies.session_key === undefined*/}
                {/*  ? <Login onFormSwitch={toggleForm} /> : (*/}
                {/*    currentForm === "login" && cookies.session_key !== undefined*/}
                {/*    ? <Hello onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />)*/}
                {/*}*/}
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/hello" element={<Hello/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
