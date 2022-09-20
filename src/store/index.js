import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import { userMiddleware } from '../middleware/userMiddleware';
import { moviesAPI } from '../api/MoviesApi';

export const store = configureStore({
  reducer: {
    [moviesAPI.reducerPath]: moviesAPI.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([moviesAPI.middleware, userMiddleware]),
});

const saveState = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    window.localStorage.setItem('app_state', serialisedState);
  } catch (err) {}
};

store.subscribe(() => {
  saveState(store.getState());
});
