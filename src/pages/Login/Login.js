import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogIn, loginError, loginErrorText, redirect } from '../../store/slices/userSlice';
import './Login.css';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    username: '',
    password: '',
  });
  const logInError = useSelector(loginError);
  const logInErrorText = useSelector(loginErrorText);
  const redirectHome = useSelector(redirect);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogIn(values));
  };

  const handleUsernameInputChange = (e) => {
    setValues({ ...values, username: e.target.value });
  };

  const handlePasswordInputChange = (e) => {
    setValues({ ...values, password: e.target.value });
  };

  const goHome = () => navigate('/', { replace: true });

  useEffect(() => {
    if (redirectHome) {
      goHome();
    }
  }, [redirectHome]);

  return (
    <section className="login">
      <div className="login__greeting">
        <h2 className="login__header">Login</h2>
        <p className="login__text">Enter your name and password.</p>

        <form onSubmit={handleSubmit} className="form">
          <input
            onChange={handleUsernameInputChange}
            value={values.username}
            className="form__input"
            type="text"
            placeholder="Username"
            required
          />
          <input
            onChange={handlePasswordInputChange}
            value={values.password}
            className="form__input"
            type="password"
            placeholder="Password"
            required
          />
          <button className="form__btn" type="submit">
            Login
          </button>
        </form>
      </div>
      {logInError ? <div className="form__text-error">{logInErrorText}</div> : null}
      <p className="form__question">
        Don't have an account yet?
        <Link to="/signup" className="form__link">
          Sign Up
        </Link>
      </p>
    </section>
  );
};
