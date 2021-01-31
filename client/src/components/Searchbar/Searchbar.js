import React, { useState, useEffect } from "react";
import updateListingsWithSearch from "../../redux/actions/updateListings.js";
import { connect } from "react-redux";

function Searchbar({ updateListingsWithSearch }) {
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
    await setSearchTerm(e.target.value);
  };

  useEffect(async () => {
    updateListingsWithSearch(searchTerm);
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

const mapDispatchToProps = {
  updateListingsWithSearch,
};

export default connect(null, mapDispatchToProps)(Searchbar);
