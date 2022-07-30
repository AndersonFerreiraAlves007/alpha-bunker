import React, { useState } from 'react';
import Button from '../../components/Button';
import { Modal } from '../../components/ModalConfirmTransaction';
import { createAccount } from '../../libs/api';
import RegisterForm from '../../components/RegisterForm'
import { HomeHeader } from '../../components/HomeHeader'

export const CreateAccount = () => {

  return (
    <>
      <HomeHeader/>
      <RegisterForm></RegisterForm>
    </>
  );
};
