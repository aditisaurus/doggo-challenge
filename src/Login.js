import React from 'react'
import './Login.module.css';

function Login() {
  return (
    <div className="login">
      <form>
        <input placeholder="Full Name" type="text" />

        <input placeholder="Your email address" type="email" />

        <input placeholder="Password" type="password" />
        
        <button>Login</button>
      </form>

      
    </div>
  )
}

export default Login