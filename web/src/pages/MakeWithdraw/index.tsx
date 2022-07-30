import React, { useState, useEffect } from 'react';
import { Button } from '../../components/Button';
import { INPUT_TYPE_CLASSES } from '../../components/Input';
import Input from '../../components/Input';
import { Modal } from '../../components/ModalConfirmTransaction';
import { api } from '../../libs/api';
import { DownloadSimple  } from "phosphor-react"
import Navbar from '@/components/Navbar';
import BalanceLabel from '@/components/BalanceLabel';

export const MakeWithdraw = () => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    agencia: "",
    conta: "",
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
      // fazer request
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar/>
      <BalanceLabel accountNumber='' agency='' balance={0} digitAccountV="" digitAgencyV=''/>
      {modal && (
        <Modal
          title="Depósito"
          setModal={setModal}
          handleConfirmModal={handleDeposit}
        />
      )}
      <div className="flex flex-col gap-5 border-solid border-[1px] rounded-xl !border-input-border w-[330px] h-[370px] p-4">
        <div className='flex'>
          <DownloadSimple  size={24} color="#c98e36" />
          <h3 className='text-header-gold ml-1'>Saque</h3>
        </div>
        <p className='text-input-base'>Dados para o saque</p>
        <div className='flex justify-between'>
          <Input
            name='agencia'
            type='text'
            value={formData.agencia}
            inputClassName={INPUT_TYPE_CLASSES.base}
            onChange={handleChange}
          />
          <Input
            name='conta'
            type='text'
            value={formData.conta}
            inputClassName={INPUT_TYPE_CLASSES.base}
            onChange={handleChange}
          />
        </div>
        <div className='w-full flex justify-between flex-col h-[110px]'>
          <Input
            name='valor'
            type='text'
            value={formData.valor}
            inputClassName={INPUT_TYPE_CLASSES.base}
            onChange={handleChange}
          />
          <Input
            name='senha'
            type='text'
            value={formData.senha}
            inputClassName={INPUT_TYPE_CLASSES.base}
            onChange={handleChange}
          />
        </div>
        <button className='bg-btn-primary-base rounded-md h-[50px]'>
          Depositar
        </button>
      </div>
    </>
  );
};
