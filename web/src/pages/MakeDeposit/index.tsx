import React, { useState } from 'react';
import Button from '../../components/Button';
import { Modal } from '../../components/ModalConfirmTransaction';
import { api } from '../../libs/api';
import BalanceLabel from '../../components/BalanceLabel'
import Navbar from '../../components/Navbar'
import AppHeader from '../../components/AppHeader'

export const MakeDeposit = () => {
  const [modal, setModal] = useState(false);

  async function handleDeposit() {
    try {
      // fazer request
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <AppHeader/>
      <Navbar/>
      <BalanceLabel />
      {modal && (
        <Modal
          title="Depósito"
          setModal={setModal}
          handleConfirmModal={handleDeposit}
        />
      )}
    </>
  );
};
