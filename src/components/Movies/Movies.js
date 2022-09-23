import Card from '../Card/Card';
import './Movies.css';

export default function Movies(data) {
  const { movies } = data;

  return (
    <section className="content__container">
      {movies
        ? movies.map((movie) => {
            return <Card key={movie.imdbID} {...movie} />;
          })
        : ''}
    </section>
  );
}
