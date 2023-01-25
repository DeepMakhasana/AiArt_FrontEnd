import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

// const API = "http://localhost:8000";
const API = "https://aiarts.onrender.com";

const initialValues = ({
    email: "",
    password: ""
});

const Login = () => {
    const navigates = useNavigate();
    const [input, setInput] = useState(initialValues);

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        })
    }

    const onLogin = (e) => {
        e.preventDefault();
        const { email, password } = input;


        if (email === "" || password === "") {
            alert("please enter all inputs..");
        } else {
            const loginUse = {
                email,
                password
            };

            axios
                .post(`${API}/login`, loginUse)
                .then((response) => {
                    alert(response.data.message);
                    navigates("/upload")
                })
                .catch((err) => {
                    alert(`No Register because of this error: ${err}`);
                });
        }
    }
    return (
        <>
            <div className="container d-flex flex-column justify-content-center align-items-center h-100vh" style={{ height: "100vh" }}>
                <div className="title">
                    <h1 className="h2 mb-4" style={{ letterSpacing: "2px" }}>
                        Login
                    </h1>
                </div>
                <form className="login-div shadow p-4 mb-5 bg-body rounded" onSubmit={onLogin}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder='Email' onChange={onChangeInput} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' name='password' onChange={onChangeInput} />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <p className='mt-3 mb-0'>Don’t Have an account? <a href="/register">Register</a></p>
                </form>
            </div>
        </>
    )
}

export default Login
