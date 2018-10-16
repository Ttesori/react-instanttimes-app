import React from 'react';

const Search = (props) => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="search text here..."
          onChange={(e) => props.handleChange(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
