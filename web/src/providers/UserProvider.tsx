import React, {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect
} from 'react';

import { getAccount } from '../libs/api'

interface ContextTypes {
  user: UserTypes|null;
  loading: boolean;
  setLoading: any;
  setUser: any;
  updateBalance: any;
}

interface UserTypes {
  name: string;
  email: string;
  cpf: string;
  birthDate: string;
  id: number;
  account: {
    id: number;
    account_number: string;
    agency: string;
    digit_agency_v: string;
    digit_account_v: string;
    balance: number;
  }
}

export const UserContext = createContext<Partial<ContextTypes>>({});

interface UserProviderTypes {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderTypes) => {
  const [user, setUser] = useState<UserTypes|null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const text = localStorage.getItem('user')
    setUser(text ? JSON.parse(text) : null)
  }, [])

  async function updateBalance() {
    const data = await getAccount(Number(localStorage.getItem('account_id')))
    const obj = {
      name: user?.name || '',
      email: user?.name || '',
      cpf: user?.cpf  || '',
      birthDate: user?.birthDate  || '',
      id: user?.id  || 0,
      account: {
        id: data.id,
        account_number: data.account_number,
        agency: data.agency,
        digit_agency_v: data.digit_agency_v,
        digit_account_v: data.digit_account_v,
        balance: data.balance,
      }
    }
    localStorage.setItem('user', JSON.stringify(obj))
    setUser(obj)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        setLoading,
        setUser,
        updateBalance
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
