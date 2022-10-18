const initialstate = {
    booksData: [],
    myStatus: ""
}

const bookReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "BORROW":
            return {
                ...state,
                booksData: [...state.booksData, action.payload],
                // localStor : [...state.booksData, localStorage.setItem("MyData",  
                // [JSON.stringify([action.data])])]

            }
        case "DELETE":
            return{
                ...state,
                booksData: state.booksData.filter(item => item._id !== action.payload._id) 
                
            }
           
        case "AVAILABLE":
            const status = state.booksData.map((elem)=>{
                if(elem._id === action.data){
                    return { ...elem, Status: elem.Status = "not" }
                }
                return elem
            })
            return { ...state, myStatus: status}
                    
        default: return state
            
     
                    
              
                
     
    }
   
}
export default bookReducer;
// localStorage.setItem("bookData",
//                 JSON.stringify(...state,action.data))]
