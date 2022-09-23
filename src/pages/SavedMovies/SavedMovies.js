import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { SavedMovie } from '../../components/SavedMovie/SavedMovie';
import { getUsername } from '../../store/slices/userSlice';
import movieApi from '../../api/MovieApi';
import { APIKey } from 'api/MovieApiKey';

import './SavedMovies.css';

export function SavedMovies() {
  const username = useSelector(getUsername);
  const [list, setList] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const usernameInLocalStorage = JSON.parse(localStorage.getItem(username));

    if (usernameInLocalStorage) {
      setFavorites(Object.keys(usernameInLocalStorage.favorites));
    }
  }, []);

  useEffect(() => {
    const fetchMovies = async (movieId) => {
      const response = await movieApi.get(`?apiKey=${APIKey}&i=${movieId}`).catch((err) => {
        console.log('Error:', err);
      });
      setList((prev) => [...prev, response.data]);
    };

    favorites.forEach((movieId) => {
      fetchMovies(movieId);
    });
  }, [favorites]);

  return (
    <section className="saved__movies">
      <div className="saved__movies_container">
        <h2 className="saved__movies_title">Your favorite movies</h2>
        <div className="saved__movies_cards">
          {list.length ? (
            list.map((movie) => {
              return <SavedMovie key={movie.imdbID} {...movie} />;
            })
          ) : (
            <p>Not movies yet</p>
          )}
        </div>
      </div>
    </section>
  );
}
