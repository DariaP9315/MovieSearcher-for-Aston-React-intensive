import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut, getUsername } from '../../store/slices/userSlice';
import account from '../../images/account.svg';
import './Account.css';

export function Account() {
  const dispatch = useDispatch();
  const username = useSelector(getUsername);

  return (
    <div className="account__container">
      <img className="account__image" src={account} alt="account_image" />
      <div className="account__info">
        <span className="account__email">{username}</span>
        <Link to="/" className="logout-btn" onClick={dispatch(userLogOut)}>
          Logout
        </Link>
      </div>
    </div>
  );
}
