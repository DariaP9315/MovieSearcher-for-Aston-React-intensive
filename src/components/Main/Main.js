import { Movies } from '../Movies/Movies';
import { Search } from '../Search/Search';

import { useFetchAllMoviesQuery } from '../../api/MoviesApi';

function Main() {
  const { data } = useFetchAllMoviesQuery();

  return (
    <main className="container">
      <Search />
      <Movies movies={data} />
    </main>
  );
}

export default Main;
