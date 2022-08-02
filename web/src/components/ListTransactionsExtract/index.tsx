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
      case 'deposit fee':
        return {
          label: 'Taxa de depósito',
          prefix: '-',
          color: '#FF5959'
        }
      case 'transfer sent':
        return {
          label: 'Transferência enviada',
          prefix: '-',
          color: '#FF5959'
        }
      case 'withdraw':
        return {
          label: 'Saque',
          prefix: '-',
          color: '#FF5959'
        }
      case 'withdraw fee':
        return {
          label: 'Taxa de saque',
          prefix: '-',
          color: '#FF5959'
        }
      case 'transfer received':
        return {
          label: 'Transferência recebida',
          prefix: '+',
          color: '#53D496'
        }
      case 'transfer fee':
        return {
          label: 'Taxa de transferência',
          prefix: '-',
          color: '#FF5959'
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
          return <div className='flex justify-between'>
            <span style={{ color: 'black' }}>{label}</span>
            <span className={prefix === '-' ? 'text-[#FF5959]' : 'text-[#53D496]'}>{`${prefix === '-' ? '- ' : '+ '}${formatMoeda(item.value)}`}</span>
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
      <div className='flex items-center'>
        <div className='flex items-center'>
          <span><Bank size={32} /></span>
          <span>Extrato de transações</span>
        </div>
        <span><Bell size={32} /></span>
      </div>
      {
        daysTransactions.map((item: any) => <DayTransactions day={item.date} transactions={item.transactions}/>)
      }
    </div>
  )
}

export default ListTransactionsExtract
