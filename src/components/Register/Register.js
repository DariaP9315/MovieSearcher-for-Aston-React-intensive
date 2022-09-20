import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSignUp, loginError, loginErrorText, redirect } from '../../store/slices/userSlice';
import './Register.css';

export function Register() {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });
  const logInError = useSelector(loginError);
  const logInErrorText = useSelector(loginErrorText);
  const redirectHome = useSelector(redirect);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userSignUp(values));
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
    <section className="register">
      <div className="sign-up_window">
        <h2 className="sign-up__header">Sign Up</h2>
        <p className="sign-up__text">Create an account.</p>

        <form onSubmit={handleSubmit} className="form">
          <input
            onChange={handleUsernameInputChange}
            value={values.username}
            className="sform__input"
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
            Sign Up
          </button>
        </form>
        <p className="form__question">
          Already have an account?
          <Link to="/login" className="form__link">
            Login
          </Link>
        </p>
        {logInError ? <div className="login__error">{logInErrorText}</div> : null}
      </div>
    </section>
  );
}
