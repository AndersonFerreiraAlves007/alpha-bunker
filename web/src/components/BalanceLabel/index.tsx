import React, { FC } from 'react'
import { CaretDown, Eye } from "phosphor-react";

type BalanceLabelProps = {
  agency: string;
  accountNumber: string;
  digitAccountV: string;
  digitAgencyV: string;
  balance: number;
}

function formatBalance(value: number) {
  return `${value.toFixed(2)}`
}

const BalanceLabel: FC<BalanceLabelProps> = ({
  accountNumber,
  agency,
  digitAccountV,
  digitAgencyV,
  balance
}) => {
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
