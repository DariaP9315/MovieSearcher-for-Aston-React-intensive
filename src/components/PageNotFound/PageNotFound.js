import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

export default function PageNotFond() {
  const navigate = useNavigate();
  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <button className="not-found__btn-back" onClick={() => navigate(-1)}>
        Назад
      </button>
    </section>
  );
}
