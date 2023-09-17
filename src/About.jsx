import React from "react";

export default function About() {
  const developers = [
    {
      name: "Jalal Jonaid",
      bio: "Jalal bio placeholder",
      github: "https://github.com/JalalJonaid",
    },
    {
      name: "Shanice Griffin",
      bio: "Shanice bio placeholder",
      github: "https://github.com/janesmith",
    },
    {
      name: "Genesis Lara",
      bio: "Genesis bio placeholder",
      github: "https://github.com/alicebrown",
    },
    {
      name: "Abel Vargas",
      bio: "Abel bio placeholder",
      github: "https://github.com/salvagebar",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">About Our Developers</h2>
      <div className="row">
        {developers.map((developer, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card border border-4">
              <div className="card-body">
                <h5 className="card-title">{developer.name}</h5>
                <p className="card-text">{developer.bio}</p>
                <a
                  href={developer.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary rounded-pill"
                >
                  Visit GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
