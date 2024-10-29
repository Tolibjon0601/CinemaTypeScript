import React, { createContext, useState, ReactNode } from "react";
import { toast } from "react-toastify";

interface AuthContextType {
  isLogin: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean>(Boolean(localStorage.getItem("token")));

  const login = (token: string) => {
    setIsLogin(true);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setIsLogin(false);
    localStorage.removeItem("token");
    toast.success("tizimdan chiqildi");
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
