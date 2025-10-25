import React from "react";
import "../App.css";

const Card = ({ logo, company, postedAt, jobtitle, type, level, salary, location }) => {
  return (
    <article className="card">
      <header className="card-top">
        <img
          className="logo"
          src={logo || "https://via.placeholder.com/64?text=Logo"}
          alt={`${company} logo`}
          loading="lazy"
        />
        <div className="card-header-text">
          <h2 className="company">{company}</h2>
          <span className="postedAt">{postedAt}</span>
        </div>
      </header>

      <main className="card-body">
        <p className="jobtitle"><strong>{jobtitle}</strong></p>
        <p>{type} • {level}</p>
        <p className="salary">{salary}</p>
        <p className="location">{location}</p>
      </main>

      <footer className="card-footer">
        <button className="view-more" type="button">View More</button>
      </footer>
    </article>
  );
};

export default Card;
