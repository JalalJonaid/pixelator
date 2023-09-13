import React from "react";

const ArtCard = ({ link }) => {

  return (
    <div className="artCard">
      <img src={link} alt="" height={"400px"} width={"400px"} />
      <h3>Title PlaceHolder:</h3>
      <p> Creator: </p>
      <p> Year created: </p>
      <p> Collection: </p>
      <p> Generate pixel button? </p>
    </div>
  );
};

export default ArtCard;
