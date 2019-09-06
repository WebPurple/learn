type Event = `mousedown` | `touchstart`;

export type AddEventListeners = (events: Event[], handler: EventListenerOrEventListenerObject) => () => void;
export type RemoveEventListeners = (events: Event[], handler: EventListenerOrEventListenerObject) => void;

type ClickOutside = (ref: React.RefObject<HTMLElement>, handler: () => void, events?: Event[]) => void;

export default ClickOutside;
