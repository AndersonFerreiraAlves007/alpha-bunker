import React from 'react';
import { Receipt } from 'phosphor-react';
import { formateDate } from '../../libs/api';

interface TransactionVoucherProps {
  transaction: any;
}

function formatMoeda(value: number) {
  return `$${value.toFixed(2)}`;
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
      };
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
      };
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
      };
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
      };
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
      };
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
      };
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
      };
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
      };
  }
}

const TransactionVoucher: React.FC<TransactionVoucherProps> = ({
  transaction,
}) => {
  console.log('lalalala', transaction);

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
    prefix,
  } = getDados(transaction.description, transaction);
  const data = formateDate(transaction.date);
  const valor = Number(transaction.value);
  return (
    <div className='w-[300px] rounded-xl p-3.5 mt-[200px] border-[1px] dark:border-[#424245] bg-white dark:bg-transparent'>
      <div className='w-full flex'>
        <Receipt size={24} color="#c98e36" />
        <h2 className='text-header-gold ml-1 font-medium'>Comprovante de transação</h2>
      </div>
      <div className='dark:bg-transparent rounded-xl bg-[#F3F9F9] mt-[20px] p-3'>
        <h2 className='text-[#727272]'>Tipo: {label}</h2>
        <p className='text-[#A1A1A1] my-2'>Data: {data}</p>
        {is_transfer && (
          <>
            <h2 className='text-[#727272]'>{!is_origin ? 'Dados de destino:' : 'Dados de origin:'}</h2>
            <p className='text-[#A1A1A1] ml-[10px]'>Nome: {nome}</p>
            <p className='text-[#A1A1A1] ml-[10px]'>Agência: {`${agency}-${digit_agency_v}`}</p>
            <p className='text-[#A1A1A1] ml-[10px]'>Conta: {`${account_number}-${digit_account_v}`}</p>
          </>
        )}
        <div className='flex justify-between mt-[7px]'>
          <h2 className='text-[#727272]'>Valor</h2>
        <p className={prefix === '-' ? 'text-[#FF5959] font-medium' : 'text-[#53D496] font-medium'}>{`${
          prefix === '-' ? '- ' : '+ '
        }${formatMoeda(valor)}`}</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionVoucher;
