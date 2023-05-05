import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<Signin />} />
      <Route path='/signup' element={<Signup />}/>
    </Routes>
  </>
}

export default App;
