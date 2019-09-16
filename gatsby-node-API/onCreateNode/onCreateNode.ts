import { OnCreateNode } from '../interfaces';
import { createFilePath } from 'gatsby-source-filesystem';

const onCreateNode: OnCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      name: `slug`,
      node,
      value: createFilePath({ node, getNode }),
    });
  }
};

export default onCreateNode;
