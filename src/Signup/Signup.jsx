import React, { useState } from 'react'
import "./signup.css"
import { json, Link, useNavigate } from 'react-router-dom'
function Signup() {
  const navigate = useNavigate();
  const[user,setUser] = useState({
    userName:"",email:"",password:"", cpassword:""
  })
  let name,value
  const getVal = (e)=>{
    name = e.target.name
    value = e.target.value
    setUser({ ...user, [name]: value })
  }
  const postData = async (e)=>{
    e.preventDefault();
    const{userName,email,password,cpassword} = user;
    const res = await fetch("http://192.168.1.109:5000/register",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        userName, email, password, cpassword
      })
     })
     const data = await res.json();
     if(data.status === 422 || !data){
      window.alert("invalid registration")
      console.log("invalid registration");
     }else{
      window.alert("registration success")
      console.log(data);
      localStorage.setItem("auth", JSON.stringify({userName, email}))
      console.log("registration success");
      navigate("/login")
     }
  }
  return (
    <>
   <div className="login_bgs">
   <div className="login">
    <h1 className='logs'>SIGNUP</h1>
    <form method='POST'>
    <p className='em'>Name</p>
    <input className='log_inputs' type="text" name='userName'
    value={user.userName}
    onChange={getVal}
    />
    <p className='em'>Email</p>
    <input className='log_inputs' type="email" name='email'
     value={user.email}
     onChange={getVal}
    />
    <p className='em'>Password</p>
    <input className='log_inputs' type="password" name='password'
     value={user.password}
     onChange={getVal}
    />
    <p className='em'>Confirm Password</p>
    <input className='log_inputs' type="password" name='cpassword'
     value={user.cpassword}
     onChange={getVal}
    />  <br />
    <button className='log_btn' onClick={postData}>Sign up</button>
    </form>
    <p>Already have an account <Link to="/login">Login</Link></p>
   </div>
   </div>
   </>
  )
}

export default Signup