import React from "react";

const ArtCard = ({ link }) => {
  console.log(link);
  return (
    <div>
      <img src={link} alt="" height={"400px"} width={"400px"} />
    </div>
  );
};

export default ArtCard;
