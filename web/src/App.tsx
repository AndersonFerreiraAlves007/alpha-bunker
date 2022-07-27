import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './providers/UserProvider';
import { Router } from './routes';
import './styles/global.css';
import ControlledLoginForm from './components/LoginForm';
import ControlledRegisterForm from './components/RegisterForm';
import NavBar from './components/Navbar';
import PersonalData from './components/PersonalData';

/* function App() {
  const hoje = (new Date()).toLocaleDateString();
  return (
    <div>
      <ControlledLoginForm />

    </div> */
export const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UserProvider>
  );
};
