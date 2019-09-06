import { PageContext } from '../interfaces';

export default (location: string, pageContext?: PageContext): string =>
  (pageContext && pageContext.navRootPath) ||
  `${location
    .split('/')
    .slice(0, -2)
    .join('/')}/`;
