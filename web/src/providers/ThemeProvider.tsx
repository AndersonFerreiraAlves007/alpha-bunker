import React, { ReactNode, createContext, useState, useContext, useEffect } from 'react';

interface ContextTypes {
  isDarkMode: boolean;
  toggleIsDarkMode: any;
}

export const ThemeContext = createContext<Partial<ContextTypes>>({});

interface ThemeProviderTypes {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderTypes) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleIsDarkMode() {
    setIsDarkMode(!isDarkMode);
    /* if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    } */

  }

  useEffect(() => {
    if (isDarkMode) document.body.classList.add('dark')
    else document.body.classList.remove('dark')
  }, [isDarkMode])

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleIsDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
