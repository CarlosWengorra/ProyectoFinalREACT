import React, { useState } from 'react';
import { SearchNormal1 } from 'iconsax-react';
import './Search.css';

function Search(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    console.log('Realizar búsqueda con término:', searchTerm);
  };
    

  return (
    <div className="header__search">
      <button type="button" className="header__search--img" onClick={handleSearchClick}>
        <SearchNormal1 size="32" color="#424f46" />
      </button>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Busca tu personaje aquí..."
        minLength="4"
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
    </div>

  );
}

export { Search };
