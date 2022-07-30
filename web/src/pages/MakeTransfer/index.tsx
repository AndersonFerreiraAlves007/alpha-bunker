import React, { useState } from 'react';
import Button from '../../components/Button';
import { Modal } from '../../components/ModalConfirmTransaction';
import { createTransfer } from '../../libs/api';
import BalanceLabel from '../../components/BalanceLabel'
import Navbar from '../../components/Navbar'
import FormTransfer from '../../components/FormTransfer'
import AppHeader from '../../components/AppHeader'
import { useNavigate } from "react-router-dom";
import { useUser } from '../../providers/UserProvider'

export const MakeTransfer = () => {
  const [modal, setModal] = useState(false);
  const { user } = useUser()
  const navigate = useNavigate()

  async function handleTransfer() {
    console.log('handleTranfer')
    try {
     const {
      id
     } = await createTransfer({
        dest_account_id: 1,
        dest_account_ver_code: '',
        dest_agency_ver_code: '',
        dest_agency:'' ,
        dest_cpf: '',
        origin_account_id: user?.account.id || 0,
        type: 'transfer',
        value: 0
     })

     navigate(`/transaction/${id}`)

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <AppHeader/>
      <Navbar/>
      <BalanceLabel />
      <FormTransfer
        handleTransfer={(data: any) => {
          console.log(data)
          setModal(true)
        }}
      />
      {modal && (
        <Modal
          title="Transferência"
          setModal={setModal}
          handleConfirmModal={handleTransfer}
        />
      )}
    </>
  );
};
