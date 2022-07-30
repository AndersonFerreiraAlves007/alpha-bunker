import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Modal } from '../../components/ModalConfirmTransaction';
import { createAccount } from '../../libs/api';
import LoginForm from '@/components/LoginForm'

export const Login = () => {

  return (
    <>
      <div>Header</div>
      <LoginForm></LoginForm>
    </>
  );
};
