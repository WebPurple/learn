import React from 'react';
import { graphql } from 'gatsby';
import { NavigationStyle } from '../../utils/dynamicalNavigation';
import Aside from '../../components/Aside';
import { ArticleHTMLAST, MarkdownPageProps } from '../interfaces';
import ArticlePageTemplate from './template';
import Layout from '../../components/Layout';
import { Navigation } from 'gatsby-dynamical-navigation';
import LogoLoader from '../../components/LogoLoader';

const ArticlePage: React.FC<MarkdownPageProps<ArticleHTMLAST>> = ({
  pageContext,
  data: {
    markdownRemark: {
      htmlAst,
      fields: { slug: target },
      frontmatter: { title },
    },
  },
}) => {
  const root = (pageContext && pageContext.navRootPath) || '/';

  return (
    <Layout pageTitle={title}>
      <Aside>
        <NavigationStyle />
        <Navigation {...{ root, target, Loader: LogoLoader }} />
      </Aside>
      <ArticlePageTemplate {...{ htmlAst }} />
    </Layout>
  );
};

export default ArticlePage;

export const pageQuery = graphql`
  query articlePageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
