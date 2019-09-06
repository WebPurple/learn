import React from 'react';
import StyledPoweredBy, { StyledAlgoliaLink } from './PoweredBy.styles';
import AlgoliaIcon from './AlgoliaIcon';

const LinkToAlgolia: React.FC = () => (
  <StyledAlgoliaLink href="https://www.algolia.com" target="_blank">
    <AlgoliaIcon />
  </StyledAlgoliaLink>
);

const PoweredBy: React.FC = () => (
  <StyledPoweredBy>
    Powered by
    <LinkToAlgolia />
  </StyledPoweredBy>
);

export default PoweredBy;
