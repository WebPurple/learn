import React from 'react';
import { StyledButton } from './CloseButton.styles';
import CloseButtonComponent from './CloseButton.interfaces';

const CloseButton: CloseButtonComponent = props => <StyledButton {...props} />;

export default CloseButton;
