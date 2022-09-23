//import { Movies } from '../Movies/Movies';
import { lazy, Suspense } from 'react';
import { Search } from '../../components/Search/Search';
import { useFetchAllMoviesQuery } from '../../api/MoviesApi';
import { useState, CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '100px auto',
  borderColor: 'aqua',
};

function Main() {
  const { data } = useFetchAllMoviesQuery();
  const Movies = lazy(() => import('../../components/Movies/Movies'));

  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState('#ffffff');

  return (
    <main className="container">
      <Search />
      <Suspense
        fallback={
          <div className="sweet-loading">
            <ClipLoader color={color} loading={loading} cssOverride={override} size={100} />
          </div>
        }>
        <Movies movies={data} />
      </Suspense>
    </main>
  );
}

export default Main;
