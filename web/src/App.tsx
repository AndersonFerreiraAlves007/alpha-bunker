import React from 'react';
import './styles/global.css';
import ControlledLoginForm from './components/LoginForm';
import ControlledRegisterForm from './components/RegisterForm';
import NavBar from './components/Navbar'

function App() {
  return (
    <div>
      <ControlledLoginForm />
      <br/>
      <ControlledRegisterForm />
      <br/>
      <NavBar />
    </div>
  );
}

export default App;
