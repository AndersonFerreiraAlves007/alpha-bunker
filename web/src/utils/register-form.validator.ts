import { RegisterFormProps, ErrorsRegister } from '../@types/components';

export const dataValidators = (
  formValues: RegisterFormProps,
): Partial<ErrorsRegister> => {
  const { name, email, birthdate, cpf, password, confirmPassword } = formValues;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const numberRegex = /^[0-9]+$/;

  const errors = {
    name: '',
    email: '',
    birthdate: '',
    cpf: '',
    password: '',
    confirmPassword: '',
  };

  if (!name) {
    errors.name += 'Nome é obrigatório.|';
  }

  if (name.trim().length < 3) {
    errors.name += 'Nome deve ter no mínimo 3 caracteres.|';
  }

  if (!email) {
    errors.email += 'Email é obrigatório.|';
  }

  if (!emailRegex.test(email)) {
    errors.email += 'Email inválido.|';
  }

  if (!birthdate) {
    errors.birthdate += 'Data de nascimento é obrigatória.|';
  }

  if (!new Date(birthdate).getDate()) {
    errors.birthdate += 'Data de nascimento inválida.|';
  }

  if (!cpf) {
    errors.cpf += 'CPF é obrigatório.|';
  }

  if (cpf.length !== 11) {
    errors.cpf += 'CPF deve ter 11 dígitos.|';
  }

  if (!numberRegex.test(cpf)) {
    errors.cpf += 'CPF deve conter apenas números.|';
  }

  if (!password) {
    errors.password += 'Senha é obrigatória.|';
  }

  if (password.length < 6) {
    errors.password += 'Senha deve ter no mínimo 6 caracteres.|';
  }

  if (password.length > 8) {
    errors.password += 'Senha deve ter no máximo 8 caracteres.|';
  }

  if (!numberRegex.test(password)) {
    errors.password += 'Senha deve conter apenas números.|';
  }

  if (!confirmPassword) {
    errors.confirmPassword += 'Confirmar senha é obrigatório.|';
  }

  if (password !== confirmPassword) {
    errors.confirmPassword += 'Senhas não conferem.|';
  }

  return errors;
};
