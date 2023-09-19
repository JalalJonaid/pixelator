import { useEffect, useState } from "react";
import "./App.css";
import { getSingleArt, getValidIds } from "./api/fetchArt";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import About from "../src/About";
import Collections from "./Components/Collections";

function App() {
  const [link, setLink] = useState(null)

  const getID = async () => {
    try {
      const response = await getValidIds();
      const data = await response.json();

      const randomIndex = Math.floor(Math.random() * data.objectIDs.length);
      const randomObjectID = data.objectIDs[randomIndex];

      console.log(randomObjectID);

      return randomObjectID;
    } catch (err) {
      console.error('Error happening!', err);
      throw err;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let id = await getID();
        let response = await getSingleArt(id);
        let data = await response.json();
  
        while (!data.primaryImage) {
          id = await getID();
          response = await getSingleArt(id);
          data = await response.json();
        }
  
        setLink(data);
        
      } catch (err) {
        console.error('Error happening!', err);
      }
    };
    fetchData();
  }, []);
  

  return (
    <>
      <div className="container">
        <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home link = {link} />} />
              <Route path="/about" element={<About />} />
              <Route path="/collections" element={<Collections />} />
            </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
