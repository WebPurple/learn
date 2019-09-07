import React from 'react';
import LogoIconDefs from '../../components/LogoIcon/components/LogoIconDefs';
import LogoIconBody from '../../components/LogoIcon/components/LogoIconBody';
import { StyledLogo, Animation } from './LogoLoader.styles';

const LogoLoader: React.FC = () => (
  <StyledLogo>
    <Animation />
    <LogoIconDefs />
    <LogoIconBody />
  </StyledLogo>
);

export default LogoLoader;
