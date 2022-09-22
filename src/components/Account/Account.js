import { useDispatch } from 'react-redux';
import { userLogOut } from '../../store/slices/userSlice';
import account from '../../images/account.svg';
import './Account.css';
import { useNavigate } from 'react-router-dom';

export default function Account() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="account__container">
      <img className="account__image" src={account} alt="account image" />

      <button
        className="logout-btn"
        onClick={() => {
          dispatch(userLogOut());
          navigate('/');
        }}>
        Logout
      </button>
    </div>
  );
}
