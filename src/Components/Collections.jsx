import React, { useState } from "react";
import departmentData from "../departmentData/data.json";

const Collections = () => {
  const [artWorks, setArtWorks] = useState([]);
  const [departmentIdInput, setDepartmentIdInput] = useState("");
  const [errorType, setErrorType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorType(null);
    setIsLoading(true);

    if (departmentIdInput === "") {
      setErrorType("empty");
      setIsLoading(false);
    } else if (departmentIdInput === "2") {
      setErrorType("nonExistent");
      setIsLoading(false);
    } else {
      fetchArtworksByDepartment(departmentIdInput);
      setDepartmentIdInput("");
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
          const exist = validArtworks.some(
            (artwork) => artwork.objectName === objectData.objectName
          );
          if (!exist) {
            validArtworks.push(objectData);
          }
        }
      }

      setErrorType(null);
      setArtWorks(validArtworks);
      setIsLoading(false);
    } catch (error) {
      console.error(`Error fetching art pieces by department:`, error);
      setIsLoading(false);
    }
  };

  return (
    <div className="collection" style={{ marginTop: "60px" }}>
      <h1>Artworks from the Department</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="departmentId">
          See sample art from a certain Department (enter a number from below):
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
      {errorType === "empty" && (
        <div className="alert alert-danger mt-3">
          Search is empty, enter a number.
        </div>
      )}
      {errorType === "nonExistent" && (
        <div className="alert alert-danger mt-3">
          Department does not exist, try again.
        </div>
      )}
      <div className="department-art">
        <div className="department-list">
          {departmentData.map((department) => (
            <li key={department.departmentId}>
              {department.departmentId}: {department.displayName}
            </li>
          ))}
        </div>
        {isLoading ? ( // Use a ternary operator to conditionally render either loading message or artworks
          <div className="alert alert-info mt-3">Loading... Please wait.</div>
        ) : (
          <div className="artworks">
            {artWorks && artWorks.length > 0 && (
              <div>
                {artWorks.map((artwork) => (
                  <div key={artwork.objectID} className="art">
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
        )}
      </div>
    </div>
  );
};

export default Collections;
