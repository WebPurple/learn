import { useEffect } from 'react';
import UseResize, { ResetTop, Handler, RemoveEventListener, AddEventListener } from './interfaces/Resize.interfaces';

const resetTop: ResetTop = (ref, asideTop, setTop) => {
  if (!ref.current) {
    return;
  }

  const { height } = ref.current.getBoundingClientRect();

  if (height !== asideTop) {
    setTop(height);
  }
};

const removeEventListener: RemoveEventListener = handler => window.removeEventListener('resize', handler);

const addEventListener: AddEventListener = handler => {
  window.addEventListener('resize', handler);

  return (): void => {
    removeEventListener(handler);
  };
};

const useResize: UseResize = (ref, asideTop, setTop) => {
  const handler: Handler = () => resetTop(ref, asideTop, setTop);

  useEffect(() => {
    handler();
    addEventListener(handler);
  });
};

export default useResize;
