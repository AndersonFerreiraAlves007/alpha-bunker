import React, { useState } from 'react';
import Button from '../../components/Button';
import { Modal } from '../../components/ModalConfirmTransaction';
import { createAccount } from '../../libs/api';
import LoginForm from '../../components/LoginForm'
import logo from '../../assets/logo.svg'

export const Login = () => {

  return (
    <>
      <div>
        <img src={logo} alt="logo" />
        <h3>Alpha Bunker</h3>
      </div>
      <LoginForm></LoginForm>
    </>
  );
};
