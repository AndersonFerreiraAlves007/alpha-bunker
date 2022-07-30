import React, { useState } from 'react';
import Button from '../../components/Button';
import { Modal } from '../../components/ModalConfirmTransaction';
import { api } from '../../libs/api';
import BalanceLabel from '../../components/BalanceLabel'
import Navbar from '../../components/Navbar'
import ListTransactionsExtract from '../../components/ListTransactionsExtract'

export const Extract = () => {
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
      <ListTransactionsExtract daysTransactions={[]}/>
    </>
  );
};
