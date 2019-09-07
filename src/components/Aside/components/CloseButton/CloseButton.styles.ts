import styled from 'styled-components';
import { colorLipstick, media } from '../../../../utils/css-utils';

const StyledCloseButton = styled.button`
  position: absolute;
  top: 0;
  left: 100%;
  transform: translateX(-100%);
  margin: 2.75rem 0 0 -4rem;
  background: none;
  border: none;
  outline: none;
  animation: button 0.5s ease-out;

  &:before,
  &:after {
    content: '';
    width: 3.5rem;
    height: 1rem;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${colorLipstick};
    border-radius: 3px;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  ${media.desktop`
    display: none;
  `}

  &.hidden {
    display: none;
  }

  @keyframes button {
    from {
      opacity: 0;
      transform: scale(0) translateX(-100%);
    }
    50% {
      opacity: 0;
      transform: scale(0.5) translateX(-100%);
    }
    to {
      opacity: 1;
      transform: scale(1) translateX(-100%);
    }
  }
`;

export default StyledCloseButton;
