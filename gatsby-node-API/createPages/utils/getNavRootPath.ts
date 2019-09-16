import { GetNavRootPath } from '../../interfaces';

const getNavRootPath: GetNavRootPath = (navRoots, path) => {
  const navRoot = navRoots.find(({ node: { fields: { slug } } }) => path.match(slug));

  return (navRoot && navRoot.node.fields.slug) || '/';
};

export default getNavRootPath;
