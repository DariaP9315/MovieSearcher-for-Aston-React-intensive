export const userMiddleware = (store) => (next) => (action) => {
  let result;
  let currentStore = store.getState();
  const userObjInLocalStorage = JSON.parse(localStorage.getItem(`${currentStore.user.username}`));

  if (action.type === 'user/userSignUp' || action.type === 'user/userLogIn') {
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
          }),
        );

        result = next(action);
      }
    } else if (action.type === 'user/userLogIn') {
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
    action.type === 'user/removeFromUserFavorites'
  ) {
    const favoritesObj = userObjInLocalStorage.favorites;

    if (action.type === 'user/toUserFavorites') {
      if (!favoritesObj[action.payload]) {
        favoritesObj[action.payload] = true;
      }
    } else if (action.type === 'user/removeFromUserFavorites') {
      if (favoritesObj[action.payload]) {
        delete favoritesObj[action.payload];
      }
    }

    localStorage.setItem(
      currentStore.user.username,
      JSON.stringify({
        username: currentStore.user.username,
        password: currentStore.user.userPassword,
        favorites: favoritesObj,
      }),
    );

    result = next(action);
  } else {
    result = next(action);
  }

  return result;
};
