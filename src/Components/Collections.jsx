import React, { useState } from "react";
import departmentData from "../departmentData/data.json"

const Collections = () => {
  const [artWorks, setArtWorks] = useState([]);
  const [departmentIdInput, setDepartmentIdInput] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (departmentIdInput === "" || departmentIdInput === "2") {
      setErrorMessage(true);
    } else {
      fetchArtworksByDepartment(departmentIdInput);
      form.reset();
    }
  };

  const fetchArtworksByDepartment = async (departmentId) => {
    try {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${departmentId}`
      );

      const data = await response.json();
      const objectIDs = data.objectIDs;
      const validArtworks = [];

      for (let i = 0; i < objectIDs.length && validArtworks.length < 20; i++) {
        const objectID = objectIDs[i];
        const objectResponse = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
        );
        const objectData = await objectResponse.json();

        if (objectData.primaryImage) {
          validArtworks.push(objectData);
        }
      }

      setErrorMessage(false);
      setArtWorks(validArtworks);
    } catch (error) {
      console.error(`Error fetching art pieces by department:`, error);
    }
  };

  return (
    <div className="collection" style={{ marginTop: "60px" }}>
      <h1>Artworks from the Department</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="departmentId">
          See sample art from a certain Department (enter a number between 1 &
          21):
        </label>
        <input
          type="number"
          id="departmentId"
          name="departmentId"
          min={1}
          max={21}
          value={departmentIdInput}
          onChange={(e) => setDepartmentIdInput(e.target.value)}
        />
        <button type="submit" className="btn btn-danger">
          Search
        </button>
      </form>
      <div className="error-message"> 
        {errorMessage && (
          <div className="alert alert-danger mt-3">
            Something is wrong with the input, try again.
          </div>
        )}
      </div>
      <div className="artworks ">
        {artWorks && artWorks.length > 0 && (
            <div>
            {artWorks.map((artwork) => (
              <div key={artwork.objectID} className="artwork">
                <img
                  src={artwork.primaryImage}
                  alt={artwork.title}
                  height="200px"
                  width="200px"
                />
                <p>{artwork.title}</p>
                <p>{artwork.artistDisplayName}</p>
                <p>{artwork.objectDate}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collections;
