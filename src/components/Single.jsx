import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import "./single.css"
import axios from 'axios'
// import { statusReducer } from './Reducers/available'
import { useDispatch, useSelector } from 'react-redux'
import { borrowBook } from './Action/action'
function Single() {
  const dispatch = useDispatch();
  // const status = useSelector((state) => state.statusReducer)
  // console.log(status);
 
  const [books, setBooks] = useState([])
  
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(`http://192.168.1.109:5000/books/${window.location.href.split("/")[4]}`)
      .then((res) => {
        setBooks(res.data)

      })

      .catch((err) => console.log(err, "error"))
    
  }, [])


  // const data = useSelector((state) => state.bookReducer.booksData)
  const auth = localStorage.getItem('auth')
   console.log(auth);
  const borrow = () => {
   
 
    if (!auth) {
      navigate('/login')
    }else{
      dispatch(borrowBook(books))
    }
  
    // localStorage.setItem("status",JSON.stringify(avail))
   
  
  }
  // useEffect(()=>{
    
  // },[])



  return (
    <>
      <Header />

      <div className="single_main">
        <div className="Addto_main">
          <div className="single_box_one">
            <img className='sin_img' src={books.Image} width="100%" alt="" />
          </div>
          <div className="single_box_two">
            <h2 className='eng'>{books.Name}</h2>
            <p className='enp'>{books.Description}</p>
            <h3 className='enr'>Rs {books.Price} </h3>

            <h3 className='enr'>Status :  </h3>
           <button className='bor_btn' onClick={ borrow}>Borrow</button>
          
          </div>
        </div>
      </div>


    </>
  )
}

export default Single;