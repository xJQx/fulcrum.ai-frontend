import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { JwtUserSchema } from "schemas/jwt";
import { LocalStorageEnum } from "types/enums";

const DEFAULT_CHATBOT_CONTEXT = {
  endpointURL: "",
  setEndpointURL: {} as Dispatch<SetStateAction<string>>,
};
export const ChatbotContext = createContext(DEFAULT_CHATBOT_CONTEXT);

export const ChatbotContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // endpointURL
  const [endpointURL, setEndpointURL] = useState<string>(() => {
    const chatbotStateJson = localStorage.getItem(LocalStorageEnum.chatbot_state);
    if (chatbotStateJson) {
      const chatbotState = JSON.parse(chatbotStateJson);
      return chatbotState ? chatbotState.endpointURL : "";
    }
    return "";
  });

  useEffect(() => {
    // Save the state to local storage
    localStorage.setItem(
      LocalStorageEnum.chatbot_state,
      JSON.stringify({
        endpointURL: endpointURL,
      })
    );
  }, [endpointURL]);

  return (
    <ChatbotContext.Provider
      value={{
        endpointURL,
        setEndpointURL,
  
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};
