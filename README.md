# MOVIESearcher project for Aston trainee program

Проект представляет собой обычный поисковик фильмов с функцией поиска по названию, по типу. Можно завести аккаунт и сохранять фильмы в избранное.

## React

Пишем функциональные компоненты c хуками в приоритете над классовыми.

Есть четкое разделение на умные и глупые компоненты

Есть рендеринг списков
[в полном описании фильма](https://github.com/DariaP9315/MovieSearcher-for-Aston-React-intensive/blob/create-project/src/components/Movie/Movie.js)

Реализована хотя бы одна форма
[форма регистрации/авторизации](https://github.com/DariaP9315/MovieSearcher-for-Aston-React-intensive/blob/create-project/src/components/Login/Login.js)

Есть применение Контекст API
[смена цветовой темы описания фильма](https://github.com/DariaP9315/MovieSearcher-for-Aston-React-intensive/blob/create-project/src/components/App/App.js)

Есть применение предохранителя
[ErrorBoundary](https://github.com/DariaP9315/MovieSearcher-for-Aston-React-intensive/blob/create-project/src/components/ErrorBoundary/ErrorBoundary.js)

Есть хотя бы один кастомный хук
[useFetch](https://github.com/DariaP9315/MovieSearcher-for-Aston-React-intensive/blob/create-project/src/hooks/useFetch.js)

Хотя бы несколько компонентов используют PropTypes
[Movie](https://github.com/DariaP9315/MovieSearcher-for-Aston-React-intensive/blob/create-project/src/components/Movie/Movie.js)
[Card](https://github.com/DariaP9315/MovieSearcher-for-Aston-React-intensive/blob/create-project/src/components/Card/Card.js)

Поиск не должен триггерить много запросов к серверу [useDebounce] (https://github.com/DariaP9315/MovieSearcher-for-Aston-React-intensive/blob/main/src/hooks/useDebounce.js)

Есть применение lazy + Suspense [Main] (https://github.com/DariaP9315/MovieSearcher-for-Aston-React-intensive/blob/main/src/pages/Main/Main.js)

## Redux

Используем Modern Redux with Redux Toolkit
[store](https://github.com/DariaP9315/MovieSearcher-for-Aston-React-intensive/blob/create-project/src/store/index.js)

Используем слайсы
[userSlice](https://github.com/DariaP9315/MovieSearcher-for-Aston-React-intensive/blob/create-project/src/store/slices/userSlice.js)

Есть хотя бы одна кастомная мидлвара
[userMiddleware](https://github.com/DariaP9315/MovieSearcher-for-Aston-React-intensive/blob/create-project/src/middleware/userMiddleware.js)

Используется RTK Query
[moviesApi](https://github.com/DariaP9315/MovieSearcher-for-Aston-React-intensive/blob/create-project/src/api/MoviesApi.js)

Используется Transforming Responses
[moviesApi](https://github.com/DariaP9315/MovieSearcher-for-Aston-React-intensive/blob/create-project/src/api/MoviesApi.js)
