import { useEffect } from 'react';
import ClickOutside, { AddEventListeners, RemoveEventListeners } from './interfaces/ClickOutside.interfaces';

const removeEventListeners: RemoveEventListeners = (events, handler) => {
  for (const event of events) document.removeEventListener(event, handler);
};

const addEventListeners: AddEventListeners = (events, handler) => {
  for (const event of events) document.addEventListener(event, handler);

  return (): void => removeEventListeners(events, handler);
};

const useClickOutside: ClickOutside = (ref, handler, events = ['mousedown', 'touchstart']) => {
  const detectClickOutside: EventListenerOrEventListenerObject = event => {
    !ref.current || (!ref.current.contains(event.target as Node) && handler());
  };
  useEffect(() => {
    addEventListeners(events, detectClickOutside);
  });
};

export default useClickOutside;
