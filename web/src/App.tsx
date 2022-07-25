import React from 'react';
import './styles/global.css';
import ControlledLoginForm from './components/LoginForm';
import ControlledRegisterForm from './components/RegisterForm';

function App() {
  return (
    <div>
      <ControlledLoginForm />
      <br/>
      <ControlledRegisterForm />
    </div>
  );
}

export default App;
