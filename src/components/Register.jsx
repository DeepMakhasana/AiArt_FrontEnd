import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = "https://aiarts.onrender.com";
// const API = "http://localhost:8000";


const Register = () => {
  const navigate = useNavigate();
    const [userDetail, setUserDetail] = useState({
        username: '',
        email: '',
        password: '',
        cpassword: ''
    });

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setUserDetail({
            ...userDetail,
            [name]: value
        })
    }
    
    const onRegister = async (e) => {
        e.preventDefault();
        const { username, email, password, cpassword } = userDetail;
        if (username === "" || email === "" || password === "" || cpassword === "") {
          alert("pless enter all inputs..");
        } else {
          if(password === cpassword){
            // console.log("Enter in database.");
            const newUser = {
              username,
              email,
              password,
              cpassword,
            };

            console.log(newUser);
            
    
            await axios
              .post(`${API}/register`, newUser)
              .then((respons) => {
                alert(respons.data.message);
                navigate('/login');
              })
              .catch((err) => {
                alert(`No Register because of this error: ${err}`);
              });
            
            setUserDetail({
                username: '',
                email: '',
                password: '',
                cpassword: ''
            });
            }else{
              alert("Password not match!")
            }
          }
    }

  return (
    <div
        className="container d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="title">
          <h1 className="h2 mb-4" style={{ letterSpacing: "2px" }}>
            Registration
          </h1>
        </div>
        <form
          className="row g-3 register shadow p-4 mb-5 bg-body rounded"
          onSubmit={onRegister}
        >
          <div className="col-12">
            <label htmlFor="username" className="form-label">
              User name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="User name"
              value={userDetail.username}
              name="username"
              onChange={onChangeInput}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              value={userDetail.email}
              name="email"
              onChange={onChangeInput}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={userDetail.password}
              name="password"
              onChange={onChangeInput}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Conform Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="conform password"
              value={userDetail.cpassword}
              name="cpassword"
              onChange={onChangeInput}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary px-4">
              Registration
            </button>
            <p className='mt-3 mb-0'>Already Have an account? <a href="/login">Login</a></p>
          </div>

        </form>
      </div>
  )
}

export default Register
