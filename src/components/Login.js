import React, { useState,useEffect } from 'react'

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  useEffect(()=>
  {
     const auth=localStorage.getItem('user');
       if(auth)
       {
         navigate('/')
       }

  })





  const HandleClick = async () => {
    // console.log(name, password, email);
    let result = await fetch('http://localhost:3000/login',
      {
        method: 'post',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        },
      }
    )
    result = await result.json();
    console.warn(result)
    if (result) {
      console.log({email,password})
      localStorage.setItem("user",JSON.stringify(result.user))
      localStorage.setItem("token",JSON.stringify(result.auth))
      console.log(JSON.stringify(result.auth))
      console.log("from frontend"+{email,password})
      navigate('/add')
    }
    else{
      alert("please enter correct details")
    }
  }
  return (
    <div className='login'>
      <input type="text" value={email} className='inputBox' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} className='inputBox' onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
      <button className="appButton" onClick={HandleClick} type="appButton" >Login</button>


    </div>
  )


}

export default Login;

