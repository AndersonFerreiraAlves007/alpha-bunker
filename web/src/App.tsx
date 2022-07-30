import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './providers/UserProvider';
import { ThemeProvider } from './providers/ThemeProvider'
import { Router } from './routes';
import './styles/global.css';

export const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
};
