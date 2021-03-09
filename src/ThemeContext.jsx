import React from 'react';

export const theme = {
  light: {
    backgroundColor: 'white',
    color: 'black',
  },
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
};

// export const ThemeContext = React.createContext(theme.light);
export const ThemeContext = React.createContext('white');
export const ThemeButton = React.createContext('grey');
