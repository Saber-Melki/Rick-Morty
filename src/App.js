import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import CharacterGrid from "./components/CharacterGrid";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

function App() {

  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

 useEffect(() => {
  axios
    .get(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
    .then((response) => setCharacters(response.data.results || []))
    .catch((error) => {
      console.error(error);
      setCharacters([]); // Clear characters on error
    });
}, [searchTerm]);

  return (
    <div className="app">
      <div className="search-section">
        <h1 className="title">Rick & Morty Character Browser</h1>
        <SearchBar onSearch={setSearchTerm} />
      </div>
      <CharacterGrid characters={characters.slice(0, 10)} />
    </div>
  );
}

export default App;
