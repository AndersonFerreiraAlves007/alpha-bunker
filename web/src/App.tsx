import React from 'react';
import './styles/global.css';
import ControlledLoginForm from './components/LoginForm';
import AccountsList from './components/AccountsList';
import ControlledRegisterForm from './components/RegisterForm';
import NavBar from './components/Navbar';
import PersonalData from './components/PersonalData';
import ProfileHeader from './components/ProfileHeader';

function App() {
  const hoje = (new Date()).toLocaleDateString();
  return (
    <div>
      <ProfileHeader />

    </div>
  );
}

export default App;
