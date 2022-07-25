import { LoginFormProps, ErrorsRegister } from "../@types/components"

export const loginDataValidator = (formValues: LoginFormProps): Partial<ErrorsRegister> => {
  const { cpf, password } = formValues;
  const errors = {
    cpf: '',
    password: '',
  };
  const numberRegex = /^[0-9]+$/;

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

  return errors;
}
