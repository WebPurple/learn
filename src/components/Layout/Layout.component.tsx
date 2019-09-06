import React, { useState } from 'react';
import useSiteMetadata from '../../utils/SiteMetadata';
import GlobalStyle from '../GlobalStyle';
import LayoutComponent from './Layout.interfaces';
import MainWrapper from './Layout.styles';
import SiteHelmet from './components/SiteHelmet';
import Book from './components/Book';
import AsideTopContext from '../Contexts/AsideTopContext';
import Header from '../Header';

const Layout: LayoutComponent = ({ pageTitle, children }) => {
  const { title, description } = useSiteMetadata();
  const [asideTop, setAsideTop] = useState(0);

  return (
    <MainWrapper>
      <SiteHelmet {...{ pageTitle, title, description }} />
      <GlobalStyle />
      <AsideTopContext.Provider value={{ top: asideTop, setTop: (value): void => setAsideTop(value) }}>
        <Header />
        <Book>{children}</Book>
      </AsideTopContext.Provider>
    </MainWrapper>
  );
};

export default Layout;
