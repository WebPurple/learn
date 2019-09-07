import React, { useState, createRef } from 'react';
import { getQuery } from '../../utils/search';
import useClickOutside from '../../utils/ClickOutside';
import { SearchHit } from './components/Hit/Hit.interfaces';
import StyledForm from './Search.styles';
import getClassName from '../../utils/getClassName';
import { FOCUSED_CLASS_NAME } from '../../constants/furtherClassNames';
import Input from './components/Input';
import HitsWrapper from './components/HitsWrapper';

const Search: React.FC = () => {
  const ref = createRef<HTMLFormElement>();
  const [query, setQuery] = useState(getQuery(''));
  const [hits, setHits] = useState<SearchHit[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [focus, setFocus] = useState(false);

  useClickOutside(ref, () => setFocus(false));

  const shouldShowHits = query.query.length > 0 && hits.length > 0 && focus;
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => event.preventDefault();
  const className = getClassName('', [{ flag: focus, className: FOCUSED_CLASS_NAME }]);

  return (
    <StyledForm {...{ focus, ref, onSubmit, className }}>
      <Input {...{ query, setQuery, setIsSearching, setHits, setFocus, focus }} />
      {shouldShowHits && <HitsWrapper {...{ hits }} />}
    </StyledForm>
  );
};

export default Search;
