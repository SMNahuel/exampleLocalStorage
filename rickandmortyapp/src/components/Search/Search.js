import React, { useEffect, useState } from "react";
import axios from "axios";
const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      return await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${search}`
      );
    };
    fetchCharacter()
      .then((res) => {
        console.log(res);
        setResults(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error has occurred: ", err);
        setLoading(false);
      });
  }, [search]);

  return (
    <div className="search">
      {loading ? <p>Loading...</p> : null}
      {loading && <p>Loading...</p>}

      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a character"
      />
      {results !== []
        ? results.map((character, index) => {
            return <p>{character.name}</p>;
          })
        : null}
    </div>
  );
};

export default Search;
