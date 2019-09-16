import styled from 'styled-components';
import { media } from '../../../../utils/css-utils';

const StyledArrow = styled.div`
  display: none;
  position: absolute;
  top: 25%;
  font-size: 5rem;
  color: #c788fe;
  right: 0;
  margin-right: 2rem;
  animation: arrow 2.5s infinite;

  ${media.tablet`
    display: block;
  `}
  ${media.desktop`
    display: none;
  `}

    &.hidden {
    display: none;
  }

  @keyframes arrow {
    from {
      margin-right: 2rem;
      opacity: 0;
    }
    60% {
      margin-right: 2rem;
      opacity: 0;
    }
    70% {
      opacity: 1;
    }
    to {
      margin-right: 0;
      opacity: 0;
    }
  }
`;

export default StyledArrow;
