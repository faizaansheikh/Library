import React, { useEffect, useState } from 'react'
import "./books.css"
import { Link } from 'react-router-dom'
// import img1 from "./Images/book1.jpg"
// import img2 from "./Images/book2.jpg"
// import img3 from "./Images/book3.jpg"
// import img4 from "./Images/book4.jpg"
import Header from './Header'
import axios from 'axios'
function Books() {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [input, setInput] = useState("")

    const filter = (myCategory) => {
        const updateCategory = filterData.filter((element) => {
            return element.Category === myCategory
        })
        setData(updateCategory)
    }

    const fetchData = () => {
        axios
            .get(`http://192.168.1.109:5000/books`)
            .then((res) => {
                setData(res.data)
                setFilterData(res.data)
            })
            .catch((err) => (err, "error"))
    }
  
    useEffect(() => {
        fetchData()
    }, [])


  
    const available = () => {

    }



    const all = (myCategory) => {
        const updateCategory = filterData.filter((element) => {
            return element.Category !== myCategory
        })
        setData(updateCategory)

    }

    return (
        <>
            <Header />
            <div className='sec_books'>
                <h1 className='categ'>Categories</h1>
                <div className="fis_main">
                    <input className='input' type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className='search_btn'>Search</button>
                </div>

                <div className="book_main">
                    <Link className='book_link' onClick={() => all("all")}>ALL</Link>
                    <Link className='book_link' onClick={() => filter("English")}>ENGLISH</Link>
                    <Link className='book_link'>ISLAMIC</Link>
                    <Link className='book_link' onClick={() => filter("Stories")}>STORIES</Link>
                    <Link className='book_link' onClick={() => filter("Encyclopedia")}>ENCYCLOPEDIA</Link>
                </div>
                <div className="card">

                    {
                        data ? (
                            data.filter((user) => user.Name.toLowerCase().includes(input)).map((book, index) => {
                                return (

                                    <Link onClick={available} className='single_link' to={`/books/${book._id}`}>
                                        <div className="box1" key={index}>
                                            <img className='bookimg' src={book.Image} width="300px" alt="" />
                                            <h2>{book.Name}</h2>
                                            <h4 className='auth'>{book.AuthorName}</h4>
                                            {/* <h4 className='auths'>Status : Available</h4> */}
                                        </div><br /> <br />
                                    </Link>

                                )
                            })
                        ) : <h1>No Product</h1>

                    }
                </div>

            </div>
        </>
    )
}

export default Books