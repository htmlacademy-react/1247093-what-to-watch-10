import Logo from '../logo/logo';
import { Link } from 'react-router-dom';

function Header(): JSX.Element {
  return (
    <header className="page-header film-card__head">
      <Logo />

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img
              src="img/avatar.jpg"
              alt="User avatar"
              width="63"
              height="63"
            />
          </div>
        </li>
        <li className="user-block__item">
          <Link className="user-block__link" to="#">
            Sign out
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
