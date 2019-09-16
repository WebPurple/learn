import { GetNavRoots } from '../../interfaces';

const getNavRoots: GetNavRoots = edges =>
  edges
    .filter(
      ({
        node: {
          frontmatter: { isNavRoot },
        },
      }) => isNavRoot,
    )
    .sort(({ node: { fields: { slug: path1 } } }, { node: { fields: { slug: path2 } } }) => {
      const { length: length1 } = path1.split('/');
      const { length: length2 } = path2.split('/');
      return length2 - length1;
    });

export default getNavRoots;
