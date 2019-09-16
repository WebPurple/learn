export default `
{
  allMarkdownRemark(limit: 1000) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          templateKey
          isNavRoot
        }
      }
    }
  }
}
`;
