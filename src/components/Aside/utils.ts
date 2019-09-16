import { GetCloseButtonOnClick } from './components/CloseButton/CloseButton.interfaces';
import { SetAsideHeight } from './Aside.interfaces';

export const getCloseButtonOnClick: GetCloseButtonOnClick = callback => (event): void => {
  event.stopPropagation();
  callback();
};

export const setAsideHeight: SetAsideHeight = ({ top }) => `calc(100vh - ${top}px)`;
