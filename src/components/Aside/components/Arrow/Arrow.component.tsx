import React from 'react';
import { HIDDEN_CLASS_NAME } from '../../../../constants/furtherClassNames';
import StyledArrow from './Arrow.styles';
import getClassName from '../../../../utils/getClassName';
import IsActiveI from '../../../../commonInterfaces/IsActiveI';

const Arrow: React.FC<IsActiveI> = ({ isActive }) => {
  const className = getClassName('', [{ flag: isActive, className: HIDDEN_CLASS_NAME }]);

  return <StyledArrow {...{ className }}>&#8680;</StyledArrow>;
};

export default Arrow;
