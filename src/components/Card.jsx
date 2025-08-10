import React from "react";
import "./Card.css";

const Card = ({ title, body }) => {
  return (
    <article className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-body">{body}</p>
      <button className="card-button">Read More</button>
    </article>
  );
};

export default Card;
