import React, { FC } from 'react'
import { Bank, Bell } from "phosphor-react";

type DayTransactionsProps = {
  day: any;
  transactions: any;
}

const DayTransactions: FC<DayTransactionsProps> = ({
  day,
  transactions
}) => {

  function getLabelTransaction(type: string) {
    switch (type) {
      case 'deposit':
        return {
          label: 'Depósito',
          prefix: '+',
          color: '#53D496'
        }
      case '':
        return {
          label: 'Transferência enviada',
          prefix: '-',
          color: '#FF5959'
        }
      case '':
        return {
          label: 'Saque',
          prefix: '-',
          color: '#FF5959'
        }
      case '':
        return {
          label: 'Transferência recebida',
          prefix: '+',
          color: '#53D496'
        }
      default:
        return {
          label: '',
          prefix: '',
          color: ''
        }
    }
  }

  function formatMoeda(value: number) {
    return `$${value.toFixed(2)}`
  }

  return (
    <div>
      <h2>{day}</h2>
      <div>
        {transactions.map((item: any) => {
          const { color, label, prefix } = getLabelTransaction(item.type)
          return <div>
            <span>{label}</span>
            <span>{`${prefix === '-' ? '- ' : '+ '}${formatMoeda(item.value)}`}</span>
          </div>
      })}
      </div>
    </div>
  )
}

type ListTransactionsExtractProps = {
  daysTransactions: any
}

const ListTransactionsExtract: FC<ListTransactionsExtractProps> = ({
  daysTransactions
}) => {
  return (
    <div>
      <div>
        <span><Bank size={32} /></span>
        <span>Extrato de transações</span>
        <span><Bell size={32} /></span>
      </div>
      {
        daysTransactions.map((item: any) => <DayTransactions day={item.date} transactions={item.transactions}/>)
      }
    </div>
  )
}

export default ListTransactionsExtract
