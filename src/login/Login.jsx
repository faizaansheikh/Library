import React, { useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const sign = async (e) => {
    e.preventDefault();
    const res = await fetch("http://192.168.1.109:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/jSON"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("invalid registration")
      console.log("invalid registration");
    } else {
      window.alert("registration success")
      localStorage.setItem("auth", JSON.stringify({ email }))
      console.log("registration success");
      navigate("/")
    }
  }


  return (
    <>
      <div className="login_bg">
        <div className="login">
          <h1 className='log'>LOGIN</h1>
          <form method='POST'>
            <p className='em'>Email</p>
            <input className='log_input' type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <p className='em'>Password</p>
            <input className='log_input' type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} /> <br />
            <button className='log_btn' onClick={sign}>LOGIN</button>
          </form>
          <p>Dont have an account <Link to="/signup" >Sign up</Link></p>
        </div>
      </div>
    </>
  )
}

export default Login;