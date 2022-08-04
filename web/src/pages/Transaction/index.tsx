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
      console.log('aleatório ',transactionId)
      const data = await getTransaction(Number(transactionId))

      setData(data)
      await updateBalance()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleTransaction()
  }, [transactionId])

  console.log('data', data)

  return (
    <>
      <AppHeader/>
     {/*  <Navbar/> */}
      <BalanceLabel />
      {data && <TransactionVoucher transaction={data}/>}
    </>
  );
};
