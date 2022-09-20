import { Link } from 'react-router-dom';
import './Card.css';
import PropTypes from 'prop-types';

function Card(props) {
  const { title, year, imdbID, poster } = props;

  return (
    <div id={'movie-' + imdbID} className="content__card">
      <img className="content__card_image" src={poster} alt={title} />
      <div className="content__card_description">
        <div>
          <h2 className="content__card_title">{title}</h2>
          <span className="content__card_year">{year}</span>
        </div>

        <Link to={`/movie-full/${imdbID}`} className="content__card_link">
          More
        </Link>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  props: PropTypes.objectOf(PropTypes.string),
  imdbID: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  poster: PropTypes.string,
  type: PropTypes.string,
};
