import React from "react";

const Card = ({ cardImage, cardUrl, cardDescription }) => {
  return (
    <>
      <div className="card-container">
        <div className="img-container">
          <a href={cardUrl} target="_blank">
            <div className="card-image">
              <img src={cardImage} className="cardImg" alt="card" />
            </div>
          </a>
        </div>

        <div className="card-description">
          <p className="card-description-text">{cardDescription}</p>
        </div>
      </div>
    </>
  );
};
export default Card;
