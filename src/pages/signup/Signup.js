import React,{useState} from 'react'
import { useSignup } from '../../hooks/useSignup'
//styles
import './Signup.css'

export default function Signup() {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [displayName, setDisplayName]=useState("")

  const { signup,isPending, error}= useSignup();
 


  const handleSubmit =(e)=>{
    e.preventDefault()
    //backend activities
   console.log(email,password, displayName)
   signup(email,password, displayName)
  
  }
  return (
    <form className='signup__form' onSubmit={handleSubmit}>
    <h2>SignUp</h2>

    {/* label for display name */}
    <label>
      <span>Display Name:</span>
      <input
      type="text"
      onChange={(e)=>setDisplayName(e.target.value)}
      value={displayName}
      />
    </label>
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
    {!isPending && <button className='btn'>SignUp</button>}
     {isPending && <button className='btn' disabled>Loading...</button>}
     {error && <p>{error}</p>}

   </form>
  )
}
