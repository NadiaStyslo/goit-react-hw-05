import { NavLink } from 'react-router-dom';

export const BackLink = ({ href, children }) => {
  return <NavLink to={href}>{children}</NavLink>;
};
