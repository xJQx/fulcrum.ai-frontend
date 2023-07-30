import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { JwtUserSchema } from "schemas/jwt";
import { LocalStorageEnum } from "types/enums";

const DEFAULT_AUTH_CONTEXT = {
  isLoggedIn: false,
  setIsLoggedIn: {} as Dispatch<SetStateAction<boolean>>,
  accessToken: "",
  setAccessToken: {} as Dispatch<SetStateAction<string>>,
  user: {} as JwtUserSchema,
  setUser: {} as Dispatch<SetStateAction<JwtUserSchema>>,
};
export const AuthContext = createContext(DEFAULT_AUTH_CONTEXT);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // isLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const authStateJson = localStorage.getItem(LocalStorageEnum.auth_state);
    if (authStateJson) {
      const authState = JSON.parse(authStateJson);
      return authState ? authState.isLoggedIn : false;
    }
    return false;
  });

  // access_token
  const [accessToken, setAccessToken] = useState<string>(() => {
    const authStateJson = localStorage.getItem(LocalStorageEnum.auth_state);
    if (authStateJson) {
      const authState = JSON.parse(authStateJson);
      return authState ? authState.accessToken : "";
    }
    return "";
  });

  // Logged In User
  const [user, setUser] = useState<JwtUserSchema>(() => {
    const authStateJson = localStorage.getItem(LocalStorageEnum.auth_state);
    if (authStateJson) {
      const authState = JSON.parse(authStateJson);
      return authState ? authState.user : {};
    }
    return {};
  });

  useEffect(() => {
    // Save the state to local storage
    localStorage.setItem(
      LocalStorageEnum.auth_state,
      JSON.stringify({
        isLoggedIn: isLoggedIn,
        accessToken: accessToken,
        user: user,
      })
    );
  }, [isLoggedIn, accessToken, user]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        accessToken,
        setAccessToken,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
