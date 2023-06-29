import React from "react";
import './Card.css'


export const Card = ({ name, type, image }) => {
    return (
      <div className="cardDesign">
        <div className="pokemonImage">
          <img src={image} alt={name} />
        </div>
        <div className="pokemonName">{name}</div>
        <div className="pokemonType">Type: {type}</div>
      </div>
    );
  };