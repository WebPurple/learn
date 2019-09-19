import styled from 'styled-components';
import { colorLiliac, media } from '../../utils/css-utils';

const StyledForm = styled.form`
  border-radius: 3px;
  display: flex;
  align-items: center;
  position: absolute;
  margin-left: -5rem;
  left: 100%;
  z-index: 100;
  top: 50%;
  transform: translate(-100%, -50%);
  background-color: transparent;
  transition: all 0.3s;
  z-index: 1002;
  width: 5.2rem;

  &.focused {
    background-color: ${colorLiliac};
    width: 100%;
    left: 0;
    top: 0;
    transform: none;
    height: 6rem;
    margin: 0;
    border-radius: 0;
  }

  ${media.phone`
    width: auto;
    &.focused {
      width: auto;
      left: 100%;
      top: 50%;
      transform: translate(-100%, -50%);
      height: auto;
      margin-left: -6rem;
      border-radius: 3px;
    }
  `}

  ${media.tablet`
    transform: translate(-100%, 0);
    top: 4rem;
    margin-left: -2rem;
    &.focused {
      top: 4rem;
      transform: translate(-100%, 0);
      margin-left: -2rem;
    }
  `}
`;

export default StyledForm;
