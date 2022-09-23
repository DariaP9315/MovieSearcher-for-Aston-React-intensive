import React, { useState } from 'react';
import { useDebounce } from 'hooks/useDebounce';
import { Link } from 'react-router-dom';
import './Search.css';
import searchIcon from '../../images/search_icon.svg';

export function Search(props) {
  const [name, setName] = useState('');
  const [query, setQuery] = useState('');
  const [searchName, setSearchName] = useState(name || '');
  const debouncedSearchName = useDebounce(searchName, 100);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setSearchName(e.target.value);
  };

  const handleSubmit = (debouncedSearchName) => {
    if (toString(debouncedSearchName).trim() === '') return;
  };

  return (
    <form className="search__container" noValidate>
      <input
        className="search__input"
        type="search"
        value={debouncedSearchName}
        onChange={handleChange}
        placeholder="What movie are we looking for?"
      />
      <Link to={`/search/${debouncedSearchName}`}>
        <button className="search__button" onClick={handleSubmit}>
          <img className="search__button_image" src={searchIcon} alt="search" />
        </button>
      </Link>
    </form>
  );
}
