
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate=useNavigate()
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
   
     useEffect(()=>
     {
        const auth=localStorage.getItem('user');
          if(auth)
          {
            navigate('/')
          }

     })





    const collectData = async() => {
        // console.log(name, password, email);
        let  result = await fetch('http://localhost:3000/register',
            {
                method: 'post',
                body: JSON.stringify({name,email,password }),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        )
        result = await result.json();
        if(result)
        {
                navigate('/add')
        }
        localStorage.setItem("user",JSON.stringify(result.user));
        localStorage.setItem("token",JSON.stringify(result.auth));
        
        
    }
    return (
        <div >
            <h1 className='register'>Register</h1>
            <input className="inputBox" type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Name" />

            <input className="inputBox"  value={email} type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Enter  Email" />
            <input className="inputBox" value={password} type="password" onChange={(e) => setPassword(e.target.value)}  placeholder="Enter password" />
            <button className="appButton" type="appButton" onClick={collectData} >SignUp</button>
        </div>
    )
}
export default SignUp;