type furtherClassNameObject = {
  flag: boolean;
  className: string;
};

type GetClassName = (baseClassName: string, classNames: furtherClassNameObject[]) => string;

export default GetClassName;
