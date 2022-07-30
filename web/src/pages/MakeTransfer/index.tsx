import React, { useState } from 'react';
import Button from '../../components/Button';
import { Modal } from '../../components/ModalConfirmTransaction';
import { api } from '../../libs/api';
import BalanceLabel from '../../components/BalanceLabel'
import Navbar from '../../components/Navbar'
import FormTransfer from '../../components/FormTransfer'

export const MakeTransfer = () => {
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
      <Navbar/>
      <BalanceLabel accountNumber='' agency='' balance={0} digitAccountV="" digitAgencyV=''/>
      <FormTransfer
        accountNumberOrigin=''
        agencyOrigin=''
        digitAccountVOrigin=''
        digitAgencyVOrigin=''
        handleTransfer={() => {}}
      />
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
