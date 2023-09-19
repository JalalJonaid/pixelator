import React from "react";
import { useRef } from "react";
import "./Home.css";
import { pixelit } from "../pixelit.js";

const Home = ({ link }) => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="home-page" style={{ marginTop: "70px" }}>
      <button className="button-74" onClick={handleRefresh}>
        PIXEL-ATE
      </button>
      <div
        className="art-card-container row row-cols-2"
        style={{ marginTop: "60px" }}
      >
        <div>
          {link ? (
            <div className="artCard row row-cols-2">
              <img
                src={link.primaryImage}
                alt={link.title}
                height="400px"
                width="400px"
                className="original-img"
              />
              <img
                id="pixelitimg"
                ref={imageRef}
                src={link.primaryImage}
                style={{ maxWidth: "200px", maxHeight: "auto" }}
                onLoad={() => {
                  if (imageRef.current !== null) {
                    const px = new pixelit({
                      scale: 8,
                      palette: [[154, 99, 72]],
                      maxHeight: 400,
                      maxWidth: 400,
                    });
                    px.draw().pixelate();
                  }
                }}
              />
              <div className="details">
                <h3>{link.title}</h3>
                <p>{link.artistDisplayName}</p>
                <p>{link.objectDate}</p>
              </div>
            </div>
          ) : (
            <div className="loading_image">
              <img src="../favicon/loading-image-unscreen.gif"></img>
            </div>
          )}
        </div>
        <canvas
          id="pixelitcanvas"
          style={{ maxWidth: "325px", maxHeight: "auto" }}
          ref={canvasRef}
        ></canvas>
      </div>
    </div>
  );
};

export default Home;
