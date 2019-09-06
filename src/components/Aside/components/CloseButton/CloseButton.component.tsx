import React from 'react';
import CloseButtonComponent from './CloseButton.interfaces';
import StyledCloseButton from './CloseButton.styles';
import { getCloseButtonOnClick } from '../../utils';
import getClassName from '../../../../utils/getClassName';
import { HIDDEN_CLASS_NAME } from '../../../../constants/furtherClassNames';

const closeButtonClassName = 'close-button';

const CloseButton: CloseButtonComponent = ({ isActive, onClickCallback }) => {
  const className = getClassName(closeButtonClassName, [{ flag: !isActive, className: HIDDEN_CLASS_NAME }]);
  const onClick = getCloseButtonOnClick(onClickCallback);

  return <StyledCloseButton {...{ className, onClick }} />;
};

export default CloseButton;
