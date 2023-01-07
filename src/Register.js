import React, {useState} from "react";
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [passvar, setPassvar] = useState('');
    const [ID, setID] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    function onSubmit(e) {
        e.preventDefault();
        let data = {
            id: ID,
            pw: pass,
            name: name,
            email: email
        }
        axios.post('http://localhost:5000/api/phishing/register',
            JSON.stringify(data), {
                headers: {
                    "Content-Type": `application/json`,
                },
            })
            // .then((res) => {
            //     console.log(res);
            //   });
            .then(function (response) {
                if (response.status === 200) {
                    alert("회원가입 성공! 환영합니다.")
                    props.onFormSwitch('login')
                }


            }).catch(function (error) {
                console.log((error.data))
                if (error.response.data.code === 1) {
                    alert("ID 혹은 E-mail이 이미 있습니다.")
                } else if (error.response.data.code === 2) {
                    alert("필수 사항을 입력하지 않았습니다.")
                } else {
                    alert("죄송합니다. 등록에 실패했습니다. 잠시 후 다시 시도해주세요.")
                }

            }
        )
        ;
        /////////////////////////////////////////
        // axios.post("http://localhost:9599/register", {
        //     userId: ID,
        //     password: pass,
        //     name: name,
        //     email: email

        // }).then(function (response) {
        //     // if(response.data.code == 0){
        //     //     setPopup({
        //     //         open: true,
        //     //         title: "Confirm",
        //     //         message: "Join Success!",
        //     //         callback: function(){
        //     //             navigate("/login");
        //     //         }
        //     //     });
        //     // } else {
        //     //     let message = response.data.message;
        //     //     if(response.data.code == 10000){
        //     //         message = "User ID is duplicated. Please enter a different User ID. "
        //     //     }
        //     //     setPopup({
        //     //         open: true,
        //     //         title: "Error",
        //     //         message: message
        //     //     });
        //     // }
        //     console.log(response)
        // }).catch(function (error) {
        //     console.log(error);
        // });

    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                {/* <label htmlFor="name">Name</label> */}

                <label htmlFor="id">ID/PW</label>
                <input value={ID} name="ID" onChange={(e) => setID(e.target.value)} type="ID" placeholder="ID" id="ID"/>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password"
                       id="password" name="password"/>
                <input style={{marginBottom: 20}} value={passvar} onChange={(e) => setPassvar(e.target.value)}
                       type="password" placeholder="Verify Password" id="passwordvar" name="passwordvar"/>
                <label htmlFor="info">INFO</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Name"/>
                <input value={email} name="email" onChange={(e) => setEmail(e.target.value)} type="email"
                       placeholder="e-mail" id="email"/>
                {/* <label htmlFor="password">password</label> */}

                <button type="submit" onClick={onSubmit}>Submit</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Back</button>
        </div>
    )
}
