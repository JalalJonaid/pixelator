import React from 'react';
import ArtCard from './ArtCard';


const Home = ({link}) => {
  return (
    <div className='home-page' style={{ marginTop: "60px" }}>
      <ArtCard link={link}/>
    </div>
  );
}

export default Home;
