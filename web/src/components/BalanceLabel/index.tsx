import React, { FC } from 'react'
import { CaretDown, Eye } from "phosphor-react";
import { useUser } from '../../providers/UserProvider'

type BalanceLabelProps = {
}

function formatBalance(value: number) {
  return `${value.toFixed(2)}`
}

const BalanceLabel: FC<BalanceLabelProps> = () => {
  const { user } = useUser()

  console.log('asasasas')
  console.log(user)

  const agency = user ? user.account.agency : ''
  const digitAgencyV = user ? user.account.digit_agency_v : ''
  const accountNumber = user ? user.account.account_number : ''
  const digitAccountV = user ? user.account.digit_account_v : ''
  const balance = user ? user.account.balance : 0

  return (
    <div className='w-[280px] bg-white rounded-lg absolute top-[162.56px] font-medium h-[73.04px]'>
      <div className='flex items-center justify-between	 mx-4 mt-[9px]'>
        <span className='text-[#C98E26] text-sm'>{`Agência: ${agency}-${digitAgencyV}`}</span>
        <span className='text-[#C98E26] text-sm'>{`Conta: ${accountNumber}-${digitAccountV}`}</span>
        <span><CaretDown size={20} color="#777777" weight={'bold'}/></span>
      </div>
      <div className='flex items-center mx-4 mt-[2px]'>
        <span><Eye size={15} color="#777777" weight={'bold'} /></span>
        <span className='text-2xl text-[#338896] font-bold mx-[5px]'>{formatBalance(balance)}</span>
        <span className='text-[#3FA7B8] text-sm font-bold mt-[5px]'>R$</span>
      </div>
    </div>
  )
}

export default BalanceLabel
