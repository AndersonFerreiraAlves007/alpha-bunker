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
      <div>
        <span>{`Agência: ${agency}-${digitAgencyV}`}</span>
        <span>{`Conta: ${accountNumber}-${digitAccountV}`}</span>
        <span><CaretDown size={32} color="hotpink" weight="fill" /></span>
      </div>
      <div>
        <span><Eye size={32} /></span>
        <span>{formatBalance(balance)}</span>
        <span>R$</span>
      </div>
    </div>
  )
}

export default BalanceLabel
