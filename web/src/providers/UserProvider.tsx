import React, {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect
} from 'react';

interface ContextTypes {
  user: UserTypes|null;
  loading: boolean;
  setLoading: any;
  setUser: any;
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

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        setLoading,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
