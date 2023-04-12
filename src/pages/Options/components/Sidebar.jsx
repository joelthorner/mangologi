import React from 'react';
import Ripple from '../../../components/Ripple/Ripple';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import {
  IconArchive,
  IconChangelog,
  IconGear,
  IconHouse,
  IconPerson,
} from '../../../components/Icons';

const Sidebar = () => {
  return (
    <div className="menu">
      <div className="brand">
        <NavLink to="/">
          <Logo inverse={true} />
          Mangologi
          <Ripple color={'var(--bs-primary)'} duration={500} />
        </NavLink>
      </div>

      <ul className="links list-unstyled">
        <li>
          <NavLink to="/">
            <IconHouse />
            Home
            <Ripple color={'var(--bs-primary)'} duration={500} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/options">
            <IconGear />
            Options
            <Ripple color={'var(--bs-primary)'} duration={500} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <IconPerson />
            Profile
            <Ripple color={'var(--bs-primary)'} duration={500} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">
            <IconArchive />
            Blog
            <Ripple color={'var(--bs-primary)'} duration={500} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/changelog">
            <IconChangelog />
            Changelog
            <Ripple color={'var(--bs-primary)'} duration={500} />
          </NavLink>
        </li>
      </ul>

      <ul className="footer list-inline">
        <li className="list-inline-item">
          <a
            href="https://github.com/joelthorner/mangologi/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contributors
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://github.com/joelthorner/mangologi/blob/master/PRIVACY_POLICY.md#pol%C3%ADtica-de-privacidad"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://github.com/joelthorner/mangologi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
