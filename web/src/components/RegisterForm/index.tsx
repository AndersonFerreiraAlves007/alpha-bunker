import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import CustomForm from '../CustomForm';
import { RegisterFormProps } from '../../@types/components';
import { dataValidators } from '../../utils/register-form.validator';
import { INPUT_TYPE_CLASSES } from '../Input';
import { createAccount } from '../../libs/api'

const ControlledRegisterForm = () => {
  const navigate = useNavigate();
  const [changePage, setChangePage] = useState(false)
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

  async function handleCreateAccount() {
    const {
      account,
      user
    } = await createAccount({
      birthdate: formValues.birthdate,
      cpf: formValues.cpf,
      email: formValues.email,
      name: formValues.name,
      password: formValues.password
    })

    navigate('/login', { replace: true })

  }

  useEffect(() => {
    if(changePage) handleCreateAccount()
  }, [changePage])

  const formInputs = [
    {
      name: 'name',
      type: 'text',
      value: formValues.name,
      onChange: handleChange,
      inputClassName: inputClass.name,
      label: 'Digite seu Nome',
      errorMessage: errorMessage.name,
    },
    {
      name: 'birthdate',
      type: 'date',
      value: formValues.birthdate,
      onChange: handleChange,
      inputClassName: inputClass.birthdate,
      label: 'Data de nascimento',
      errorMessage: errorMessage.birthdate,
    },
    {
      name: 'cpf',
      type: 'text',
      value: formValues.cpf,
      onChange: handleChange,
      inputClassName: inputClass.cpf,
      label: 'Digite seu CPF',
      errorMessage: errorMessage.cpf,
    },
    {
      name: 'email',
      type: 'email',
      value: formValues.email,
      onChange: handleChange,
      inputClassName: inputClass.email,
      label: 'Digite seu Email',
      errorMessage: errorMessage.email,
    },
    {
      name: 'password',
      type: 'password',
      value: formValues.password,
      onChange: handleChange,
      inputClassName: inputClass.password,
      label: 'Digite sua senha',
      errorMessage: errorMessage.password,
    },
    {
      name: 'confirmPassword',
      type: 'password',
      value: formValues.confirmPassword,
      onChange: handleChange,
      inputClassName: inputClass.confirmPassword,
      label: 'Confirme senha',
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
    } else {
      setChangePage(true)
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
