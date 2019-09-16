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

  ${media.desktop`
    padding: 4rem 8.6rem;
    flex-direction: row;
    justify-content: flex-start;
  `}
`;

export default StyledHeader;
