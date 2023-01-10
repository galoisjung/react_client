import React, {useState} from "react";
import axios from 'axios';
import {useCookies} from "react-cookie";
import {useOutletContext} from "react-router-dom";
import {Login} from "./Login";

axios.defaults.withCredentials = true;
export const Hello = () => {
    const [cookies, , removeCookie] = useCookies(['session_key'])
    axios.post('http://localhost:5000/api/phishing/check'
        , cookies["session_key"], {
            headers: {
                "Content-Type": "application/json"
                , "Connection": "keep-alive"
            }
        }).catch(function (e) {
        // alert("입력하신 정보가 잘못 되었습니다.")
        removeCookie('session_key')

    })


    return (
        <div className="auth-form-container">
            <div className="login-form">
                Login Success!
            </div>
        </div>
    )
}