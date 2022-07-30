import React, {
  ReactNode,
  createContext,
  useState,
  useContext
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
}

export const UserContext = createContext<Partial<ContextTypes>>({});

interface UserProviderTypes {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderTypes) => {
  const [user, setUser] = useState<UserTypes|null>(null);
  const [loading, setLoading] = useState(true);

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
