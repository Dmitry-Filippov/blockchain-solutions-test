import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul>
          <li className="header__link">
            <NavLink to="/" className="header__navlink">
              Главная
            </NavLink>
          </li>
          <li className="header__link">
            <NavLink to="/profile" className="header__navlink">
              Портфель
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
