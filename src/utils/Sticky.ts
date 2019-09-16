import { useEffect } from 'react';
import UseSticky, {
  ResetPosition,
  Handler,
  RemoveEventListener,
  AddEventListener,
} from './interfaces/Sticky.interfaces';

const resetPosition: ResetPosition = (ref, isSticky, setIsSticky, asideTop) => {
  if (!ref.current) {
    return;
  }

  const { top } = ref.current.getBoundingClientRect();

  if (top <= 0 && !isSticky) {
    setIsSticky(true);
    return;
  }

  if (pageYOffset < asideTop && isSticky) {
    setIsSticky(false);
  }
};

const removeEventListener: RemoveEventListener = handler => window.removeEventListener('scroll', handler);

const addEventListener: AddEventListener = handler => {
  window.addEventListener('scroll', handler);

  return (): void => {
    removeEventListener(handler);
  };
};

const useSticky: UseSticky = (ref, isSticky, setIsSticky, asideTop) => {
  const handler: Handler = () => {
    resetPosition(ref, isSticky, setIsSticky, asideTop);
  };

  useEffect(() => {
    handler();
    addEventListener(handler);
  });
};

export default useSticky;
