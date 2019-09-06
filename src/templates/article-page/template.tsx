import React from 'react';
import ArticlePageTemplateComponent from './interfaces';
import MainWithNavigation from '../../components/MainWithNavigation';
import renderAst from '../utils/articlePageRenderAst';

const ArticlePageTemplate: ArticlePageTemplateComponent = ({ htmlAst }) => (
  <MainWithNavigation>{renderAst(htmlAst)}</MainWithNavigation>
);

export default ArticlePageTemplate;
