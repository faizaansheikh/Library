
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import "./history.css"
import { deleteBook } from './Action/action'
function History() {
    const auth = JSON.parse(localStorage.getItem("auth"))
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.bookReducer.booksData)
    // console.log(cartData);
    return (
        <>
            <Header />
            <div className="his_main">
                <h2 className='my_bok'>My Books</h2>
                <div className="flex">
                    {cartData ? (cartData.map((elem,index) => {
                        return (
                            <>
                                <div className="boxe" key={index}>
                                    <img className='img_box' src={elem.Image} alt="" />
                                    <h3>{elem.Name}</h3>
                                    <p className='pri'><span className='author_span'>Rs</span> : {elem.Price}</p>
                                    <p className='auth_last'><span className='author_span'>Author</span> : {elem.AuthorName}</p>
                                    <p className='auth_em'><span className='author_span'>Borrowed by</span> : {auth.email}</p>
                                    <button className='ret' onClick={()=>dispatch(deleteBook(elem))}>Return</button>
                                </div>
                            </>
                        )
                    })) : <h1>NO BOOKS HERE...</h1>

                    }


                </div>
            </div>
        </>
    )
}

export default History;