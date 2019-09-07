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
  transition: margin-left 0.3s;
  z-index: 1002;

  &.focused {
    background-color: ${colorLiliac};
  }

  ${media.tablet`
    transform: translate(-100%, 0);
    top: 4rem;
    margin-left: -2rem;
  `}
  ${media.desktop`
    top: 50%;
    transform: translate(-100%, -50%);
  `}
`;

export default StyledForm;
