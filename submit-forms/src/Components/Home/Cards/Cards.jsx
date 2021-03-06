import React from "react";
import Card from "./Card";
import card_data from "./card_data";
import "./Cards.css";
import { Link } from "react-router-dom";

function Cards() {
  const cardDistribution = (data, side) => {
    return data
      .filter((card) => card.side === side)
      .map((card) => <Card key={card.id} data={card} />);
  };

  return (
    <>
      <div className="cards_component flex column">
        <div className="container">
          <div className="cards-container">
            <div className="cards-container__left">
              {cardDistribution(card_data, "left")}
            </div>
            <div className="cards-container__right">
              {cardDistribution(card_data, "right")}
            </div>
          </div>
        </div>
        <div className="cards__explore-more">
          <h5>
            <Link to="/component/1">Explore this component.</Link>
          </h5>
        </div>
      </div>
    </>
  );
}

export default Cards;
