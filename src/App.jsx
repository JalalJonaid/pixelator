import { useEffect, useState } from "react";
import "./App.css";
import { getSingleArt, getValidIds } from "./api/fetchArt";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import About from "../src/About";
import Collections from "./Components/Collections";


function App() {
  const [link, setLink] = useState("");

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
        const id = await getID();
        const response = await getSingleArt(id);
        const data = await response.json();
        setLink(data.primaryImage);
      } catch (err) {
        console.error('Error happening!', err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home link={link} />} />
              <Route path="/about" element={<About />} />
              <Route path="/collections" element={<Collections />} />
            </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;