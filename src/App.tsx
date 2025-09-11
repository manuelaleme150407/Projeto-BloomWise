import Login from './components/Login/Login';;
import Signup from './components/SignUp/Signup';
import WhoAreYou from './components/WhoAreYou/WhoAreYou'
import Giver from './components/Giver/Giver';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import './App.css'
import Receiver from './components/Receiver/Receiver';
import SchoolMaterial from './components/SchoolMaterial/SchoolMaterial';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/whoAreYou" element={<WhoAreYou />} />
      <Route path="/Giver" element={<Giver />} />
      <Route path="/Receiver" element={<Receiver />} />
      <Route path="/SchoolMaterial" element={<SchoolMaterial />} />
      </Routes>
    </Router>
  )
}

export default App
