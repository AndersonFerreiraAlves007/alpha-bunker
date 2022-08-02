import React from 'react'
import { Receipt } from 'phosphor-react';

interface TransactionVoucherProps {
  transaction: any
}

function formatMoeda(value: number) {
  return `$${value.toFixed(2)}`
}

function getDados(type: any, transaction: any) {
  switch (type) {
    case 'deposit sent':
      return {
        label: 'Depósito',
        prefix: '+',
        color: '#53D496',
        agency: '',
        digit_agency_v: '',
        digit_account_v: '',
        account_number: '',
        is_origin: false,
        is_transfer: false,
        nome: '',
      }
    case 'deposit fee sent':
      return {
        label: 'Taxa de depósito',
        prefix: '-',
        color: '#FF5959',
        agency: '',
        digit_agency_v: '',
        digit_account_v: '',
        account_number: '',
        is_origin: false,
        is_transfer: false,
        nome: '',
      }
    case 'transfer sent':
      return {
        label: 'Transferência enviada',
        prefix: '-',
        color: '#FF5959',
        agency: transaction.dest_account.agency,
        digit_agency_v: transaction.dest_account.digit_agency_v,
        digit_account_v: transaction.dest_account.digit_account_v,
        account_number: transaction.dest_account.account_number,
        is_origin: false,
        is_transfer: true,
        nome: transaction.user_dest,
      }
    case 'withdraw sent':
      return {
        label: 'Saque',
        prefix: '-',
        color: '#FF5959',
        agency: '',
        digit_agency_v: '',
        digit_account_v: '',
        account_number: '',
        is_origin: false,
        is_transfer: false,
        nome: '',
      }
    case 'withdraw fee sent':
      return {
        label: 'Taxa de saque',
        prefix: '-',
        color: '#FF5959',
        agency: '',
        digit_agency_v: '',
        digit_account_v: '',
        account_number: '',
        is_origin: false,
        is_transfer: false,
        nome: '',
      }
    case 'transfer received':
      return {
        label: 'Transferência recebida',
        prefix: '+',
        color: '#53D496',
        agency: transaction.origin_account.agency,
        digit_agency_v: transaction.origin_account.digit_agency_v,
        digit_account_v: transaction.origin_account.digit_account_v,
        account_number: transaction.origin_account.account_number,
        is_origin: true,
        is_transfer: true,
        nome: transaction.user_origin,
      }
    case 'transfer fee sent':
      return {
        label: 'Taxa de transferência',
        prefix: '-',
        color: '#FF5959',
        agency: '',
        digit_agency_v: '',
        digit_account_v: '',
        account_number: '',
        is_origin: false,
        is_transfer: false,
        nome: '',
      }
    default:
      return {
        label: '',
        prefix: '',
        color: '',
        agency: '',
        digit_agency_v: '',
        digit_account_v: '',
        account_number: '',
        is_origin: true,
        is_transfer: false,
        nome: '',
      }
  }
}

const TransactionVoucher : React.FC<TransactionVoucherProps> = ({ transaction }) => {

  console.log('lalalala', transaction)

  const {
    account_number,
    agency,
    color,
    digit_account_v,
    digit_agency_v,
    is_origin,
    is_transfer,
    label,
    nome,
    prefix
  } = getDados(transaction.description, transaction)
  const data = transaction.date
  const valor = transaction.value
  return (
    <div>
      <div>
        <Receipt />
        <h2>Comprovante de transação</h2>
      </div>
      <div>
        <h2>Tipo: {label}</h2>
        <p>Data: {data}</p>
        {
          is_transfer && <>
            <h2>{ !is_origin ?  'Dados de destino:' : 'Dados de origin:'}</h2>
            <p>Nome: {nome}</p>
            <p>Agência: {`${agency}-${digit_agency_v}`}</p>
            <p>Conta: {`${account_number}-${digit_account_v}`}</p>
          </>
        }
        <p className={prefix === '-' ? 'text-[#FF5959]' : 'text-[#53D496]'}>{`${prefix === '-' ? '- ' : '+ '}${formatMoeda(valor)}`}</p>
      </div>

    </div>
  );
};

export default TransactionVoucher;
