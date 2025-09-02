import Header from './components/Header/Header'
import OurProject from './components/OurProject/OurProject'
import Differential from './components/Differential/Differential';
import About from './components/About/About'
import Section1 from './components/Sections/Section1';
import Questions from './components/Questions/Questions';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <OurProject />
      <Differential />
      <Section1/>
      <About />
      <Questions/>
      <Footer/>
      <Login/>
    </div>
  )
}

export default App
