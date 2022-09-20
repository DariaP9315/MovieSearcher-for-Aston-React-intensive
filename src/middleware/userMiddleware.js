export const userMiddleware = (store) => (next) => (action) => {
  let result;
  let currentStore = store.getState();
  const userObjInLocalStorage = JSON.parse(localStorage.getItem(`${currentStore.user.email}`));

  if (action.type === 'user/userSignUp' || action.type === 'user/userLogin') {
    const usernameInLocalStorage = JSON.parse(localStorage.getItem(`${action.payload.username}`));

    if (action.type === 'user/userSignUp') {
      if (usernameInLocalStorage) {
        result = next({ type: 'user/userSignUpError' });
      } else {
        localStorage.setItem(
          action.payload.username,
          JSON.stringify({
            username: action.payload.username,
            password: action.payload.password,
            favorites: {},
            history: {},
          }),
        );

        result = next(action);
      }
    } else if (action.type === 'user/userLogin') {
      if (usernameInLocalStorage) {
        if (usernameInLocalStorage.password === action.payload.password) {
          result = next(action);
        } else {
          result = next({ type: 'user/loginErrorWrongPassword' });
        }
      } else {
        result = next({ type: 'user/loginErrorUserNotRegistered' });
      }
    }
  } else if (
    action.type === 'user/toUserFavorites' ||
    action.type === 'user/toUserHistory' ||
    action.type === 'user/removeFromUserFavorites'
  ) {
    const favoritesObj = userObjInLocalStorage.favorites;
    const historyObj = userObjInLocalStorage.history;

    if (action.type === 'user/toUserFavorites') {
      if (!favoritesObj[action.payload]) {
        favoritesObj[action.payload] = true;
      }
    } else if (action.type === 'user/removeFromUserFavorites') {
      if (favoritesObj[action.payload]) {
        delete favoritesObj[action.payload];
      }
    } else if (action.type === 'user/toUserHistory') {
      if (!historyObj[action.payload]) {
        if (action.payload.trim().length > 0) {
          historyObj[action.payload] = true;
        }
      }
    }

    localStorage.setItem(
      currentStore.user.username,
      JSON.stringify({
        favorites: favoritesObj,
        history: historyObj,
      }),
    );

    result = next(action);
  } else {
    result = next(action);
  }

  return result;
};
