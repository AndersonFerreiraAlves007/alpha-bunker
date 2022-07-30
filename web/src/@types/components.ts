import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEventHandler } from 'react';

export interface InputProps {
  name?: string;
  type?: string;
  value?: string;
  errorMessage?: string;
  placeholder?: string;
  inputClassName?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FormProps {
  formInputs: InputProps[];
  title: string;
  linkTitle: string;
  routeName: string;
  buttonText: string;
  onSubmit: (e: any) => void;
}

export interface RegisterFormProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthdate: string;
  cpf: string;
}

export interface LoginFormProps {
  cpf: string;
  password: string;
}

export interface ErrorsRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthdate: string;
  cpf: string;
}

export interface PersonalDataTypes {
  name: string;
  birthdate: string;
  cpf: string;
}

export interface ButtonTypes {
  children: string;
  btnclass: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  type: 'button' | 'submit';
}
