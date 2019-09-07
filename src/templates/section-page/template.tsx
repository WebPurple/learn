import React from 'react';
import SectionPageTemplateComponent from './interfaces';
import SectionGlobalStyle from './styles';
import Main from '../../components/Main';
import { Navigation } from 'gatsby-dynamical-navigation';
import LogoLoader from '../../components/LogoLoader';

const SectionPageTemplate: SectionPageTemplateComponent = ({ title, targetPath }) => {
  return (
    <Main>
      <SectionGlobalStyle />
      <h1>{title}</h1>
      <Navigation root={targetPath} target={targetPath} Loader={LogoLoader} />
    </Main>
  );
};

export default SectionPageTemplate;
