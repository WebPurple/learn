import { OnClick } from '../../../../commonInterfaces/reactComponentsAttrs';

export type OnClickCallback = () => void;
export type GetCloseButtonOnClick = (callback: OnClickCallback) => OnClick;

interface CloseButtonProps {
  isActive: boolean;
  onClickCallback: OnClickCallback;
}

type CloseButtonComponent = React.FC<CloseButtonProps>;

export default CloseButtonComponent;
