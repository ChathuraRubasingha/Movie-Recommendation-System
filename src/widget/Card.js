import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-container" onClick={() => props.handleClick()}>
      {props.Title}
    </div>
  );
}

export default Card;
