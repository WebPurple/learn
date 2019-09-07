type UseSticky = (
  ref: React.RefObject<HTMLElement>,
  isSticky: boolean,
  setIsSticky: React.Dispatch<React.SetStateAction<boolean>>,
  asideTop: number,
) => void;

export type ResetPosition = UseSticky;
export type Handler = () => void;

export type AddEventListener = (handler: Handler) => () => void;
export type RemoveEventListener = (handler: Handler) => void;

export default UseSticky;
