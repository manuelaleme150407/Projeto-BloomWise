import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';
import WhoAreYou from './components/WhoAreYou/WhoAreYou';
import Giver from './components/Giver/Giver';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import Receiver from './components/Receiver/Receiver';
import SchoolMaterial from './components/SchoolMaterial/SchoolMaterial';
import Uniform from './components/Uniform/Uniform';
import Cart from './components/ShoppingCar/ShoppingCar'
import Eletronics from './components/Eletronics/Eletronics'
import Maps from './components/Maps/Maps'
import { CartProvider } from './components/ShoppingCar/CartContext';
import { useState } from 'react';
import type { User } from './hooks/useAuth';
import NotFound from './components/NotFound/NotFound';
import Profile from './components/Profile/Profile';
import ThankYouPage from './components/ThankYouPage/ThankYouPage';

function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (loggedUser: User) => {
    setUser(loggedUser);
    console.log("Usuário logado:", loggedUser);
  };
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/loginn" element={<Login loginFn={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/whoAreYou" element={<WhoAreYou />} />
          <Route path="/Giver" element={<Giver />} />
          <Route path="/Receiver" element={<Receiver />} />
          <Route path="/SchoolMaterial" element={<SchoolMaterial />} />
          <Route path="/Uniform" element={<Uniform />} />
          <Route path="/Eletronics" element={<Eletronics />} />
          <Route path="/Cart" element={<Cart onClose={() => console.log("Fechar carrinho")} /> } /> 
          <Route path="/Maps" element={<Maps />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ThankYouPage" element={<ThankYouPage />} />

          <Route path="*" element={<NotFound />}   />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
