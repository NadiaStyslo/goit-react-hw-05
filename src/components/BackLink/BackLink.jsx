import { NavLink } from 'react-router-dom';
import css from './BackLink.module.css';

export const BackLink = ({ href, children }) => {
  return (
    <NavLink to={href} className={css.link}>
      {children}
    </NavLink>
  );
};
