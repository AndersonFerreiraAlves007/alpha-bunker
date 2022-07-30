import React, { useState } from 'react';
import Button from '../../components/Button';
import { Modal } from '../../components/ModalConfirmTransaction';
import { createAccount } from '../../libs/api';
import RegisterForm from '../../components/RegisterForm'
import logo from '../../assets/logo.svg'

export const CreateAccount = () => {

  return (
    <>
      <div>
        <img src={logo} alt="logo" />
        <h3>Alpha Bunker</h3>
      </div>
      <RegisterForm></RegisterForm>
    </>
  );
};
