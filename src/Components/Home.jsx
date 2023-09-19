import React from "react";
import { useRef } from "react";
import './Home.css'
import {pixelit} from "../pixelit.js"

const Home = ({ link }) => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  return (
    <div className="home-page" style={{ marginTop: "60px" }}>
      <div className="art-card-container">
        {link ? (
          <div className="artCard">
            <img
              id="pixelitimg"
              ref={imageRef}
              src={link.primaryImage}
              style={{maxWidth: "200px", maxHeight: "auto"}}
              onLoad={() => {
                if (imageRef.current !== null) {
                  const px = new pixelit({
                    scale : 8,
                    palette : [[154, 99, 72]],
                    maxHeight: 400,
                    maxWidth: 400,
                  });
                  px.draw().pixelate();
                  imageRef.current.style.visibility = "visible"; //check w/ Tim
                }
              }}
            />
            <h3>{link.title}</h3>
            <p>{link.artistDisplayName}</p>
            <p>{link.objectDate}</p>
          </div>
        ) : (
          <div className="loading_image">
          <img src="../favicon/loading_image.png"></img>
          </div>
        )}
      </div>
      <canvas
        id="pixelitcanvas"
        style={{maxWidth: "200px", maxHeight: "auto"}}
        ref={canvasRef}
      ></canvas>
    </div>
  );
};

export default Home;
