
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home1 from './Pages/Home1/Home1';
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home1 />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
