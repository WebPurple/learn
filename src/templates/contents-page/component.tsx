import React from 'react';
import { graphql } from 'gatsby';
import { Article, MarkdownPageProps } from '../interfaces';
import ContentsPageTemplate from './template';
import getContentsPagesNavRoot from '../utils/getContentsPagesNavRoot';
import Layout from '../../components/Layout';
import Aside from '../../components/Aside';
import { NavigationStyle } from '../../utils/dynamicalNavigation';
import { Navigation } from 'gatsby-dynamical-navigation';
import LogoLoader from '../../components/LogoLoader';

const ContentsPage: React.FC<MarkdownPageProps<Article>> = ({
  pageContext,
  data: {
    markdownRemark: {
      frontmatter: { title },
      fields: { slug: location },
    },
  },
}) => {
  const root = getContentsPagesNavRoot(location, pageContext);

  return (
    <Layout pageTitle={title}>
      <Aside>
        <NavigationStyle />
        <Navigation {...{ root, target: location, Loader: LogoLoader }} />
      </Aside>
      <ContentsPageTemplate {...{ title, root, location }} />
    </Layout>
  );
};

export default ContentsPage;

export const pageQuery = graphql`
  query contentsPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
