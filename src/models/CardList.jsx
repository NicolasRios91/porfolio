import React from "react";
import Card from "./card";
import allData from "../utils/data";
const CardList = () => {
  return allData.map((e) => {
    return (
      <Card
        key={e.image}
        cardImage={e.image}
        cardUrl={e.url}
        cardDescription={e.description}
      />
    );
  });
};

export default CardList;
