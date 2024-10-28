
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home1 from './Pages/Home1/Home1';
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer";
import Hotels from "./Pages/Hotels/Hotels";
import HotelDetail from "./Pages/Hotels/HotelDetail";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import BlogDetail from "./Components/BlogDetail/BlogDetail";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/german-luxury" exact element={<Home1 heading={"Indien Rundreise"}/>} />
          <Route path="/german-luxury/uber-uns" exact element={<About heading={"Indien Rundreise"}/>} />
          <Route path="/german-luxury/was-kunden-über-uns-sagen" exact element={<About heading={"Indien Rundreise"}/>} />
          <Route path="/german-luxury/kontakt" exact element={<Contact heading={"Indien Rundreise"}/>} />
          <Route path="/german-luxury/indien-rundreise" exact element={<Hotels heading={"Indien Rundreise"}/>} />
          <Route path="/german-luxury/luxus-goldenes-dreieck" exact element={<Hotels heading={"Luxus Goldenes Dreieck"}/>} />
          <Route path="/german-luxury/indien-luxusreise" exact element={<Hotels heading={"Indien Luxusreise"}/>} />
          <Route path="/german-luxury/safari-rundreise" exact element={<Hotels heading={"Safari Rundreise"}/>} />
          <Route path="/german-luxury/nepal-rundreise" exact element={<Hotels heading={"Nepal Rundreise"}/>} />
          <Route path="/german-luxury/srilanka-rundreise" exact element={<Hotels heading={"Srilanka Rundreise"}/>} />
          <Route path="/german-luxury/bhutan-rundreise" exact element={<Hotels heading={"Bhutan Rundreise"}/>} />
          <Route path="/german-luxury/malediven-badeurlaub" exact element={<Hotels heading={"Malediven Badeurlaub"}/>} />
          <Route path="/german-luxury/indien-reiseblog" exact element={<Blog heading={"Indien Reiseblog"}/>} />
          <Route path="/blogs/:pathName" exact element={<BlogDetail />} />
          <Route path="/german-luxury/luxury-accomodation" exact element={<Hotels heading={"Luxury Accomodation"}/>} />
          <Route path="/german-luxury/luxury-accomodation/hotel-detail" exact element={<HotelDetail />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
