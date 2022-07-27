import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './providers/UserProvider';
import { Router } from './routes';
import './styles/global.css';

export const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UserProvider>
  );
};
