import Login from './components/Login/Login';;
import Signup from './components/SignUp/Signup';
import WhoAreYou from './components/WhoAreYou/whoAreYou'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/whoAreYou" element={<WhoAreYou />} />
      </Routes>
    </Router>
  )
}

export default App
