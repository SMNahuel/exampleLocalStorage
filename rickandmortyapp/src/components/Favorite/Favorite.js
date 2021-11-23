import React, { useState } from "react";

const Favorite = () => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("favorites"))
  );
  const [allFavorite, setAllFavorite] = React.useState(
    JSON.parse(localStorage.getItem("favorites"))
  );

  const deleteFavorite = (character) => {
    let newFavorite = allFavorite.filter(
      (favorite) => favorite.id !== character.id
    );
    localStorage.setItem("favorites", JSON.stringify(newFavorite));
    setAllFavorite(newFavorite)
    setState(newFavorite);
  };

  return (
    <div>
      <h1>Favorite</h1>
      {state.map((character) => {
        return (
          <div>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
            <div>
              <button onClick={() => deleteFavorite(character)}>
                Eliminar
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorite;
