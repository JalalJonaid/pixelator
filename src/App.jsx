import { useEffect, useState } from "react";
import "./App.css";
import ArtCard from "./Components/artCard";
import { getSingleArt, getValidId } from "./api/fetchArt";

function App() {
  const [link, setLink] = useState("");

  const getID = async () => {
    try {
      const response = await getValidId();
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
      <ArtCard link={link} />
    </>
  );
}

export default App;