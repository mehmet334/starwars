import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSearch(value.trim());
  };

  return (
    <form className="search" onSubmit={submit}>
      <input
        type="text"
        placeholder="Search starships by name or model…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label="Search starships"
      />
      <button type="submit">Search</button>
    </form>
  );
}
