import React from 'react'
import "./Section.css"
import img1 from './Images/bookread.jpg'
import Header from './Header'
function Section() {
  return (
    <>
      <Header />
      <div className='sec_main'>
        <div className="content">
          <h1 className='wel'>WELCOME TO BOOK WORLD</h1>
          <button className='book_btn'>BOOKS</button> <br />
          <img className='img_section' src={img1} alt="" />
        </div>
      </div>
    </>
  )
}

export default Section