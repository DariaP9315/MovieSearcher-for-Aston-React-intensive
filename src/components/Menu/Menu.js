import './Menu.css';
import { NavLink } from 'react-router-dom';
import { isUserAuth } from '../../store/slices/userSlice';
import { useSelector } from 'react-redux';

export default function Menu() {
  const isAuth = useSelector(isUserAuth);
  return (
    <ul className="menu">
      {isAuth ? (
        <>
          <li className="menu__link">
            <NavLink to="/fav">FAVORITE</NavLink>
          </li>
        </>
      ) : (
        ''
      )}
    </ul>
  );
}
