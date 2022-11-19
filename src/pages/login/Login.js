import React,{useState} from 'react'
import {useLogin} from '../../hooks/useLogin'
//styles
import './Login.css'

export default function Login() {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const {login, error, isPending}=useLogin()

  const handleSubmit =(e)=>{
    e.preventDefault()
    //backend activities
    login(email, password)
  }
  return (
   <form className='login__form' onSubmit={handleSubmit}>
    <h2>Login</h2>
    {/* label for login email */}
    <label>
      <span>Email:</span>
      <input
      type="email"
      onChange={(e)=>setEmail(e.target.value)}
      value={email}
      />
    </label>
{/* label for password */}
    <label>
      <span>Password:</span>
      <input
      type="password"
      onChange={(e)=>setPassword(e.target.value)}
      value={password}
      />
    </label>
    {!isPending && <button className='btn'>Login</button>}
    {isPending && <button className='btn' disabled>logining...</button>}
    {error && <p>{error}</p>}
   </form>
  )
}
