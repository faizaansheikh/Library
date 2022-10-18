
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { Link } from 'react-scroll';
import "./Header.css";

import NavMobile from './NavMobile';

const Header = () => {

  const auth = JSON.parse(localStorage.getItem("auth"))
  // const auth_arr = auth.email.split("").splice(0,5).join("")
  // console.log(auth_arr);
  // const auth_arr = auth.split(" ")
  // console.log(auth.email);
  // let { userName, email } = JSON.parse(auth)
  // console.log(userName);
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("auth")
    navigate('/login')
  }
  return (
    <>


      <div className="header_container">
        <div className="header_image">
          {/* <img className="header_img" src={img2} alt="logo" /> */}
          <span>
            <h3>LIBRARY</h3>
          </span>
        </div>
        <div className="header_link">
          <Link to="/" className="links">Home</Link>
          <Link to="/bookes" className="links">Books</Link>
          <Link className="links" to="/history">History</Link>


        </div>
        <div className="header_btn">
          {/* {
            !auth ? (<p className="left_name">{userName}</p>) : <p className="left_name">"userName"</p>
          } */}

          {
            auth ? <> <h3>{auth.email}</h3><Link to="/" className='left_btn' onClick={logout}>LOGOUT </Link> </>: <Link className='left_btn' to="/login">LOGIN</Link>
          }
        </div>
        {/* ({JSON.parse(auth).email}) */}
        <div className="header_menu">
          <NavMobile />
        </div>
      </div>
      {/* <Section1/> */}



    </>
  );
};

export default Header;