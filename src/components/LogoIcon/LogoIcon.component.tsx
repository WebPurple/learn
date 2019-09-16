import React from 'react';
import LogoIconDefs from './components/LogoIconDefs';
import LogoIconBody from './components/LogoIconBody';

const LogoIcon: React.FC = () => (
  <svg>
    <LogoIconDefs />
    <LogoIconBody />
  </svg>
);

export default LogoIcon;
