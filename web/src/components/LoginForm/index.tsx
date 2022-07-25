import React from 'react';
import { useState } from 'react';
import CustomForm from '../CustomForm';
import { loginDataValidator } from '../../utils/login-form.validator';

const ControlledLoginForm = () => {
  const [formValues, setFormValues] = useState({cpf: '', password: ''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const formInputs = [
    {
      name: 'cpf',
      type: 'text',
      value: formValues.cpf,
      placeholder: 'Digite seu CPF',
      onChange: handleChange,
    },
    {
      name: 'password',
      type: 'password',
      value: formValues.password,
      placeholder: 'Digite sua senha',
      onChange: handleChange,
    },
  ];

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const errors = loginDataValidator(formValues);
    if (Object.values(errors).some((error) => error)) {
      console.log(errors);
    }
    console.log('Logado com sucesso!');
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
