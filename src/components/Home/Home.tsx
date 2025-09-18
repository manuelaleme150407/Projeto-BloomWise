import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import OurProject from "../OurProject/OurProject";
import Differential from "../Differential/Differential";
import About from "../About/About";
import Section1 from "../Sections/Section1";
import Questions from "../Questions/Questions";
// import Maps from "../Maps/Maps"

function Home() {
  return (
    <>
      <Header />
      <OurProject />
      <Differential />
      <Section1 />
      <About />
      <Questions />
      <Footer />
      {/* <Maps/> */}
    </>
  );
}

export default Home;
