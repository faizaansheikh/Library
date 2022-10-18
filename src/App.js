
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Screen/Home';
import Books from './components/Books';
// import Header from './components/Header'
import Single from './components/Single';
import Login from './login/Login';
import Signup from './Signup/Signup';
import History from './components/History';
function App() {
  const auth = localStorage.getItem('auth')
  return (
    <>
      {/* <Home/> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bookes' element={<Books />} />
        <Route path='/books/:id' element={<Single />} />
        <Route path='/history' element={<History />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />




      </Routes>
    </>
  );
}

export default App;
