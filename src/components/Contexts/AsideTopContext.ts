import { createContext } from 'react';

interface AsideTopContextI {
  top: number;
  setTop: (value: number) => void;
}

const AsideTopContext = createContext<AsideTopContextI>({ top: 0, setTop: () => {} });

export default AsideTopContext;
