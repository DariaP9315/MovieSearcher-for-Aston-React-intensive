import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toUserHistory } from '../../store/slices/userSlice';
import './Search.css';
import searchIcon from '../../images/search_icon.svg';

export function Search(props) {
  const [name, setName] = useState('');
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
    setName(e.target.value);
  };

  return (
    <form className="search__container" noValidate>
      <input
        className="search__input"
        type="search"
        value={name}
        onChange={handleChange}
        placeholder="What movie are we looking for?"
      />
      <Link to={`/search/${query}`}>
        <button className="search__button" onClick={() => dispatch(toUserHistory(`${query}`))}>
          <img className="search__button_image" src={searchIcon} alt="search" />
        </button>
      </Link>
    </form>
  );
}
