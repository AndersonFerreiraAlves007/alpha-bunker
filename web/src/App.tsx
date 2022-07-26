import React from 'react';
import './styles/global.css';
import ControlledLoginForm from './components/LoginForm';
import ControlledRegisterForm from './components/RegisterForm';
import NavBar from './components/Navbar';
import PersonalData from './components/PersonalData';

function App() {
  const hoje = (new Date()).toLocaleDateString();
  return (
    <div>
      <ControlledLoginForm />

    </div>
  );
}

export default App;
