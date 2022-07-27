import React from 'react';
import { useState, useEffect } from 'react';
import CustomForm from '../CustomForm';
import { loginDataValidator } from '../../utils/login-form.validator';
import { INPUT_TYPE_CLASSES } from '../Input';

const ControlledLoginForm = () => {
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
  const formInputs = [
    {
      name: 'cpf',
      type: 'text',
      value: formValues.cpf,
      placeholder: 'Digite seu CPF',
      onChange: handleChange,
      inputClassName: inputClass.cpf,
      errorMessage: errorMessage.cpf,
    },
    {
      name: 'password',
      type: 'password',
      value: formValues.password,
      placeholder: 'Digite sua senha',
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
    }
  };

  return (
    <CustomForm
      formInputs={formInputs}
      onSubmit={handleSubmit}
      title="Login"
      linkTitle="Crie sua conta"
      buttonText="Entrar"
      routeName="/cadastrar"
    />
  );
};

export default ControlledLoginForm;
