import React from 'react';
import getClassName from '../../../../utils/getClassName';
import { HIDDEN_CLASS_NAME } from '../../../../constants/furtherClassNames';
import StyledMask from './Mask.styles';
import IsActiveI from '../../../../commonInterfaces/IsActiveI';

const Mask: React.FC<IsActiveI> = ({ isActive }) => {
  const className = getClassName('', [{ flag: isActive, className: HIDDEN_CLASS_NAME }]);

  return <StyledMask {...{ className }} />;
};

export default Mask;
