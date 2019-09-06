import React, { useEffect } from 'react';
import { getQuery, searchDelay, searchClient, minCharsNumber } from '../../../../utils/search';
import useDebounce from '../../../../utils/Debounce';
import SearchIcon from '../SearchIcon/SearchIcon.component';
import InputComponent, { GetInputOnChange } from './Input.interfaces';
import getClassName from '../../../../utils/getClassName';
import { FOCUSED_CLASS_NAME } from '../../../../constants/furtherClassNames';
import { Label, StyledInput } from './Input.styles';

const getOnChange: GetInputOnChange = (setQuery, setHits) => ({ target: { value } }): void => {
  setQuery(getQuery(value));

  if (!value) {
    setHits([]);
  }
};

const Input: InputComponent = ({ setQuery, query, setIsSearching, setHits, setFocus, focus }) => {
  const { query: value } = query;
  const debouncedValue = useDebounce(value, searchDelay);

  const className = getClassName('', [{ flag: focus, className: FOCUSED_CLASS_NAME }]);
  const onChange = getOnChange(setQuery, setHits);
  const onFocus = (): void => setFocus(true);

  useEffect(() => {
    if (debouncedValue && value.length >= minCharsNumber) {
      setIsSearching(true);

      searchClient.search([query]).then(res => {
        setIsSearching(false);
        setHits(res.results[0].hits);
      });
    }
  }, [debouncedValue]);

  return (
    <Label>
      <SearchIcon />
      <StyledInput placeholder="Search..." {...{ value, onChange, onFocus, className }} />
    </Label>
  );
};

export default Input;
