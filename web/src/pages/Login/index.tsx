import React, { useState } from 'react';
import Button from '../../components/Button';
import { Modal } from '../../components/ModalConfirmTransaction';
import { createAccount } from '../../libs/api';
import LoginForm from '../../components/LoginForm'
import { HomeHeader } from '../../components/HomeHeader'

export const Login = () => {

  return (
    <>
      <HomeHeader/>
      <LoginForm></LoginForm>
    </>
  );
};
