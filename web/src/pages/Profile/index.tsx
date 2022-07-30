import React, { useState } from 'react';
import Button from '../../components/Button';
import { Modal } from '../../components/ModalConfirmTransaction';
import { api } from '../../libs/api';
import ProfileHeader from '../../components/ProfileHeader'
import AccountData from '../../components/AccountData'
import AccountsList from '../../components/AccountsList'

export const Profile = () => {


  return (
    <>
      <ProfileHeader />
      <AccountData agencia='' conta='' />
      <AccountsList  />
    </>
  );
};
