//YOU DO NOT NEED TO CHANGE ANYTHING IN THIS FILE
import React, { useState, useEffect } from "react";
import "./App.css";
//Importing Axios to do a GET to our API
import axios from "axios";
import CardGrid from "./components/Cards/CardGrid";
import Favorite from "./components/Favorite/Favorite";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the Rick & Morty API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //Setting state for our Characters
  const [character, setCharacter] = useState(['1']);

  //Using a useEffect hook to fetch the characters from the API
  //This is the API we'll be using, familiarize yourself with it
  //> https://rickandmortyapi.com/api/character/
  // What properties can you already see? What do we need?

  const handleSelect = (characterSelect) => {
    /* Reservamos espacio para el nuevo array sin el que se selecciono */
    let newCharacter = character.filter(character =>  character.id !== characterSelect.id)
    /* Guaramados el nuevo array */
    setCharacter(newCharacter);
    /* Guardar el que se selecciono */
    const newFavorites = characterSelect;
    /* Pedimos los favoritos del Localstorage */
    var favorite = JSON.parse(localStorage.getItem("favorites"));

    if (!favorite) {
      /* Primera insercion */
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      /* Se agrega al array */
      favorite.push(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(favorite));
    }
  }

  useEffect(() => {
    const fetchCharacter = async () => {
      return await axios.get("https://rickandmortyapi.com/api/character/");
    };

    fetchCharacter()
      .then((res) => {
        setCharacter(res.data.results);
      })
      .catch((err) => {
        console.log("Error has occurred: ", err);
      });
  },[]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CardGrid character={character} handleSelect={handleSelect} />} /> 
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
