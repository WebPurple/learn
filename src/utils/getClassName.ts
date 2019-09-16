import { CLASSNAME_SEPARATOR } from '../constants/furtherClassNames';
import GetClassName from './interfaces/GetClassName';

const getClassName: GetClassName = (baseClassName, classNames) => {
  const classNameArray = [baseClassName];

  classNames.forEach(({ flag, className }) => {
    if (flag) {
      classNameArray.push(className);
    }
  });

  return classNameArray.join(CLASSNAME_SEPARATOR);
};

export default getClassName;
