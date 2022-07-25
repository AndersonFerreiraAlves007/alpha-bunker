import React from 'react';
import { useState } from 'react';
import CustomForm from '../CustomForm';
import { RegisterFormProps } from '../../@types/components';
import { dataValidators } from '../../utils/register-form.validator';

const ControlledRegisterForm = () => {
  const [formValues, setFormValues] = useState<RegisterFormProps>({
    name: '',
    birthdate: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const formInputs = [
    {
      name: 'name',
      type: 'text',
      value: formValues.name,
      onChange: handleChange,
      label: 'Nome',
      placeholder: 'Digite seu Nome',
    },
    {
      name: 'email',
      type: 'email',
      value: formValues.email,
      onChange: handleChange,
      label: 'Email',
      placeholder: 'Digite seu Email',
    },
    {
      name: 'birthdate',
      type: 'date',
      value: formValues.birthdate,
      onChange: handleChange,
      label: 'Data de nascimento',
      placeholder: 'Data de nascimento',
    },
    {
      name: 'cpf',
      type: 'text',
      value: formValues.cpf,
      onChange: handleChange,
      label: 'Digite seu CPF',
      placeholder: 'CPF',
    },
    {
      name: 'password',
      type: 'password',
      value: formValues.password,
      onChange: handleChange,
      label: 'Digite sua Senha',
      placeholder: 'Senha',
    },
    {
      name: 'confirmPassword',
      type: 'password',
      value: formValues.confirmPassword,
      onChange: handleChange,
      label: 'Confirmae sua senha',
      placeholder: 'Confirmar senha',
    },
  ];

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const errors = dataValidators(formValues);
    if (Object.values(errors).some((error) => error)) {
      console.log(errors);
    }
    console.log('Formulário enviado com sucesso!');
  };

  return (
    <CustomForm
      formInputs={formInputs}
      onSubmit={handleSubmit}
      title="Crie sua conta"
      linkTitle="Já tem uma conta?"
      buttonText="Cadastrar"
      routeName="/login"
    />
  );
};

export default ControlledRegisterForm;
