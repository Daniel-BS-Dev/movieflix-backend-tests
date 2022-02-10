import { createContext } from 'react';
import { TokenData } from './utils/request';


export type AuthContextData = {
  isAuthenticated: boolean;
  token?: TokenData;
};

export type AuthContextType = {
  authContextData: AuthContextData;
  setAuthContextData: (authContextData: AuthContextData) => void;
};

export const AuthContext = createContext<AuthContextType>({
    authContextData: {
        isAuthenticated: false,
    },
    setAuthContextData: () => null,
});
