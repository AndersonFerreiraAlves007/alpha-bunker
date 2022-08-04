import React, { useState, useEffect } from 'react';
import { INPUT_TYPE_CLASSES } from '../../components/Input';
import Input from '../../components/Input';
import { Modal } from '../../components/ModalConfirmTransaction';
import BalanceLabel from '../../components/BalanceLabel'
import Navbar from '../../components/Navbar'
import AppHeader from '../../components/AppHeader'
import { DownloadSimple } from "phosphor-react"
import { useUser } from '../../providers/UserProvider'
import { createDeposit } from '../../libs/api'
import { useNavigate } from "react-router-dom";

export const MakeDeposit = () => {
  const navigate = useNavigate()
  const { user, updateBalance } = useUser()
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    valor: "",
    senha: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  useEffect(() => {
    console.log(formData)
  }, [formData])

  async function handleDeposit() {
    try {
      const {
        id
      } = await createDeposit({
        dest_account_id: user?.account.id || 0,
        origin_account_id: user?.account.id || 0,
        type: 'deposit',
        value: Number(formData.valor)
      })
      await updateBalance()
      navigate(`/transaction/${id}`)
    } catch (error) {
      console.log(error);
    }
  }

  function validateValue() {
    let error = ''
    if (Number.isNaN(Number(formData.valor)) || Number(formData.valor) <= 0) {
      error = 'Valor inválido!'
    }
    return error
  }

  function validatePassword() {
    let error = ''
    if (formData.senha.length < 3) {
      error = 'A senha deve ter no mínimo e caracteres.'
    } else {
      if (formData.senha.length > 10) {
        error = 'A senha deve ter no máximo 10 caracteres.'
      }
    }
    return error
  }

  function getErrors() {
    const errors = [
      validateValue(),
      validatePassword()
    ]
    return errors
  }

  function getHasError(errors: any) {
    for (let i = 0; i < errors.length; i++) if (errors[i]) return true
    return false
  }

  const erros = getErrors()
  const hasError = getHasError(erros)

  function submit() {
    if (hasError) {
      console.log('Tem erros')
    } else {
      setModal(true)
    }
  }

  const agency = user ? `${user.account.agency}-${user.account.digit_agency_v}` : ''
  const account = user ? `${user.account.account_number}-${user.account.digit_account_v}` : ''

  return (
    <>
      <AppHeader />
      {/* <Navbar/> */}
      <BalanceLabel />
      {modal && (
        <Modal
          title="Depósito"
          setModal={setModal}
          handleConfirmModal={handleDeposit}
        />
      )}
      <div className="flex flex-col gap-5 bg-white border-solid dark:bg-transparent mt-[230px] border-[1px] rounded-xl dark:border-[#424245] w-[280px] h-[289px] p-3.5">
        <div className='flex'>
          <DownloadSimple size={24} color="#c98e36" />
          <h3 className='text-header-gold ml-1 font-medium'>Depósito</h3>
        </div>
        <p className=' mt-[-12px] mb-[-10px] text-[#353535] dark:text-[#F7F7F7]'>Dados para o depósito</p>
        <div className='flex justify-between'>
          <div className='w-[110px]'>
            <Input
              name='agencia'
              type='text'
              label=''
              value={agency}
              inputClassName={INPUT_TYPE_CLASSES.base}
              onChange={handleChange}
              errorMessage=''
              disabled={true}
            />
          </div>
          <div className='w-[110px]'>
            <Input
              name='conta'
              type='text'
              label=''
              value={account}
              inputClassName={INPUT_TYPE_CLASSES.base}
              onChange={handleChange}
              errorMessage=''
              disabled={true}
            />
          </div>
        </div>
        <div className='w-full flex justify-between flex-col h-[110px]'>
          <Input
            name='valor'
            type='text'
            label='Valor'
            value={formData.valor}
            inputClassName={INPUT_TYPE_CLASSES.base}
            onChange={handleChange}
            errorMessage=''
          />
          <Input
            name='senha'
            type='password'
            label='Senha'
            value={formData.senha}
            inputClassName={INPUT_TYPE_CLASSES.base}
            onChange={handleChange}
            errorMessage=''
          />
        </div>
        <button className='bg-btn-primary-base rounded-md h-[55px] text-[#FFFFFF]' onClick={submit}>
          Depositar
        </button>
      </div>
    </>
  );
};
