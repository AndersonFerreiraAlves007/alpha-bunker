import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_API,
});

async function getExtract() {

}

async function createTransfer() {

}

async function createDeposit() {

}

async function createDraft() {

}

async function getTransaction() {

}

async function getUser() {

}

async function getAccounts() {

}

async function login(username, password) {

}

async function createAccount() {

}

async function getAccount() {

}

export {
  getExtract,
  createTransfer,
  createDeposit,
  createDraft,
  getTransaction,
  getUser,
  getAccounts,
  login,
  createAccount,
  getAccount
};
