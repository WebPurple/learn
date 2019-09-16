import styled from 'styled-components';
import { colorGreyishBrown } from '../../utils/css-utils';

const StyledMain = styled.main`
  color: ${colorGreyishBrown};
  padding: 0 3rem;
  box-sizing: border-box;
  overflow: auto;
  width: 100%;

  & h1 {
    text-align: center;
  }

  & a {
    color: #1578d0;
  }
`;

export default StyledMain;
