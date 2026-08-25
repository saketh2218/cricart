import { useState } from 'react';

const SearchBar = () => {
    const [query,setquery] = useState('');
   const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      console.log("Searching for:", query);
    }
  };
  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Search for bats, balls, gloves..."
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar