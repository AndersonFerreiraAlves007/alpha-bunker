import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_API,
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");

    config.headers = {
      ...config.headers,
      authorization: `Bearer ${token}`,
    };

    return config;
  },
  (error) => Promise.reject(error)
);

interface IGetExtractRequest {
  account_number: string;
  agency: string;
  digit_agency_v: string;
  digit_account_v: string;
}

interface IGetExtractResponse {
  transactions: ({
    id: number,
    description: string,
    value: number,
    date: string,
    origin_account_id: number,
    dest_account_id: number,
  })[]
}

function formateDate(date: any) {
  const obj = new Date(date)
  return obj.toLocaleDateString()
}

async function getExtract(data: IGetExtractRequest): Promise<IGetExtractResponse> {
  /* return {
    transactions: [
      {
        description: 'transfer received',
        dest_account_id: 1,
        id: 1,
        origin_account_id: 2,
        value: 23,
        date: '12/02/2022'
      },
      {
        description: 'transfer fee',
        dest_account_id: 1,
        id: 1,
        origin_account_id: 2,
        value: 5,
        date: '12/02/2022'
      },
      {
        description: 'transfer received',
        dest_account_id: 1,
        id: 1,
        origin_account_id: 2,
        value: 23,
        date: '12/02/2022'
      },
    ]
  } */

  const dados = await api.post('/transactions/history', {
    account_number: data.account_number,
    agency: data.agency,
    digit_agency_v: data.digit_agency_v,
    digit_account_v: data.digit_account_v
  })

  const retorno: ({
    id: number,
    description: string,
    value: number,
    date: string,
    origin_account_id: number,
    dest_account_id: number,
  })[] = []

  for(let i = 0; i < dados.data.length; i++) {
    retorno.push({
      date: formateDate(dados.data[i].value),
      description: dados.data[i].description,
      dest_account_id: Number(dados.data[i].dest_account_id),
      id: Number(dados.data[i].id),
      origin_account_id: Number(dados.data[i].origin_account_id),
      value: Number(dados.data[i].value)
    })
  }

  return {
    transactions: retorno
  }
}

//////////////////////////////////

interface ICreateTransferRequest {
  value: number;
  type: string;
  origin_account_id: number;
  dest_account_number: string;
  dest_agency: string;
  dest_account_ver_code: string;
  dest_agency_ver_code: string;
}

interface ICreateTransferResponse {
  description: string;
  value: number;
  date: string;
  origin_account_id: number;
  dest_account_id: number;
  id: number;
}

async function createTransfer(data: ICreateTransferRequest): Promise<ICreateTransferResponse> {

  /* return {
    description: 'transfer',
    value: 12,
    date: '22/02/2022',
    origin_account_id: 1,
    dest_account_id: 1,
    id: 1
  } */

  const dados = await api.post('/transactions/transfer', {
    value: data.value,
    type: 'transferência',
    origin_account_id: data.origin_account_id,
    dest_account_number: data.dest_account_number,
    dest_agency: data.dest_agency,
    dest_account_ver_code: data.dest_account_ver_code,
    dest_agency_ver_code: data.dest_agency_ver_code
  })


  return {
    date: formateDate(dados.data.date),
    description: dados.data.description,
    dest_account_id: Number(dados.data.dest_account_id),
    id: Number(dados.data.id),
    origin_account_id: Number(dados.data.origin_account_id),
    value: Number(dados.data.value)
  }

}

////////////////

export interface ICreateDepositRequest {
  value: number;
  type: string;
  origin_account_id: number;
  dest_account_id: number;
}

export interface ICreateDepositResponse {
  description: string;
  value: number;
  date: string;
  origin_account_id: number;
  dest_account_id: number;
  id: number;
}

async function createDeposit(data: ICreateDepositRequest): Promise<ICreateDepositResponse> {
  /* return {
    description: 'deposit',
    value: 12,
    date: '22/02/2022',
    origin_account_id: 1,
    dest_account_id: 1,
    id: 1
  } */

  const dados = await api.post('/transactions/deposit', {
    value: data.value,
    type: 'depósito',
    origin_account_id: data.origin_account_id,
    dest_account_id: data.dest_account_id
  })

  return {
    date: formateDate(dados.data.date),
    description: dados.data.description,
    dest_account_id: Number(dados.data.dest_account_id),
    id: Number(dados.data.id),
    origin_account_id: Number(dados.data.origin_account_id),
    value: Number(dados.data.value)
  }
}

/////////////////////////

export interface ICreateWithdrawRequest {
  value: number;
  type: string;
  origin_account_id: number;
  dest_account_id: number;
}

export interface ICreateWithdrawResponse {
  description: string;
  value: number;
  date: string;
  origin_account_id: number;
  dest_account_id: number;
  id: number;
}

async function createWithdraw(data: ICreateWithdrawRequest): Promise<ICreateWithdrawResponse> {
  /* return {
    description: 'withdraw',
    value: 12,
    date: '22/02/2022',
    origin_account_id: 1,
    dest_account_id: 1,
    id: 2
  } */

  const dados = await api.post('/transactions/withdraw', {
    value: Number(data.value),
    type: 'saque',
    origin_account_id: Number(data.origin_account_id),
    dest_account_id: Number(data.dest_account_id),
  })

  return {
    date: formateDate(dados.data.date),
    description: dados.data.description,
    dest_account_id: Number(dados.data.dest_account_id),
    id: Number(dados.data.id),
    origin_account_id: Number(dados.data.origin_account_id),
    value: Number(dados.data.value)
  }
}

////////////////////////////////

interface IGetTransactionRequest {

}

/* export interface IGetTransactionResponse {
  id: number;
  description: string;
  value: number;
  date: string;
  origin_account_id: number;
  dest_account_id: number;
} */

export interface IGetTransactionResponse {
  id: number;
  description: string;
  value: number;
  date: string;
  origin_account_id: number;
  dest_account_id: number;
  dest_account: {
    id: number;
    account_number: string;
    agency: string;
    digit_agency_v: string;
    digit_account_v: string;
    balance: number;
    user_id: number;
  }
}

async function getTransaction(id: number): Promise<any> {
  /* return {
    id: 2,
    description: 'withdraw sent',
    value: 12,
    date: '22/02/2022',
    origin_account_id: 1,
    user_origin: "Anderson Oliveira",
    dest_account_id: 1,
    user_dest: "André Oliveira",
    dest_account: {
      account_number: '12123',
      agency: '12121',
      balance: 0,
      digit_account_v: '1212',
      digit_agency_v: '1212',
      id: 1,
      user_id: 1
    }
  } */
  const dados = await api.get(`/transactions/${id}`)
  return dados.data
}

///////////////////////////////////

interface IGetUserRequest {

}

interface IGetUserResponse {
  id: number;
  name: string;
  email: string;
  birthdate: string;
  cpf: string;
}

async function getUser(data: IGetUserRequest): Promise<IGetUserResponse> {
  /* return {
    id: 1,
    name: 'Anderson',
    email: 'andersonamericasul07@gmail.com',
    birthdate: '18/12/1995',
    cpf: '10831989475',
  } */
  const dados = await api.get('/users')
  return {
    birthdate: formateDate(dados.data.birthdate),
    cpf: dados.data.cpf,
    email: dados.data.email,
    id: Number(dados.data.id),
    name: dados.data.name
  }
}

/////////////////////////////////////

interface IGetAccountsRequest {

}

type IGetAccountsResponse = ({
  id: number;
  account_number: string;
  agency: string;
  digit_agency_v: string;
  digit_account_v: string;
  balance: number;
  user_id: number;
})[]

async function getAccounts(data: IGetAccountsRequest): Promise<IGetAccountsResponse> {
  /* return [
    {
      id: 1,
      account_number: '12345',
      agency: '12345678',
      digit_agency_v: '2',
      digit_account_v: '2',
      balance: 1000,
      user_id: 1
    },
    {
      id: 2,
      account_number: '12345',
      agency: '12345678',
      digit_agency_v: '3',
      digit_account_v: '3',
      balance: 2000,
      user_id: 1
    },
  ] */

  const dados = await api.get('/accounts/user')

  const retorno: ({
    id: number;
    account_number: string;
    agency: string;
    digit_agency_v: string;
    digit_account_v: string;
    balance: number;
    user_id: number;
  })[] = []

  for(let i = 0; i < dados.data.length; i++) {
    retorno.push({
      account_number: dados.data[i].account_number,
      agency: dados.data[i].agency,
      balance: Number(dados.data[i].balance),
      digit_account_v: dados.data[i].digit_account_v,
      digit_agency_v: dados.data[i].digit_agency_v,
      id: Number(dados.data[i].id),
      user_id: Number(dados.data[i].user_id)
    })
  }

  return retorno
}

///////////////////////////////////////////

export interface ILoginRequest {
  cpf: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  account: {
    id: number;
    account_number: string;
    agency: string;
    digit_agency_v: string;
    digit_account_v: string;
    balance: number;
    user_id: number;
  }
}

async function login(data: ILoginRequest): Promise<ILoginResponse> {
  /* return {
    token: '',
    account: {
      id: 1,
      account_number: '12345',
      agency: '12345678',
      digit_agency_v: '2',
      digit_account_v: '2',
      balance: 0,
      user_id: 1
    }
  } */
  const dados = await api.post('/auth/login', {
    cpf: data.cpf,
    password: data.password
  })

  return {
    token: dados.data.token,
    account: {
      account_number: dados.data.account.account_number,
      agency: dados.data.account.agency,
      balance: Number(dados.data.account.balance),
      digit_account_v: dados.data.account.digit_account_v,
      digit_agency_v: dados.data.account.digit_agency_v,
      id: Number(dados.data.account.id),
      user_id: Number(dados.data.account.user_id)
    }
  }
}

////////////////////////////////////

export interface ICreateAccountRequest {
  name: string;
  email: string;
  cpf: string;
  password: string;
  birthdate: string;
}

export interface ICreateAccountResponse {
  user: {
    name: string;
    email: string;
    cpf: string;
    id: number;
    birthdate: Date;
  }

  account: {
    account_number: string;
    agency: string;
    digit_agency_v: string;
    digit_account_v: string;
    balance: number;
    user_id: number;
  }
}

async function createAccount(data: ICreateAccountRequest): Promise<ICreateAccountResponse> {
  /* return {
    user: {
      id: 1,
      birthdate: new Date(),
      cpf: '10831989475',
      email: 'andersonamericasul07@gmail.com',
      name: 'Anderson'
    },
    account: {
      account_number: '12345',
      agency: '12345678',
      balance: 0,
      digit_account_v: '2',
      digit_agency_v: '2',
      user_id: 1
    }
  } */
  const dados = await api.post('/auth/register', {
    name: data.name,
    email: data.email,
    cpf: data.cpf,
    password: data.password,
    birthdate: data.birthdate
  })

  return {
    account: {
      account_number: dados.data.account.account_number,
      agency: dados.data.account.agency,
      balance: Number(dados.data.account.balance),
      digit_account_v: dados.data.account.digit_account_v,
      digit_agency_v: dados.data.account.digit_agency_v,
      user_id: Number(dados.data.account.user_id)
    },
    user: {
      birthdate: new Date(dados.data.user.birthdate),
      cpf: dados.data.user.cpf,
      email: dados.data.user.email,
      id: Number(dados.data.user.id),
      name: dados.data.user.name
    }
  }
}

/////////////////////////////////////////

interface IGetAccountRequest {

}

interface IGetAccountResponse {
  account_number: string,
  agency: string,
  balance: number,
  digit_account_v: string,
  digit_agency_v: string,
  user_id: number,
  id: number
}

async function getAccount(id: number): Promise<IGetAccountResponse> {
  /* return {
    account_number: '123456',
    agency: '1234',
    balance: 23,
    digit_account_v: '1',
    digit_agency_v: '1',
    id: 2,
    user_id: 1
  } */
  const dados = await api.get(`/accounts/${id}`)
  return {
    account_number: dados.data.account_number,
    agency: dados.data.agency,
    balance: Number(dados.data.balance),
    digit_account_v: dados.data.digit_account_v,
    digit_agency_v: dados.data.digit_agency_v,
    id: Number(dados.data.id),
    user_id: Number(dados.data.user_id)
  }
}

export {
  getExtract,
  createTransfer,
  createDeposit,
  createWithdraw,
  getTransaction,
  getUser,
  getAccounts,
  login,
  createAccount,
  getAccount
};
