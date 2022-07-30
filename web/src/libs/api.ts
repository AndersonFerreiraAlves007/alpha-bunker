import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_API,
});

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
    origin_account_id: number,
    dest_account_id: number
  })[]
}

async function getExtract(data: IGetExtractRequest): Promise<IGetExtractResponse> {
  return {
    transactions: [
      {
        description: 'transfer',
        dest_account_id: 1,
        id: 1,
        origin_account_id: 2,
        value: 23
      }
    ]
  }
}

//////////////////////////////////

interface ICreateTransferRequest {
  value: number;
  type: string;
  origin_account_id: number;
  dest_account_id: number;
  dest_agency: string;
  dest_account_ver_code: string;
  dest_agency_ver_code: string;
  dest_cpf: string;
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
  return {
    description: 'transfer',
    value: 12,
    date: '22/02/2022',
    origin_account_id: 1,
    dest_account_id: 1,
    id: 1
  }
}

////////////////

export interface ICreateDepositRequest {
  value: number;
  type: string;
  origin_account_id: 1;
  dest_account_id: 2;
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
  return {
    description: 'deposit',
    value: 12,
    date: '22/02/2022',
    origin_account_id: 1,
    dest_account_id: 1,
    id: 1
  }
}

/////////////////////////

export interface ICreateWithdrawRequest {
  value: number;
  type: string;
  origin_account_id: 1;
  dest_account_id: 2;
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
  return {
    description: 'withdraw',
    value: 12,
    date: '22/02/2022',
    origin_account_id: 1,
    dest_account_id: 1,
    id: 2
  }
}

////////////////////////////////

interface IGetTransactionRequest {

}

interface IGetTransactionResponse {
  id: number;
  description: string;
  value: number;
  date: string;
  origin_account_id: number;
  dest_account_id: number;
}

async function getTransaction(id: number): Promise<IGetTransactionResponse> {
  return {
    id: 2,
    description: 'withdraw',
    value: 12,
    date: '22/02/2022',
    origin_account_id: 1,
    dest_account_id: 1,
  }
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
  return {
    id: 1,
    name: 'Anderson',
    email: 'andersonamericasul07@gmail.com',
    birthdate: '18/12/1995',
    cpf: '10831989475',
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
  return [
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
  ]
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
  return {
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
  return {
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
  return {
    account_number: '123456',
    agency: '1234',
    balance: 23,
    digit_account_v: '1',
    digit_agency_v: '1',
    id: 2,
    user_id: 1
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
