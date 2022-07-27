import React from 'react';
import { useState } from 'react';
import CustomForm from '../CustomForm';
import { RegisterFormProps } from '../../@types/components';
import { dataValidators } from '../../utils/register-form.validator';
import { INPUT_TYPE_CLASSES } from '../Input';

const ControlledRegisterForm = () => {
  const [formValues, setFormValues] = useState<RegisterFormProps>({
    name: '',
    birthdate: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: '',
  });
  const [inputClass, setInputClass] = useState({
    name: INPUT_TYPE_CLASSES.base,
    birthdate: INPUT_TYPE_CLASSES.base,
    email: INPUT_TYPE_CLASSES.base,
    cpf: INPUT_TYPE_CLASSES.base,
    password: INPUT_TYPE_CLASSES.base,
    confirmPassword: INPUT_TYPE_CLASSES.base,
  });
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    birthdate: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputClass({ ...inputClass, [name]: INPUT_TYPE_CLASSES.base });
    setErrorMessage({ ...errorMessage, [name]: '' });
    setFormValues({ ...formValues, [name]: value });
  };

  const formInputs = [
    {
      name: 'name',
      type: 'text',
      value: formValues.name,
      onChange: handleChange,
      inputClassName: inputClass.name,
      placeholder: 'Digite seu Nome',
      errorMessage: errorMessage.name,
    },
    {
      name: 'email',
      type: 'email',
      value: formValues.email,
      onChange: handleChange,
      inputClassName: inputClass.email,
      placeholder: 'Digite seu Email',
      errorMessage: errorMessage.email,
    },
    {
      name: 'birthdate',
      type: 'date',
      value: formValues.birthdate,
      onChange: handleChange,
      inputClassName: inputClass.birthdate,
      placeholder: 'Data de nascimento',
      errorMessage: errorMessage.birthdate,
    },
    {
      name: 'cpf',
      type: 'text',
      value: formValues.cpf,
      onChange: handleChange,
      inputClassName: inputClass.cpf,
      placeholder: 'CPF',
      errorMessage: errorMessage.cpf,
    },
    {
      name: 'password',
      type: 'password',
      value: formValues.password,
      onChange: handleChange,
      inputClassName: inputClass.password,
      placeholder: 'Senha',
      errorMessage: errorMessage.password,
    },
    {
      name: 'confirmPassword',
      type: 'password',
      value: formValues.confirmPassword,
      onChange: handleChange,
      inputClassName: inputClass.confirmPassword,
      placeholder: 'Confirmar senha',
      errorMessage: errorMessage.confirmPassword,
    },
  ];



  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const errors = dataValidators(formValues);
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
      title="Crie sua conta"
      linkTitle="Já tem uma conta?"
      buttonText="Cadastrar"
      routeName="/login"
    />
  );
};

export default ControlledRegisterForm;
