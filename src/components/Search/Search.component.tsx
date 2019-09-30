import React, { useState, createRef } from 'react';
import { getQuery } from '../../utils/search';
import useClickOutside from '../../utils/ClickOutside';
import { SearchHit } from './components/Hit/Hit.interfaces';
import StyledForm from './Search.styles';
import getClassName from '../../utils/getClassName';
import { FOCUSED_CLASS_NAME } from '../../constants/furtherClassNames';
import Input from './components/Input';
import HitsWrapper from './components/HitsWrapper';
import CloseButton from './components/CloseButton';

const Search: React.FC = () => {
  const ref = createRef<HTMLFormElement>();
  const [query, setQuery] = useState(getQuery(''));
  const [hits, setHits] = useState<SearchHit[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [focus, setFocus] = useState(false);

  useClickOutside(ref, () => setFocus(false));

  const {
    query: { length: queryLength },
  } = query;

  if (!focus && queryLength) {
    setQuery({ ...query, query: '' });
  }

  const shouldShowHits = queryLength > 2 && hits.length > 0 && focus;
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => event.preventDefault();
  const className = getClassName('', [{ flag: focus, className: FOCUSED_CLASS_NAME }]);

  return (
    <StyledForm {...{ focus, ref, onSubmit, className }}>
      <Input {...{ query, setQuery, setIsSearching, setHits, setFocus, focus }} />
      {focus && <CloseButton onClick={(): void => setFocus(false)} />}
      {shouldShowHits && <HitsWrapper {...{ hits }} />}
    </StyledForm>
  );
};

export default Search;
