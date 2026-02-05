import { useState } from 'react';

const ACCESS_TOKEN_KEY = 'access_token';

export const useAuth = () => {
  const [accessToken, setAccessToken] = useState<string | null>(() => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  });``

  const login = (newAccessToken: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, newAccessToken);
    setAccessToken(newAccessToken);
  };

  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    setAccessToken(null);
  };

  const isAuthenticated = !!accessToken;

  return { accessToken, isAuthenticated, login, logout };
};
