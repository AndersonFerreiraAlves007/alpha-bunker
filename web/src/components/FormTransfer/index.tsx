import React, { FC, useState } from 'react'
import { ArrowsLeftRight } from "phosphor-react";

type FormTransferProps = {
  agencyOrigin: string;
  accountNumberOrigin: string;
  digitAccountVOrigin: string;
  digitAgencyVOrigin: string;
  handleTransfer: any;
}

const FormTransfer: FC<FormTransferProps> = ({
  accountNumberOrigin,
  agencyOrigin,
  digitAccountVOrigin,
  digitAgencyVOrigin,
  handleTransfer
}) => {
  const [account, setAccount] = useState('')
  const [agency, setAgency] = useState('')
  const [value, setValue] = useState(0)
  const [password, setPassword] = useState('')

  function validateAccount() {
    let error = ''
    if(account.length !== 7) {
      error = 'A conta deve ter 7 dígitos.'
    }
    return error
  }

  function validateAgency() {
    let error = ''
    if(account.length !== 5) {
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
      handleTransfer({
        password,
        value,
        agency: agency.substring(0, agency.length - 1),
        accountNumber: account.substring(0, account.length - 1),
        digitAccountV: account.substring(account.length - 1),
        digitAgencyV: agency.substring(agency.length - 1),
      })
    }
  }

  function formatAccount(account: string) {
    if(account.length < 7) return account
    return `${account.substring(0, 6)}-${account.substring(6, 7)}`
  }

  function formatAgency(agency: string) {
    if(agency.length < 5) return agency
    return `${agency.substring(0, 4)}-${agency.substring(4, 5)}`
  }

  function clearAccount(account: string) {
    const text = account.replace(/\D/, '').trim()
    if(text.length > 7) setAccount(text.substring(0, 7))
    else setAccount(text)
  }

  function clearAgency(agency: string) {
    const text = agency.replace(/\D/, '').trim()
    if(text.length > 5) setAgency(text.substring(0, 7))
    else setAgency(text)
  }

  const agencyFormat = formatAgency(agency)
  const accountFormat = formatAccount(account)

  return (
    <form>
      <div>
        <span><ArrowsLeftRight size={32} /></span>
        <span>Transferência</span>
      </div>
      <div>
        <h2>Origem</h2>
        <div>
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
        <div>
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
      <button disabled={hasError} type="button" onClick={handleSubmit}>Transferir</button>
    </form>
  )
}

export default FormTransfer
