import React from "react";

const Card = ({ character, handleSelect }) => {

  return (
    <div className="card-parent">
      <p>{character.name}</p>
      <p>Status : {character.status}</p>
      <p>Specie : {character.species}</p>
      <img src={character.image} style={{ width: "200px" }} />
        <button onClick={() => handleSelect(character)}>
          Add to favorites
        </button>
    </div>
  );
};

export default Card;
