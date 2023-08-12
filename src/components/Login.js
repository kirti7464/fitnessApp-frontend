import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios";
import "../App.css"
function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    const response = await axios.post('https://whip-woolen-ketch.glitch.me/user/login', formData);
    const token = response.data.token;
    localStorage.setItem('token', token);
    console.log('Logged In :', response.data);
    if (response.status === 200) {
        toast("Logged In Succesfully")
        navigate('/recipe');
    }
  } catch (error) {
    toast(error.response.data);
  }
};

return (
<div>
  <div  className="row align-items-center" style={{height: "100vh",}}>
    <div  className="mx-auto col-10 col-md-8 col-lg-6 " style={{backgroundColor:"#f0f0fa",borderRadius:"20px",height:"52vh"}}>
      
    <form className="form-example" onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <p  className="description my-2"> 
        </p>
       
        <div  className="form-group my-2">
          <label htmlFor="username">Email:</label>
          <input
            type="text"
             className="form-control username"
            id="email" 
            name="email"
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
            Log in
        </button>
        <p className='my-3'>New User? <a href="/">Sign Up</a></p>
      </form>
    <ToastContainer />
    </div>
  </div>
</div> 

  )
}

export default Login;