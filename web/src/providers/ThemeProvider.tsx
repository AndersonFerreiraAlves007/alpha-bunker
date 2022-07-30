import React, { ReactNode, createContext, useState, useContext } from 'react';

interface ContextTypes {
  isDarkMode: boolean;
  setIsDarkMode: any
}

export const ThemeContext = createContext<Partial<ContextTypes>>({});

interface ThemeProviderTypes {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderTypes) => {
  const [isDarkMode, setIsDarkMode] = useState();

  return (
    <UserContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
