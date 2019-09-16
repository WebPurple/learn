import React from 'react';
import MainWithNavigation from '../../components/MainWithNavigation';
import ContentsGlobalStyle from './styles';
import ContentsPageTemplateComponent from './interfaces';
import { Navigation } from 'gatsby-dynamical-navigation';
import LogoLoader from '../../components/LogoLoader';

const ContentsPageTemplate: ContentsPageTemplateComponent = ({ title, location }) => {
  return (
    <MainWithNavigation>
      <ContentsGlobalStyle />
      <h1>{title}</h1>
      <Navigation root={location} target={location} Loader={LogoLoader} />
    </MainWithNavigation>
  );
};

export default ContentsPageTemplate;
