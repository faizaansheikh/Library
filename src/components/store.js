import { applyMiddleware, combineReducers, createStore } from "redux";
// import rootReducer from "./Reducers/rootReducer";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import bookReducer from "./Reducers/myReducer";
const rootReducer = combineReducers({
    bookReducer,
    
})

const booksData = localStorage.getItem('bookData') ? JSON.parse(localStorage.getItem('bookData')) : []

const initialState = {
    bookReducer: {
        booksData: booksData
    }
}
const middleware = [thunk]
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;