import React from 'react';
import { SearchHit } from './Hit.interfaces';
import { HitLink, HitHeader, HitExcerpt } from './Hit.styles';

const Hit: React.FC<SearchHit> = ({ title, slug, excerpt }) => {
  return (
    <HitLink to={slug}>
      <HitHeader>{title}</HitHeader>
      <HitExcerpt>{excerpt}</HitExcerpt>
    </HitLink>
  );
};

export default Hit;
