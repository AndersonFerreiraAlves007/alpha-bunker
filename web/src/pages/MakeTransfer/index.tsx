import React, { useState } from 'react';
import Button from '../../components/Button';
import { Modal } from '../../components/ModalConfirmTransaction';
import { INPUT_TYPE_CLASSES } from '../../components/Input';
import { createTransfer } from '../../libs/api';
import BalanceLabel from '../../components/BalanceLabel';
import Navbar from '../../components/Navbar';
import AppHeader from '../../components/AppHeader';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import { useUser } from '../../providers/UserProvider';
import { ArrowsLeftRight } from 'phosphor-react';

export const MakeTransfer = () => {
  const [modal, setModal] = useState(false);
  const { user, updateBalance } = useUser();
  const [account, setAccount] = useState('');
  const [agency, setAgency] = useState('');
  const [value, setValue] = useState(0);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleTransfer() {
    try {
      const { id } = await createTransfer({
        dest_account_number: account.substring(0, account.length - 1),
        dest_account_ver_code: account.substring(account.length - 1),
        dest_agency_ver_code: agency.substring(agency.length - 1),
        dest_agency: agency.substring(0, agency.length - 1),
        origin_account_id: user?.account.id || 0,
        type: 'transfer',
        value,
      });
      await updateBalance();
      navigate(`/transaction/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  function validateAccount() {
    let error = '';
    console.log(account);
    if (account.length !== 6) {
      error = 'A conta deve ter 6 dígitos.';
    }
    return error;
  }

  function validateAgency() {
    let error = '';
    console.log(agency);
    if (agency.length !== 5) {
      error = 'A agência deve ter 5 dígitos.';
    }
    return error;
  }

  function validateValue() {
    let error = '';
    if (Number.isNaN(value) || value <= 0) {
      error = 'Valor inválido.';
    }
    return error;
  }

  function validatePassword() {
    let error = '';
    if (password.length < 3) {
      error = 'A senha deve ter no mínimo e caracteres.';
    } else {
      if (password.length > 10) {
        error = 'A senha deve ter no máximo 10 caracteres.';
      }
    }
    return error;
  }

  function getErrors() {
    const errors = [
      validateAccount(),
      validateAgency(),
      validateValue(),
      validatePassword(),
    ];
    return errors;
  }

  function getHasError(errors: any) {
    for (let i = 0; i < errors.length; i++) if (errors[i]) return true;
    return false;
  }

  const erros = getErrors();
  const hasError = getHasError(erros);

  function handleSubmit() {
    if (!hasError) {
      setModal(true);
    }
  }

  function formatAccount(account: string) {
    if (account.length < 6) return account;
    return `${account.substring(0, 5)}-${account.substring(5, 6)}`;
  }

  function formatAgency(agency: string) {
    if (agency.length < 5) return agency;
    return `${agency.substring(0, 4)}-${agency.substring(4, 5)}`;
  }

  function clearAccount(account: string) {
    const text = account.replace(/\D/, '').trim();
    if (text.length > 6) setAccount(text.substring(0, 6));
    else setAccount(text);
  }

  function clearAgency(agency: string) {
    const text = agency.replace(/\D/, '').trim();
    if (text.length > 5) setAgency(text.substring(0, 5));
    else setAgency(text);
  }

  const agencyFormat = formatAgency(agency);
  const accountFormat = formatAccount(account);

  const agencyOrigin = user ? user.account.agency : '';
  const digitAgencyVOrigin = user ? user.account.digit_agency_v : '';
  const accountNumberOrigin = user ? user.account.account_number : '';
  const digitAccountVOrigin = user ? user.account.digit_account_v : '';

  return (
    <>
      <AppHeader />
      {/* <Navbar/> */}
      <BalanceLabel />
      {modal && (
        <Modal
          title="Transferência"
          setModal={setModal}
          handleConfirmModal={handleTransfer}
        />
      )}
      <form className="flex flex-col mt-[220px] w-[280px] bg-white dark:bg-transparent p-3.5 rounded-xl  border-[1px] dark:border-[#424245]">
        <div className="flex">
          <ArrowsLeftRight size={24} color="#c98e36" />
          <h3 className="text-header-gold ml-1 font-medium">Transferência</h3>
        </div>
        <h2 className="text-[#353535] dark:text-[#F7F7F7] mb-[6px] mt-[8px]">
          Origem
        </h2>
        <div className="w-full flex justify-between	">
          <div className="w-[110px]">
            <Input
              name="agencia"
              type="text"
              label="Agência"
              value={`${user?.account.account_number}-${user?.account.digit_account_v}`}
              inputClassName={INPUT_TYPE_CLASSES.base}
              onChange={() => {}}
              errorMessage=""
              disabled={true}
            />
          </div>
          <div className="w-[110px]">
            <Input
              name="conta"
              type="text"
              label="Conta"
              value={`${user?.account.agency}-${user?.account.digit_agency_v}`}
              inputClassName={INPUT_TYPE_CLASSES.base}
              onChange={() => {}}
              errorMessage=""
              disabled={true}
            />
          </div>
        </div>
        <div>
          <h2 className="mb-[6px] mt-[7px] text-[#353535] dark:text-[#F7F7F7]">
            Destino
          </h2>
          <div className="w-full flex justify-between	">
            <div className="w-[110px]">
              <Input
                name="agencia"
                type="text"
                label="Agência"
                value={agencyFormat}
                inputClassName={INPUT_TYPE_CLASSES.base}
                onChange={(e) => clearAgency(e.target.value)}
                errorMessage=""
              />
            </div>
            <div className="w-[110px]">
              <Input
                name="conta"
                type="text"
                label="Conta"
                value={accountFormat}
                inputClassName={INPUT_TYPE_CLASSES.base}
                onChange={(e) => clearAccount(e.target.value)}
                errorMessage=""
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between flex-col h-[110px] mt-[15px] mb-[15px] h-[79px]">
          <Input
            name="valor"
            type="text"
            label="Valor"
            value={value.toString()}
            inputClassName={INPUT_TYPE_CLASSES.base}
            onChange={(e) => setValue(e.target.value)}
            errorMessage=""
          />
          <Input
            name="senha"
            type="text"
            label="Senha"
            value={password.toString()}
            inputClassName={INPUT_TYPE_CLASSES.base}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage=""
          />
        </div>
        <button
          className="bg-btn-primary-base rounded-md h-[40px] text-[#FFFFFF]"
          type='button'
          onClick={handleSubmit}
        >
          Transferir
        </button>
      </form>
    </>
  );
};
