
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home1 from './Pages/Home1/Home1';
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer";
import Hotels from "./Pages/Hotels/Hotels";
import HotelDetail from "./Pages/Hotels/HotelDetail";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home1 />} />
          <Route path="/luxury-accomodation" exact element={<Hotels />} />
          <Route path="/luxury-accomodation/hotel-detail" exact element={<HotelDetail />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
