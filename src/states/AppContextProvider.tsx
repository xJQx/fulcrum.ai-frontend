import React from "react";
import { AuthContextProvider } from "./AuthContextProvider";
import { ChatbotContextProvider } from "./ChatbotContextProvider";

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AuthContextProvider>
      <ChatbotContextProvider>{children}</ChatbotContextProvider>
    </AuthContextProvider>
  );
};
