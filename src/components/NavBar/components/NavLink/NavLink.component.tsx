import React from 'react';
import { Location } from '@reach/router';
import { IsNavLinkActive } from './NavLink.interfaces';
import { GatsbyLinkProps } from 'gatsby';
import StyledLink from './NavLink.styles';

const isNavLinkActive: IsNavLinkActive = (pathname, to) =>
  (pathname.match(new RegExp(`^${to}`)) && to !== '/') || pathname === to;

const NavLink: React.FC<GatsbyLinkProps<null>> = ({ to, children }) => (
  <Location>
    {({ location: { pathname } }): JSX.Element => (
      <StyledLink className={isNavLinkActive(pathname, to) ? 'active' : ''} to={to}>
        {children}
      </StyledLink>
    )}
  </Location>
);

export default NavLink;
