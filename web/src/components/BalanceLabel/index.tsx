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
    <div>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <span className='text-[#C98E26]'>{`Agência: ${agency}-${digitAgencyV}`}</span>
          <span className='text-[#C98E26]'>{`Conta: ${accountNumber}-${digitAccountV}`}</span>
        </div>
        <span><CaretDown size={32} color="#777777" weight="fill" /></span>
      </div>
      <div className='flex items-center'>
        <span><Eye size={32} /></span>
        <span>{formatBalance(balance)}</span>
        <span>R$</span>
      </div>
    </div>
  )
}

export default BalanceLabel
