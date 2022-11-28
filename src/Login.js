import React, { useContext,useState } from 'react'
import { LoginContext } from './Context'
import './Login.css'
const Login = () => {

  const {username,setUsername}=useContext(LoginContext)




  return (
    <div className='container'>
      <h1>Using Context Api</h1>
      <p>Username<input type="text" onChange={(e)=>setUsername(e.target.value)}></input></p>
     <p> Password<input type="text"></input></p>
      <p>{username.length>0 && <p>Hello {username}</p>}   <button onClick={()=>setUsername(username=>'')}>Clear</button></p>
    </div>
  )
}

export default Login
