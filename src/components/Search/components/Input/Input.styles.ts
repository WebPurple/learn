import styled from 'styled-components';
import { colorWarmPurple, media } from '../../../../utils/css-utils';

export const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  height: 4rem;
`;

export const StyledInput = styled.input`
  font-size: 1.8rem;
  padding: 1.2rem 1.2rem 1.2rem 4rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${colorWarmPurple};
  &::placeholder {
    color: ${colorWarmPurple};
  }
  transition: width 0.3s;
  width: 0;

  ${media.tablet`
    width: 70px;
  `}

  &.focused {
    width: 130px;
  }
`;
