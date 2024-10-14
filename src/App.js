
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home1 from './Pages/Home1/Home1';
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer";
import Hotels from "./Pages/Hotels/Hotels";
import HotelDetail from "./Pages/Hotels/HotelDetail";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home1 />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/kontakt" exact element={<Contact />} />
          <Route path="/luxury-accomodation" exact element={<Hotels />} />
          <Route path="/luxury-accomodation/hotel-detail" exact element={<HotelDetail />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
