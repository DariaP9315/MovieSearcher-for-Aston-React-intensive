import { useNavigate } from 'react-router-dom';
import './Auth.css';

export default function Auth() {
  const navigate = useNavigate();
  return (
    <div className="auth__container">
      <button
        className="auth__button"
        type="submit"
        onClick={() => {
          navigate('/signin');
        }}>
        Signin
      </button>

      <button
        className="auth__button"
        type="submit"
        onClick={() => {
          navigate('/signup');
        }}>
        Signup
      </button>
    </div>
  );
}
