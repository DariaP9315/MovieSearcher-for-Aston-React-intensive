import { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../components/App/App';
import { useFetchOneMovieQuery } from '../../api/MoviesApi';
import { toUserFavorites, isUserAuth, removeFromUserFavorites } from '../../store/slices/userSlice';
import './Movie.css';

function Movie() {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const isAuth = useSelector(isUserAuth);
  const { data, isLoading } = useFetchOneMovieQuery(`${imdbID}`);
  const [removeActive, setRemoveActive] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);

  const themeToggle = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  if (isLoading) {
    return <div className="spinner" />;
  }

  const { country, genre, plot, poster, title, year, imdbRating, runtime } = data;

  const handleClick = () => {
    dispatch(toUserFavorites(`${imdbID}`));
    setRemoveActive(() => !removeActive);
    if (!removeActive) {
      dispatch(removeFromUserFavorites(`${imdbID}`));
      setRemoveActive(() => !removeActive);
    }
  };

  const runtimeIsNum = runtime.replace(/[^+\d]/g, '');
  const hoursDuration = ((runtimeIsNum / 60) | 0) + ' h ' + (runtimeIsNum % 60) + ' min';
  const genreItems = genre.split(', ').map((item, id) => (
    <li className="movie__full_genre" key={id}>
      {item}
    </li>
  ));
  const countryItems = country.split(', ').map((item, id) => (
    <span className="movie__full_country" key={id}>
      {item}
    </span>
  ));

  return (
    <>
      <div className={theme === 'dark' ? 'movie__full dark' : 'movie__full light'}>
        <div className="movie__full_about">
          <img className="movie__full_poster" src={poster} alt={title} />

          <div className="movie__full_text-block">
            <div className="movie__full_title-and-like">
              <h1 className="movie__full_title">{title}</h1>
              {isAuth ? (
                <button
                  className={removeActive ? 'movie__full_like' : 'movie__full_like-active'}
                  onClick={handleClick}></button>
              ) : (
                ''
              )}
            </div>
            <p>
              {countryItems.length > 1 ? 'Countries: ' : 'Country: '}
              {countryItems}
            </p>

            <p>
              IMDb rating: <span className="movie__full_rating">{imdbRating}</span>
            </p>

            <p>Год: {year}</p>
            {runtimeIsNum !== 0 ? <p>Duration: {hoursDuration}</p> : ''}

            <ul className="movie__full_genres">{genreItems}</ul>
            <p className="movie__full_description">{plot}</p>
            <button className="theme-toggler" onClick={themeToggle}>
              {theme === 'dark' ? 'Light' : 'Dark'} mode
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { Movie };

Movie.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
  imdbID: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  poster: PropTypes.string,
  type: PropTypes.string,
  imdbRating: PropTypes.number,
  runtime: PropTypes.number,
};
