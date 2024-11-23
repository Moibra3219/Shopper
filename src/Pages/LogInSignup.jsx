import React from 'react'
import './CSS/LogInSignup.css'

function LogInSignup() {
  return (
    <div className='LogInSignup'>
      <div className='LogInSignup-container'>
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Your Password' />
        </div>
        <button>Sign Up</button>
        <p className='loginsignup-login'>Already have an account?<span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>I agree to the terms and conditions</p>
        </div>
      </div>
    </div>
  )
}

export default LogInSignup