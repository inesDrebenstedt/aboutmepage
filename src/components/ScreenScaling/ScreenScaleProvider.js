import React, { createContext, useContext } from 'react';
import useScreenScale from './useScreenScale';

const ScreenScaleContext = createContext();

export const ScreenScaleProvider = ({ children }) => {
  const screenScale = useScreenScale();

  return (
    <ScreenScaleContext.Provider value={screenScale}>
      {children}
    </ScreenScaleContext.Provider>
  );
};

export const useScreenScaleContext = () => {
  return useContext(ScreenScaleContext);
};

export default ScreenScaleProvider;
