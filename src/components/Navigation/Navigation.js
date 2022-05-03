import { NavLink, Outlet } from 'react-router-dom';
import s from './Navigation.module.css';

const setActive = ({ isActive }) => (isActive ? s.activated : s.link);

const Navigation = () => (
  <>
    <header>
      <nav>
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <NavLink to="/movies" className={setActive}>
          Movies
        </NavLink>
      </nav>
    </header>

    <Outlet />
  </>
);

export default Navigation;
