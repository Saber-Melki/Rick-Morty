import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value); // Trigger the search immediately as the user types
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}> {/* Prevent form submission on Enter */}
      <input
        type="text"
        placeholder="Search for characters"
        value={input}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchBar;
