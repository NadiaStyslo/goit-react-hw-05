import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './NavBar.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const NavBar = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          HOME
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          MOVIES
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
