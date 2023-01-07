import React, {useState} from "react";
import axios from 'axios';
import {useCookies} from "react-cookie";

export const Hello = (props) => {
    const [cookies] = useCookies(['session_key'])
    axios.post('http://localhost:5000/api/phishing/check',
        cookies["session_key"])


    return (
        <div className="auth-form-container">
            <div className="login-form">
                Login Success!
            </div>
        </div>
    )
}