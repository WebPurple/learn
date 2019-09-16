import React from 'react';
import { graphql } from 'gatsby';
import { MarkdownPageProps, Article } from '../interfaces';
import Layout from '../../components/Layout';
import SectionPageTemplate from './template';

const SectionPage: React.FC<MarkdownPageProps<Article>> = ({
  data: {
    markdownRemark: {
      fields: { slug: targetPath },
      frontmatter: { title },
    },
  },
}) => {
  return (
    <Layout pageTitle={title}>
      <SectionPageTemplate {...{ title, targetPath }} />
    </Layout>
  );
};

export default SectionPage;

export const pageQuery = graphql`
  query sectionPageTemplate($id: String!) {
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
