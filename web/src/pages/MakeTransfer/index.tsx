import React, { useState } from 'react';
import Button from '../../components/Button';
import { Modal } from '../../components/ModalConfirmTransaction';
import { createTransfer } from '../../libs/api';
import BalanceLabel from '../../components/BalanceLabel'
import Navbar from '../../components/Navbar'
import AppHeader from '../../components/AppHeader'
import { useNavigate } from "react-router-dom";
import { useUser } from '../../providers/UserProvider'
import { ArrowsLeftRight } from "phosphor-react";

export const MakeTransfer = () => {
  const [modal, setModal] = useState(false);
  const { user, updateBalance } = useUser()
  const [account, setAccount] = useState('')
  const [agency, setAgency] = useState('')
  const [value, setValue] = useState(0)
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleTransfer() {
    try {
     const {
      id
     } = await createTransfer({
        dest_account_number: account.substring(0, account.length - 1),
        dest_account_ver_code: account.substring(account.length - 1),
        dest_agency_ver_code: agency.substring(agency.length - 1),
        dest_agency: agency.substring(0, agency.length - 1) ,
        origin_account_id: user?.account.id || 0,
        type: 'transfer',
        value
     })
     await updateBalance()
     navigate(`/transaction/${id}`)
    } catch (error) {
      console.log(error);
    }
  }

  function validateAccount() {
    let error = ''
    console.log(account)
    if(account.length !== 6) {
      error = 'A conta deve ter 6 dígitos.'
    }
    return error
  }

  function validateAgency() {
    let error = ''
    console.log(agency)
    if(agency.length !== 5) {
      error = 'A agência deve ter 5 dígitos.'
    }
    return error
  }

  function validateValue() {
    let error = ''
    if(Number.isNaN(value) || value <= 0 ) {
      error = 'Valor inválido.'
    }
    return error
  }

  function validatePassword() {
    let error = ''
    if(password.length < 3) {
      error = 'A senha deve ter no mínimo e caracteres.'
    } else {
      if(password.length > 10) {
        error = 'A senha deve ter no máximo 10 caracteres.'
      }
    }
    return error
  }

  function getErrors() {
    const errors = [
      validateAccount(),
      validateAgency(),
      validateValue(),
      validatePassword()
    ]
    return errors
  }

  function getHasError(errors: any) {
    for(let i = 0; i < errors.length; i++) if(errors[i]) return true
    return false
  }

  const erros = getErrors()
  const hasError = getHasError(erros)

  function handleSubmit() {
    if(!hasError) {
      setModal(true)
    }
  }

  function formatAccount(account: string) {
    if(account.length < 6) return account
    return `${account.substring(0, 5)}-${account.substring(5, 6)}`
  }

  function formatAgency(agency: string) {
    if(agency.length < 5) return agency
    return `${agency.substring(0, 4)}-${agency.substring(4, 5)}`
  }

  function clearAccount(account: string) {
    const text = account.replace(/\D/, '').trim()
    if(text.length > 6) setAccount(text.substring(0, 6))
    else setAccount(text)
  }

  function clearAgency(agency: string) {
    const text = agency.replace(/\D/, '').trim()
    if(text.length > 5) setAgency(text.substring(0, 5))
    else setAgency(text)
  }

  const agencyFormat = formatAgency(agency)
  const accountFormat = formatAccount(account)

  const agencyOrigin = user ? user.account.agency : ''
  const digitAgencyVOrigin = user ? user.account.digit_agency_v : ''
  const accountNumberOrigin = user ? user.account.account_number : ''
  const digitAccountVOrigin = user ? user.account.digit_account_v : ''


  return (
    <>
      <AppHeader/>
      <Navbar/>
      <BalanceLabel />
      {modal && (
        <Modal
          title="Transferência"
          setModal={setModal}
          handleConfirmModal={handleTransfer}
        />
      )}
      <form className='flex flex-col'>
        <div className='flex items-center'>
          <span><ArrowsLeftRight size={32} /></span>
          <span>Transferência</span>
        </div>
        <div>
          <h2>Origem</h2>
          <div className='flex items-center'>
            <div>
              <input type="text" value={`${agencyOrigin}-${digitAgencyVOrigin}`} disabled/>
              <h3>Agência</h3>
            </div>
            <div>
              <input type="text" value={`${accountNumberOrigin}-${digitAccountVOrigin}`} disabled/>
              <h3>Conta</h3>
            </div>
          </div>
        </div>
        <div>
          <h2>Destino</h2>
          <div className='flex items-center'>
            <div>
              <input type="text" value={agencyFormat} onChange={e => clearAgency(e.target.value)}/>
              <h3>Agência</h3>
            </div>
            <div>
              <input type="text" value={accountFormat} onChange={e => clearAccount(e.target.value)}/>
              <h3>Conta</h3>
            </div>
          </div>
        </div>
        <input type="text" placeholder='Valor' value={value} onChange={e => setValue(e.target.value)}/>
        <input type="text" placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)}/>
        <button /* disabled={hasError} */ type="button" onClick={handleSubmit}>Transferir</button>
      </form>
    </>
  );
};
