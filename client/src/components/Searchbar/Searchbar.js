import React, { useState } from "react";

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

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
