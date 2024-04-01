import React, { useState } from "react";
import Card from "./widget/Card";

function Recomondation() {
  const [searchedArr, setSearchArr] = useState([]);
  const array = [
    "Joy",
    "Sadness",
    "Anger",
    "Love",
    "Fear",
    "Surprise",
    "Disgust",
    "Anticipation",
    "Trust",
    "Excitement",
    "Gratitude",
    "Hope",
    "Envy",
    "Guilt",
    "Shame",
    "Pride",
    "Compassion",
    "Sympathy",
    "Confusion",
    "Loneliness",
  ];
  const handleClick = (title) => {
    setSearchArr((prevArr) => [...searchedArr, title]);
  };
  return (
    <div className="reco-container">
    <h1>Movie Catogories</h1>
      <div className="searching-box">
        {array.map((item) => {
          return (
            <Card
              key={item}
              Title={item}
              handleClick={() => handleClick(item)}
            />
          );
        })}
      </div>
      <h4>You are seaching <span className="movienames">{searchedArr.join(", ")}</span> movies!</h4>
    </div>
  );
}

export default Recomondation;
