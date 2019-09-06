import { GATSBY_LINK_COMPONENT_NAME } from '../../constants/customComponentsNames';
import rehypeReact from 'rehype-react';
import { Link } from 'gatsby';
import { createElement } from 'react';

const renderAst = new rehypeReact({
  createElement,
  components: { [GATSBY_LINK_COMPONENT_NAME]: Link },
}).Compiler;

export default renderAst;
