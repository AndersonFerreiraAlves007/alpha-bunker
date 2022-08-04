import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import CustomForm from '../CustomForm';
import { loginDataValidator } from '../../utils/login-form.validator';
import { INPUT_TYPE_CLASSES } from '../Input';
import { login, getUser } from '../../libs/api'
import { useUser } from '../../providers/UserProvider'

const ControlledLoginForm = () => {
  const navigate = useNavigate();
  const { setUser } = useUser()
  const [changePage, setChangePage] = useState(false)
  const [formValues, setFormValues] = useState({ cpf: '', password: '' });
  const [inputClass, setInputClass] = useState({
    cpf: INPUT_TYPE_CLASSES.base,
    password: INPUT_TYPE_CLASSES.base,
  });
  const [errorMessage, setErrorMessage] = useState({ cpf: '', password: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputClass({ ...inputClass, [name]: INPUT_TYPE_CLASSES.base });
    setErrorMessage({ ...errorMessage, [name]: '' });
    setFormValues({ ...formValues, [name]: value });
  };

  async function handleLogin() {
    const {
      account,
      token
    } = await login({
      cpf: formValues.cpf,
      password: formValues.password
    })
    localStorage.setItem('token', token)

    const { birthdate, cpf, email, id, name } = await getUser({})

    setUser({
      name,
      email,
      cpf,
      birthDate: birthdate,
      id,
      account: {
        id: account.id,
        account_number: account.account_number,
        agency: account.agency,
        digit_agency_v: account.digit_agency_v,
        digit_account_v: account.digit_account_v,
        balance: account.balance,
      }
    })


    localStorage.setItem('account_id', String(account.id))
    localStorage.setItem('user_id', String(account.user_id))
    localStorage.setItem('user', JSON.stringify({
      name,
      email,
      cpf,
      birthDate: birthdate,
      id,
      account: {
        id: account.id,
        account_number: account.account_number,
        agency: account.agency,
        digit_agency_v: account.digit_agency_v,
        digit_account_v: account.digit_account_v,
        balance: account.balance,
      }
    }))
    /* navigate('/extract', { replace: true }) */

  }

  useEffect(() => {
    if(changePage) handleLogin()
  }, [changePage])

  const formInputs = [
    {
      name: 'cpf',
      type: 'text',
      value: formValues.cpf,
      label: 'Digite seu CPF',
      onChange: handleChange,
      inputClassName: inputClass.cpf,
      errorMessage: errorMessage.cpf,
    },
    {
      name: 'password',
      type: 'password',
      value: formValues.password,
      label: 'Digite sua senha',
      onChange: handleChange,
      inputClassName: inputClass.password,
      errorMessage: errorMessage.password,
    },
  ];

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const errors = loginDataValidator(formValues);
    if (Object.values(errors).some((error) => error)) {
      Object.entries(errors).forEach(([key, value]) => {
        if (value !== '') {
          setFormValues({ ...formValues, [key]: '' });
          setErrorMessage({...errorMessage, [key]: value.split('|')[0]});
          setInputClass({...inputClass, [key] : INPUT_TYPE_CLASSES.error});
        }
      });
    } else {
      setChangePage(true)
    }
  };

  return (
    <CustomForm
      formInputs={formInputs}
      onSubmit={handleSubmit}
      title="Login"
      linkTitle="Crie sua conta"
      buttonText="Entrar"
      routeName="/create-account"
    />
  );
};

export default ControlledLoginForm;
