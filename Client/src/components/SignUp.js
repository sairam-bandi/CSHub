import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import '../styling/HODlogin.css'

const SignUp = () => {

  const history = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  async function submit(e){
    e.preventDefault();
    //validation
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      setErrorMessage("Invalid email address");
      return;
    }

    if(password.length < 5){
      setErrorMessage("Password must be atleast 5 characters");
      return;
    }


    try {
      console.log(email,password)
      await axios.post("http://localhost:5000/register",{email,password})
      .then(res => {
        if(res.data=="User exist"){
        //   history("/hod",{state : {id:email}})
            console.log("User already exists. Please login")
            setErrorMessage("User already exists. Please login")
        }
        else if(res.data == "User doesn't exist"){
            history("/hod",{state : {id:email}})
        }
      })
      .catch(e => {
        alert("Wrong details");
        console.log(e)
      })
    } catch (error) {
      console.log(error);
    }
  }

    return (
    <div className="LoginPage">
      <h1>Register</h1>

      <form action="POST">

        <input type='email' placeholder='Email' onChange = {(e) => {setEmail(e.target.value)}}/>
        <input type='password' placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}/>

      <input type='submit' onClick={submit} />
      </form>

      <div className='error-message'>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      
      <br />
      <p>OR</p>
      <div className='end-title'>
        <Link to="/login">Login</Link>
      </div>
    </div>
    );
}

export default SignUp;