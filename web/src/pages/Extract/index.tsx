import React, { useState, useEffect } from 'react';
import { getExtract } from '../../libs/api';
import BalanceLabel from '../../components/BalanceLabel'
import Navbar from '../../components/Navbar'
import ListTransactionsExtract from '../../components/ListTransactionsExtract'
import AppHeader from '../../components/AppHeader'
import { useUser } from '../../providers/UserProvider'

export const Extract = () => {
  const [daysTransactions, setDaysTransactions] = useState<any>([])
  const { user, updateBalance } = useUser()

  async function handleExtract() {
    try {
      await updateBalance()
      const transactions = await getExtract({
        account_number: user ? user.account.account_number : '',
        agency: user ? user.account.agency : '',
        digit_account_v: user ? user.account.digit_account_v : '',
        digit_agency_v: user ? user.account.digit_agency_v : '',
      })
      const days = []
      let currentDate = ''
      for(let i = 0; i < transactions.transactions.length; i++) {
        if(currentDate !== transactions.transactions[i].date) {
          days.push({
            date: transactions.transactions[i].date,
            transactions: [{
              type: transactions.transactions[i].description,
              value: transactions.transactions[i].value
            }]
          })
        } else {
          days[days.length - 1].transactions.push({
            type: transactions.transactions[i].description,
            value: transactions.transactions[i].value
          })
        }
        currentDate = transactions.transactions[i].date
      }
      setDaysTransactions(days)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleExtract()
  }, [])

  return (
    <>
      <AppHeader/>
      <Navbar/>
      <BalanceLabel />
      <ListTransactionsExtract daysTransactions={daysTransactions}/>
    </>
  );
};
