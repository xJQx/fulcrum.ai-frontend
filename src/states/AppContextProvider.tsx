import React from "react";
import { AuthContextProvider } from "./AuthContextProvider";

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
