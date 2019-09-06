import { useState, useEffect } from 'react';
import UseDebounce from './interfaces/Debounce.interfaces';

const useDebounce: UseDebounce = (value = '', delay = 0) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const handler = setTimeout(() => {
    setDebouncedValue(value);
  }, delay);

  useEffect(
    () => (): void => {
      clearTimeout(handler);
    },
    [value],
  );

  return debouncedValue;
};

export default useDebounce;
