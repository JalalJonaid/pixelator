import { useEffect, useState } from "react";
import "./App.css";
import ArtCard from "./Components/artCard";
import { getSingleArt } from "./api/fetchArt";

function App() {
  const [link, setLink] = useState("");

  useEffect(() => {
    try {
      getSingleArt(439)
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
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
