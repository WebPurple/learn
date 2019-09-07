import React, { useState, createRef, useContext, useEffect } from 'react';
import useClickOutside from '../../utils/ClickOutside';
import useResize from '../../utils/Resize';
import StyledHeader from './Header.styles';
import MenuIcon from '../MenuIcon';
import AsideTopContext from '../Contexts/AsideTopContext';
import Logo from '../Logo';
import NavBar from '../NavBar';
import Search from '../Search';

const Header: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [watchForHeader, setWatchForHeader] = useState(false);
  const { top, setTop } = useContext(AsideTopContext);
  const ref = createRef<HTMLElement>();

  useEffect(() => {
    setWatchForHeader(true);
  });

  useResize(ref, top, setTop);
  useClickOutside(ref, () => setIsMenuOpened(false));

  return (
    <StyledHeader ref={watchForHeader ? ref : null}>
      <Logo />
      <MenuIcon {...{ isMenuOpened, setIsMenuOpened }} />
      <NavBar {...{ isMenuOpened, setIsMenuOpened }} />
      <Search />
    </StyledHeader>
  );
};

export default Header;
