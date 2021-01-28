import React, { useState, useEffect } from "react";

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchResults = async () => {
    console.log("hi");
    await fetch(`http://localhost:5000/listings?searchTerm=${searchTerm}`)
      .then(async (res) => await res.json())
      .then((result) => {
        console.log(result);
      });
  };

  const onChangeHandler = async (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(async () => {
    await fetchSearchResults();
  }, [searchTerm]);

  return (
    <div>
      <input
        className="search"
        type="text"
        size="50"
        value={searchTerm}
        onChange={onChangeHandler}
      ></input>
    </div>
  );
}

export default Searchbar;
