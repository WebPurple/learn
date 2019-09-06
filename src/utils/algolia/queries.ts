import { AllMarkdownRemarkData } from '../../commonInterfaces/markdownRemark';

type TransformerArgs = {
  data: AllMarkdownRemarkData;
};

type Transformer = (
  args: TransformerArgs,
) => {
  title?: string;
  tags?: string;
  slug: string;
  excerpt: string;
}[];

const pageQuery = `{
  allMarkdownRemark {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          tags
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}`;

const transformer: Transformer = ({ data }) =>
  data.allMarkdownRemark.edges.map(({ node: { frontmatter: { title, tags }, fields: { slug }, excerpt } }) => ({
    title,
    tags,
    slug,
    excerpt,
  }));

const queries = [
  {
    query: pageQuery,
    transformer,
    indexName: 'search',
  },
];

export default queries;
