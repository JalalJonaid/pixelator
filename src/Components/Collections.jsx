import React, { useEffect, useState } from "react";

const Collections = () => {
  const [artWorks, setArtWorks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtWorks = async () => {
      try {
        const departmentId = 1;
        const response = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${departmentId}`
        );

        if (!response.ok) {
          throw new Error("Network response not ok!");
        }

        const data = await response.json();
        const objectIDs = data.objectIDs;

        const promises = [];
        const validArtworks = [];

        for (
          let i = 0;
          i < objectIDs.length && validArtworks.length < 20;
          i++
        ) {
          const objectID = objectIDs[i];
          const objectResponse = await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
          );
          const objectData = await objectResponse.json();

          if (objectData.primaryImage) {
            validArtworks.push(objectData);
          }
        }

        setArtWorks(validArtworks);
      } catch (error) {
        setError(error);
      }
    };
    fetchArtWorks();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ marginTop: "60px" }}>
      <h1>Artworks from the Department</h1>
      <form>
        <label for="">See sample art from a certain Department (enter a number btween 1 & 21): </label>
        <input type="number" id="departmentId" name="departmentId" min={1} max={21} required/>
        <button type="submit" className="btn btn-danger">
          Search
        </button>
      </form>
      <div className="artworks">
        {artWorks.map((artwork) => (
          <div key={artwork.objectID} className="artwork">
            <img
              src={artwork.primaryImage}
              alt={artwork.title}
              height="400px"
              width="400px"
            />
            <h3>{artwork.title}</h3>
            <p>{artwork.artistDisplayName}</p>
            <p>{artwork.objectDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
