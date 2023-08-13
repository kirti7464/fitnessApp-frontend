import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios";

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
      });
  const handleChange =(e)=>{
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('https://whip-woolen-ketch.glitch.me/user/create', formData);
        const token = response.data.token;
        localStorage.setItem('token', token);
          // console.log('User signed up:', response.data);
        if (response.status === 200) {
          toast("Registered Successfully");
            setTimeout(() => {
            window.history.replaceState(null, '', '/recipe');
              navigate('/recipe');
            }, 1000); 
      } catch (error) {
        toast( error.response.data);
      }
    };
  
  return (
    <div>
      <div  className="row align-items-center" style={{height: "100vh"}}>
        <div  className="mx-auto col-10 col-md-8 col-lg-6 "style={{backgroundColor:"#f0f0fa",borderRadius:"20px",height:"72vh"}}>
          
        <form className="form-example" onSubmit={handleSubmit}>
            <h1>SIGN UP</h1>
            <p  className="description my-2"> 
            </p>
           
            <div  className="form-group my-2">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                 className="form-control username"
                id="name" 
                name="name"
                onChange={handleChange}
              />
            </div>
            <div  className="form-group my-2">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                 className="form-control username"
                id="email" 
                name="email"
                onChange={handleChange}
              />
            </div>
            <div  className="form-group my-2">
              <label htmlFor="phone">Contact:</label>
              <input
                type="text"
                 className="form-control username"
                id="phone" 
                name="phone"
                onChange={handleChange}
              />
            </div>
            <div  className="form-group my-2">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                 className="form-control password"
                id="password"
                name="password" onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-customized mt-4">
                Sign Up
            </button>
            <p className='my-3'>Already Registerd? <a href="/login">Login</a></p>
          </form>
        <ToastContainer />
        </div>
      </div>
    </div> 

  )
}

export default SignUp
