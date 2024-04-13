import { createUserDataFetcher } from "@/api/userData";
import { User } from "@/model/userModel";
import React, { createContext, useEffect, useState } from "react";

type UserProviderProps = {
  children: React.ReactNode;
};

type UserContextValue = {
  user: User | null;
  loading: boolean;
  error: Error | null;
};

export const UserContext = createContext<UserContextValue>({
  user: null,
  loading: true,
  error: null,
});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUserData = createUserDataFetcher();
    const fetchData = async () => {
      try {
        const userData = await fetchUserData(1);
        setUser(userData);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const contextValue: UserContextValue = {
    user,
    loading,
    error,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
