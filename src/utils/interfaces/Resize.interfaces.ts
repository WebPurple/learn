type UseResize = (ref: React.RefObject<HTMLElement>, asideTop: number, setTop: (value: number) => void) => void;

export type ResetTop = UseResize;
export type Handler = () => void;

export type AddEventListener = (handler: Handler) => () => void;
export type RemoveEventListener = (handler: Handler) => void;

export default UseResize;
