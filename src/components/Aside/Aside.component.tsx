import React, { useState, createRef, useContext } from 'react';
import useClickOutside from '../../utils/ClickOutside';
import useSticky from '../../utils/Sticky';
import StyledAside from './Aside.styles';
import { ACTIVE_CLASS_NAME, STICKY_CLASS_NAME } from '../../constants/furtherClassNames';
import getClassName from '../../utils/getClassName';
import AsideTopContext from '../Contexts/AsideTopContext';
import Arrow from './components/Arrow';
import CloseButton from './components/CloseButton';
import Mask from './components/Mask';

const Aside: React.FC = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { top } = useContext(AsideTopContext);
  const ref = createRef<HTMLElement>();

  useSticky(ref, isSticky, setIsSticky, top);
  useClickOutside(ref, () => setIsActive(false));

  const className = getClassName('', [
    {
      flag: isActive,
      className: ACTIVE_CLASS_NAME,
    },
    {
      flag: isSticky,
      className: STICKY_CLASS_NAME,
    },
  ]);

  const onClick = (): void => setIsActive(true);
  const onClickCallback = (): void => setIsActive(false);

  return (
    <StyledAside {...{ ref, isSticky, top, className, onClick }}>
      <Mask {...{ isActive }} />
      <Arrow {...{ isActive }} />
      <CloseButton {...{ isActive, onClickCallback }} />
      {children}
    </StyledAside>
  );
};

export default Aside;
