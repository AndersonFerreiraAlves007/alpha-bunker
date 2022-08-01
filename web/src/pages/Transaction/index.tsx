import React, { useEffect, useState } from 'react';
import BalanceLabel from '../../components/BalanceLabel'
import Navbar from '../../components/Navbar'
import AppHeader from '../../components/AppHeader'
import { useUser } from '../../providers/UserProvider'
import { getTransaction, IGetTransactionResponse } from '../../libs/api'
import TransactionVoucher from '../../components/TransactionVoucher'
import { useParams } from 'react-router-dom';

export const Transaction = () => {
  const { transactionId } = useParams();
  const { updateBalance } = useUser()
  const [data, setData] = useState<IGetTransactionResponse|null>(null)

  async function handleTransaction() {
    try {
      await updateBalance()
      const data = await getTransaction(Number(transactionId))
      setData(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleTransaction()
  }, [transactionId])

  return (
    <>
      <AppHeader/>
      <Navbar/>
      <BalanceLabel />
      <TransactionVoucher transaction={data}/>
    </>
  );
};
