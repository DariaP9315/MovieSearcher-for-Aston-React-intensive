import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, createContext } from 'react';
import { isUserAuth } from '../../store/slices/userSlice';
import { useSelector } from 'react-redux';

import './App.css';
import Main from '../../pages/Main/Main';
import { Login } from '../../pages/Login/Login';
import { Register } from '../../pages/Register/Register';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import Header from '../Header/Header';
import { SearchResults } from '../../pages/SearchResults/SearchResults';
import { Movie } from '../../pages/Movie/Movie';
import { SavedMovies } from '../../pages/SavedMovies/SavedMovies';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

function App() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('dark');
  const isAuth = useSelector(isUserAuth);

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
