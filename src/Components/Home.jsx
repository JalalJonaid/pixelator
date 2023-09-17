import React from "react";
import ArtCard from "./ArtCard";


const Home = ({link}) => {
  return (
    <div className='home-page' style={{ marginTop: "60px" }}>
      {link ? (<ArtCard link={link}/>) : null}
    </div>
  );
}

export default Home;
