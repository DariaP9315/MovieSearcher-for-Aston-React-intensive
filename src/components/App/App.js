import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, createContext } from 'react';
import { isUserAuth } from '../../store/slices/userSlice';
import { useSelector } from 'react-redux';

import './App.css';
import Main from '../Main/Main';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Header from '../Header/Header';
import { SearchResults } from '../SearchResults/SearchResults';
import { Movie } from '../Movie/Movie';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

function App() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('dark');
  const [token, setToken] = useState();
  const isAuth = useSelector(isUserAuth);
  if (token) {
    return <Login setToken={setToken} />;
  }
  return (
    <ErrorBoundary>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="page">
          <Header />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/signin" element={<Login />} />
            {isAuth ? (
              <Route path="/fav" element={<SavedMovies />} />
            ) : (
              <Route exact path="/" element={<Main />} />
            )}

            <Route path="/signup" element={<Register />} />
            <Route path="*" element={<PageNotFound navigate={navigate} />} />
            <Route path="/search/:name" element={<SearchResults />} />
            <Route path="/movie-full/:imdbID" element={<Movie />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
export const ThemeContext = createContext();
