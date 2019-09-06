import styled from 'styled-components';
import { colorVerise } from '../../../../utils/css-utils';
import { Link } from 'gatsby';

export const HitHeader = styled.h4`
  color: ${colorVerise};
  font-size: 1.6rem;
`;

export const HitLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const HitExcerpt = styled.p`
  font-size: 1.4rem;
`;
