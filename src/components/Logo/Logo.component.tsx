import React from 'react';
import { StyledLink, StyledTitle, StyledLogoIcon } from './Logo.styles';

const Logo: React.FC = () => {
  return (
    <StyledLink to="/">
      <StyledLogoIcon />
      <StyledTitle>webpurple learn</StyledTitle>
    </StyledLink>
  );
};

export default Logo;
