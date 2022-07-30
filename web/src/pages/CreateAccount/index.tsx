import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Modal } from '../../components/ModalConfirmTransaction';
import { createAccount } from '../../libs/api';
import RegisterForm from '@/components/RegisterForm'

export const CreateAccount = () => {

  return (
    <>
      <div>Header</div>
      <RegisterForm></RegisterForm>
    </>
  );
};
