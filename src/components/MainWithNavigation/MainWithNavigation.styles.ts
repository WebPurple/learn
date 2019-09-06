import styled from 'styled-components';
import StyledMain from '../Main/Main.styles';
import { media } from '../../utils/css-utils';

const StyledMainWithNavigation = styled(StyledMain)`
  margin-left: 3rem;
  ${media.tablet`
margin-left: 20rem;
`}
  ${media.desktop`
  margin-left: 30rem;
`}
`;

export default StyledMainWithNavigation;
