import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/gameboard');
  }

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/signup');
  }
  return (
    <>
    <form>
    <div>
      <div>
      <label for="username">
      Username:
      <input type = "text" id="username" placeholder='Enter your username:'/>
    </label>
      </div>
      <div>
      <label for="password">
      Password:
      <input type = "text" id="password" placeholder='Enter your password:'/>
    </label>
      </div>
      <div>
       <button onClick={handleLogin}>Login</button>
      </div>
    </div>
    </form>

    <div>
    <button onClick={handleSignup}>Sign up</button>
    </div>
    </>
  )
}

export default LoginPage