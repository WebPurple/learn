import React from 'react';
import StyledIcon, { StyledRect, closeBars, openBars, svgAttrs } from './MenuIcon.styles';
import { NavBarProps } from '../NavBar/NavBar.interfaces';

const MenuIcon: React.FC<NavBarProps> = ({ isMenuOpened, setIsMenuOpened, ...otherProps }) => {
  const { leftBar, centerBar, rightBar } = isMenuOpened ? closeBars : openBars;
  const onClick = (): void => setIsMenuOpened(!isMenuOpened);

  return (
    <StyledIcon {...{ onClick, ...svgAttrs, ...otherProps }}>
      <StyledRect width="30" height="5" transform={leftBar} fill="#e62270" />
      <StyledRect width="30" height="5" transform={centerBar} fill="#e62270" />
      <StyledRect width="30" height="5" transform={rightBar} fill="#e62270" />
    </StyledIcon>
  );
};

export default MenuIcon;
