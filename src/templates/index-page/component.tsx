import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import { MarkdownPageProps, Article } from '../interfaces';
import IndexPageTemplate from './template';

const IndexPage: React.FC<MarkdownPageProps<Article>> = ({
  data: {
    markdownRemark: {
      frontmatter: { title },
    },
  },
}) => (
  <Layout pageTitle={title}>
    <IndexPageTemplate />
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
