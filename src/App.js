
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home1 from './Pages/Home1/Home1';
import Home2 from './Pages/Home2/Home2';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home1 />} />
          <Route path="/home-2" exact element={<Home2 />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
