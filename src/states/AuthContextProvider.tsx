import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

const DEFAULT_AUTH_CONTEXT = {
  isLoggedIn: false,
  setIsLoggedIn: {} as Dispatch<SetStateAction<boolean>>,
};
export const AuthContext = createContext(DEFAULT_AUTH_CONTEXT);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const authStateJson = localStorage.getItem("authState");
    if (authStateJson) {
      const authState = JSON.parse(authStateJson);
      return authState ? authState.isLoggedIn : false;
    }
    return false;
  });

  useEffect(() => {
    // Save the state to local storage
    localStorage.setItem(
      "authState",
      JSON.stringify({ isLoggedIn: isLoggedIn })
    );
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
