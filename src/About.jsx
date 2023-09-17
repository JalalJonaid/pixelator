import React from "react";

export default function About() {
  const developers = [
    {
      name: "Jalal Jonaid",
      username: "JalalJonaid",
      bio: "Computer Science || Full Stack Developer || Digital Marketing",
      github: "https://github.com/JalalJonaid",
    },
    {
      name: "Shanice Griffin",
      username: "shanicegrif",
      bio: "Software Engineer || Passionate about helping to open the doors for more women of color in tech and advancing tech used in healthcare.",
      github: "https://github.com/shanicegrif",
    },
    {
      name: "Genesis Lara",
      username: "gen329",
      bio: "Passionate about software development and entrepreneurship. Currently expanding my knowledge through the Pursuit fellowship.",
      github: "https://github.com/gen329",
    },
    {
      name: "Abel Vargas",
      username: "salvagebar",
      bio: "Currently sharpening my software development skills through the Pursuit Fellowship.",
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
              <img
                src={`https://github.com/${developer.username}.png`}
                alt={`${developer.name}'s avatar`}
                className="card-img-top"
              />
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
