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
    <div className='bg-[#F3F9F9] dark:bg-transparent p-2 dark:p-0 mt-[20px] rounded-sm' >
      <h2 className='text-[#727272] font-medium'>{day}</h2>
      <div className='ml-[8px]'>
        {transactions.map((item: any) => {
          const { color, label, prefix } = getLabelTransaction(item.type)
          return <div className='flex justify-between'>
            <span className='text-[#A1A1A1] text-[15px]'>{label}</span>
            <span className={prefix === '-' ? 'text-[#FF5959] font-medium' : 'text-[#53D496] font-medium'}>{`${prefix === '-' ? '- ' : '+ '}${formatMoeda(item.value)}`}</span>
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
    <div className='border-[1px] w-[320px] bg-white dark:bg-transparent dark:border-[#424245] rounded-xl p-3.5 mt-[80px]'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <span><Bank size={24} color="#c98e36" /></span>
          <span className='text-header-gold ml-1 font-medium ml-[10px]'>Extrato de transações</span>
        </div>
        <span><Bell size={17} color="#777777" weight='bold' /></span>
      </div>
      {
        daysTransactions.map((item: any) => <DayTransactions day={item.date} transactions={item.transactions}/>)
      }
    </div>
  )
}

export default ListTransactionsExtract
