import React from 'react';
import { StyledLink, StyledTitle, StyledIcon } from './Logo.styles';
import LogoIconDefs from '../LogoIcon/components/LogoIconDefs';
import LogoIconBody from '../LogoIcon/components/LogoIconBody';

const Logo: React.FC = () => {
  return (
    <StyledLink to="/">
      <StyledIcon>
        <LogoIconDefs />
        <LogoIconBody />
      </StyledIcon>
      <StyledTitle>webpurple learn</StyledTitle>
    </StyledLink>
  );
};

export default Logo;
