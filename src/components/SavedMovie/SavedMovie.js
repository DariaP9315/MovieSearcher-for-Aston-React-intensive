import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { removeFromUserFavorites } from '../../store/slices/userSlice';

//import './FavoritesCard.css';

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

  const handleClick = () => {
    dispatch(removeFromUserFavorites(`${imdbID}`));
    setRemoveActive(() => !removeActive);
  };

  return (
    <div className="favorite__card" key={imdbID}>
      <Link to={`/movie-full/${imdbID}`}>
        <img className="favorite__card_image" src={poster} alt={title}></img>
        <div className="favorite__card_info">
          <h2 className="favorite__card_title">{title}</h2>
          <p className="favorite__card_text">
            <i>
              {year} / {imdbRating}
            </i>
          </p>
          <p className="favorite__card_text">{actors}</p>
          <p className="favorite__card_text">{runtime}</p>
        </div>
      </Link>
      <button
        className={removeActive ? 'remove-from-favorites active' : 'remove-from-favorites'}
        onClick={handleClick}></button>
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
