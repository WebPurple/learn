import React from 'react';
import { NavBarProps } from './NavBar.interfaces';
import NavLink from './components/NavLink';
import { StyledNav, StyledUl, NavbarItem } from './NavBar.styles';

const NavBar: React.FC<NavBarProps> = ({ isMenuOpened }) => {
  return (
    <StyledNav className={isMenuOpened ? 'opened' : ''}>
      <StyledUl>
        <NavbarItem>
          <NavLink to="/">главная</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/externals/">внешние курсы</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/dictionaries/">справочники</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/lectures/">лекции</NavLink>
        </NavbarItem>
      </StyledUl>
    </StyledNav>
  );
};

export default NavBar;
