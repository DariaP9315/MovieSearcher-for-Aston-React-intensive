import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeFromUserFavorites } from '../../store/slices/userSlice';
import './SavedMovie.css';

export function SavedMovie(movie) {
  const [removeActive, setRemoveActive] = useState(true);
  const dispatch = useDispatch();
  const {
    Title: title,
    Actors: actors,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbID,
    imdbRating,
  } = movie;

  const runtimeIsNum = runtime.replace(/[^+\d]/g, '');
  const hoursDuration = ((runtimeIsNum / 60) | 0) + ' h ' + (runtimeIsNum % 60) + ' min';

  const handleClick = () => {
    dispatch(removeFromUserFavorites(`${imdbID}`));
    setRemoveActive(() => !removeActive);
  };

  return (
    <div className="favorite__card" key={imdbID}>
      <Link to={`/movie-full/${imdbID}`} className="favorite__card_container">
        <img className="favorite__card_image" src={poster} alt={title}></img>
        <div className="favorite__card_description">
          <h2 className="favorite__card_title">{title}</h2>
          <p className="favorite__card_year">{year}</p>
          <p className="favorite__card_year">{imdbRating}</p>
          <p className="favorite__card_text">{actors}</p>
          {runtimeIsNum !== 0 ? <p>{hoursDuration}</p> : ''}
        </div>
      </Link>
      <button className="favorite__card_delete-btn" onClick={handleClick}></button>
    </div>
  );
}

SavedMovie.propTypes = {
  movie: PropTypes.objectOf(PropTypes.string),
  Title: PropTypes.string,
  Actors: PropTypes.string,
  Year: PropTypes.string,
  Poster: PropTypes.string,
  Runtime: PropTypes.string,
  imdbID: PropTypes.string,
  imdbRating: PropTypes.string,
};
