import { Link } from 'react-router-dom';
import './Auth.css';

export default function Auth() {
  return (
    <div className="auth__container">
      <Link to="/signin">
        <button className="auth__button" type="button">
          Signin
        </button>
      </Link>

      <Link to="/signup">
        <button className="auth__button" type="button">
          Signup
        </button>
      </Link>
    </div>
  );
}
