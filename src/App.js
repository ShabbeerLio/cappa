
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
import Host from "./Host/Host";
import AuthToken from "./Host/AuthToken";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const title = "Luxury India Tour Packages | Luxury Vacation India - Lewis and Clark Tours"
  const description = "Lewis and Clark Tour is one of the best luxury tour operators in India. Experience the epitome of luxury India Vacations with us and uncover its natural beauty and rich culture. We create a tailor-made Luxury tour in India, ensuring an unforgettable journey from start to finish."

  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(apiData, "data")
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${Host}/api/category/fetchallcategory`, {
          headers: {
            'auth-token': `${AuthToken}`,
            'Content-Type': 'application/json',
          },
        });
        setApiData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home1 heading={"Indien Rundreise"} title={title} descriptions={description} />} />
          <Route path="/uber-uns" exact element={<About title={title} descriptions={description} heading={"Indien Rundreise"} />} />
          <Route path="/was-kunden-über-uns-sagen" exact element={<About title={title} descriptions={description} heading={"Indien Rundreise"} />} />
          <Route path="/kontakt" exact element={<Contact title={title} descriptions={description} heading={"Indien Rundreise"} />} />
          <Route path="/indien-rundreise" exact element={<Hotels heading={"Indien Rundreise"} />} />
          <Route path="/luxus-goldenes-dreieck" exact element={<Hotels heading={"Luxus Goldenes Dreieck"} />} />
          <Route path="/indien-luxusreise" exact element={<Hotels heading={"Indien Luxusreise"} />} />
          <Route path="/safari-rundreise" exact element={<Hotels heading={"Safari Rundreise"} />} />
          <Route path="/nepal-rundreise" exact element={<Hotels heading={"Nepal Rundreise"} />} />
          <Route path="/srilanka-rundreise" exact element={<Hotels heading={"Srilanka Rundreise"} />} />
          <Route path="/bhutan-rundreise" exact element={<Hotels heading={"Bhutan Rundreise"} />} />
          <Route path="/malediven-badeurlaub" exact element={<Hotels heading={"Malediven Badeurlaub"} />} />
          <Route path="/indien-reiseblog" exact element={<Blog title={title} descriptions={description} heading={"Indien Reiseblog"} />} />
          <Route path="/blogs/:pathName" exact element={<BlogDetail />} />
          <Route path="/luxury-accomodation" exact element={<Hotels heading={"Luxury Accomodation"} />} />
          <Route path="/luxury-accomodation/hotel-detail" exact element={<HotelDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
