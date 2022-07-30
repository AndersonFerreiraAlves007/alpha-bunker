import React, { useState } from 'react';
import Button from '../../components/Button';
import { Modal } from '../../components/ModalConfirmTransaction';
import { api } from '../../libs/api';
import ProfileHeader from '../../components/ProfileHeader'
import PersonalData from '../../components/PersonalData'
import AccountsList from '../../components/AccountsList'

export const Profile = () => {



  return (
    <>
      <ProfileHeader />
      <PersonalData/>
      <AccountsList  />
    </>
  );
};
