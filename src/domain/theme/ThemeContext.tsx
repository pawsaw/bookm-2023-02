import React, { useContext } from 'react';
import { Theme } from './Theme';

export const defaultTheme: Theme = {
  primaryColor: 'black',
  secondaryColor: 'gray',
};

const ThemeContext = React.createContext<Theme>(defaultTheme);

export interface ThemeProviderProps {
  theme: Theme;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  // ...
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
