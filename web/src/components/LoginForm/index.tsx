import React from 'react';
import { useState } from 'react';
import CustomForm from '../CustomForm';

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
      onChange: handleChange,
    },
    {
      name: 'password',
      type: 'password',
      value: formValues.password,
      onChange: handleChange,
    },
  ];

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formValues);
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
