import React from 'react'
import { useState } from 'react';
import {useLogin} from '../../hooks/useLogin';
import {Link} from "react-router-dom";
import Navbar from '../../components/navbar/navbar'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, isLoading, error, status} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

return (
  <div>
    <Navbar />
  <form className='login' onSubmit={handleSubmit}>
    <label>Email</label>
    <input type ='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
  
    <label>Password</label>
    <input type ='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
  
  <button disabled={isLoading}>Login</button>
  {error && <div className='error'>{error}</div>}
  <p>{status}</p>
  <button>
  <Link to ='/signup'>  Signup </Link>
  </button>
  
  </form>
  </div>
)

}

export default Login