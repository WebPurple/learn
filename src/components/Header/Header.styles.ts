import styled from 'styled-components';
import { media } from '../../utils/css-utils';

const StyledHeader = styled.header`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;

  ${media.tablet`
    justify-content: center;
    padding: 4rem 2rem;
  `}
`;

export default StyledHeader;
