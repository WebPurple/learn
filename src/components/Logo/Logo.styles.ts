import styled from 'styled-components';
import { Link } from 'gatsby';
import { media, colorLipstick } from '../../utils/css-utils';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  min-width: 30rem;
  z-index: 1001;
  ${media.phone`
    margin-left: 2rem;
  `}
  ${media.desktop`
    margin-left: 0;
  `}
`;
export const StyledTitle = styled.span`
  font-size: 1.6rem;
  margin: 0;
  text-transform: uppercase;
  font-weight: bold;
  color: ${colorLipstick};
  ${media.phone`
    font-size: 2.6rem;
  `}
`;

export const StyledIcon = styled.svg`
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 1rem;
  ${media.phone`
    margin-right: 2rem;
  `}
`;
