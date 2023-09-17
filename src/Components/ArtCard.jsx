import React from "react";

const ArtCard = ({ link }) => {
  return (
    <div className="artCard">
      <img src={ link.primaryImage } alt="" height={"400px"} width={"400px"} />
      <h3>{ link.title }</h3>
      <p>{ link.artistDisplayName }</p>
      <p>{ link.objectDate }</p>

    </div>
  );
};

export default ArtCard;
