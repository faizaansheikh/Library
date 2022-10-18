export const borrowBook = (data)=> (dispatch,getState) =>{
            dispatch({
                type: "BORROW",
                payload: data
            })
    
    localStorage.setItem("bookData",JSON.stringify(getState().bookReducer.booksData)) 
}
export const deleteBook = (data)=> (dispatch,getState)=>{
    dispatch({
        type:"DELETE",
        payload:data
    })
    localStorage.setItem("bookData",JSON.stringify(getState().bookReducer.booksData)) 
}
export const avail = (id)=> (dispatch,getState)=>{
    dispatch({
        type:"AVAILABLE",
        data:id    
    })
   
      
}