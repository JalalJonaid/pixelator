import { useEffect, useState } from "react";
import "./App.css";
import ArtCard from "./Components/artCard";
import { getSingleArt } from "./api/fetchArt";
import { getValidId } from "./api/fetchArt";

function App() {
  const [link, setLink] = useState("");

  const getID = () => {
    try {
      getValidId()
      .then((data) => data.json())
      .then((res) => {
        console.log(res.objectIDs[4]);
        return res.objectIDs[4]
      });
    } catch(err) {
      console.error('Error happening!', err)
    }
  }
console.log(getID())
  useEffect(() => {
    try {
      getSingleArt(getID())
      .then((data) => data.json())
      .then((res) => {
        setLink(res.primaryImage);
      });
    } catch(err) {
      console.error('Error happening!', err)
    }
      
  }, []);

  return (
    <>
      <ArtCard link={link} />
    </>
  );
}

export default App;
