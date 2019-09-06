import styled from 'styled-components';
import { Link } from '@reach/router';
import { colorWarmGrey, media, colorLipstick } from '../../../../utils/css-utils';

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 2.3rem;
  font-weight: 500;
  color: ${colorWarmGrey};
  ${media.tablet`
    font-size: 1.8rem;
  `};
  padding: 1.2rem 0;
  border: solid transparent;
  border-width: 0.3rem 0;
  transition: border-color 1s ease-out;
  display: inline-block;

  &:hover,
  &.active {
    border-bottom-color: ${colorLipstick};
  }
`;

export default StyledLink;
