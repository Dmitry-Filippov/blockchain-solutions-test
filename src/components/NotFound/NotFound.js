import { NavLink } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <main className="not-found">
      <h1>404</h1>
      <h2>Упс, кажется такой страницы нет...</h2>
      <NavLink to="/" className="not-found__navlink">на главную</NavLink>
    </main>
  );
};

export default NotFound;
