import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Search } from '../../components/Search/Search';
import { useFetch } from '../../hooks/useFetch';

import './SearchResults.css';

export function SearchResults() {
  const [type, setType] = useState('');
  const { name } = useParams();
  const { data, error } = useFetch(name, type);

  return (
    <section className="search-results">
      <Search />
      <p>
        <label>
          <input
            type="radio"
            name="type"
            value="all"
            onClick={() => setType('')}
            defaultChecked={type === 'all'}
          />
          <span className="search__filter_text">All</span>
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="movie"
            onClick={() => setType('movie')}
            defaultChecked={type === 'movie'}
          />
          <span className="search__filter_text">Movies only</span>
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="series"
            onClick={() => setType('series')}
            defaultChecked={type === 'series'}
          />
          <span className="search__filter_text">Series only</span>
        </label>
      </p>
      <div className="content__container">
        {data ? (
          data.map((movie) => {
            return (
              <div key={movie.imdbID} className="content__card">
                <img className="content__card_image" src={movie.Poster} alt={movie.title} />
                <div className="content__card_description">
                  <div>
                    <h2 className="content__card_title">{movie.Title}</h2>
                    <span className="content__card_year">{movie.Year}</span>
                  </div>

                  <Link to={`/movie-full/${movie.imdbID}`} className="content__card_link">
                    More
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <div className="spinner" />
        )}
      </div>
      {error ? <div className="search-list__error">Error</div> : null}
    </section>
  );
}
