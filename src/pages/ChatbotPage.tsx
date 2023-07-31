import { TextLinearGradient } from "components/Typography/TextLinearGradient";
import React, { useState, useContext } from "react";
import useFetch from "hooks/useFetch";
import { AuthContext } from "states/AuthContextProvider";
import {
  ChatbotPageChatbotCreatedModal,
  ChatbotPageInputSection,
  ChatbotPageTrainingSection,
} from "components/ChatbotPage";
import { ChatbotContext } from "states/ChatbotContextProvider";
import { toast } from "react-hot-toast";

export const ChatbotPage = () => {
  const fetch = useFetch();
  const authState = useContext(AuthContext);
  const chatbotState = useContext(ChatbotContext);

  const [isChatbotTrainingModalOpen, setIsChatbotTrainingModalOpen] =
    useState(false);
  const [chatbotID, setChatbotID] = useState("");
  const [filename, setFilename] = useState("");

  const [isTraining, setIsTraining] = useState(true);
  const [isChatbotCreatedModalOpen, setIsChatbotCreatedModalOpen] =
    useState(false);

  // call the create_chatbot endpoint
  const createChatbot = async () => {
    const formData = new FormData();
    formData.append("userid", authState.user.id);
    formData.append("chatbotID", chatbotID);
    formData.append("personality", "ChatGPT");
    formData.append("dataFileName", filename);

    try {
      const data = await fetch.post(`chatbot/createChatbot`, formData, "form");
      const { endpointURL } = data;
      chatbotState.setEndpointURL(endpointURL);
      setIsChatbotCreatedModalOpen(true);
    } catch (error) {
      toast.error("Failed to create a chatbot.");
      console.error("Failed to create a chatbot. Error:", error);
    }

    setIsTraining(false);
  };

  return (
    <>
      {/* Header */}
      <div>
        <div className="font-work-sans font-semibold text-[25px] px-4 md:text-[45px] md:px-0 text-center pt-[40px]">
          Say Hello To{" "}
          <TextLinearGradient brand> Quick, Accurate </TextLinearGradient>{" "}
          support
        </div>
        <div className="font-work-sans font-medium text-[20px] px-4 md:text-[35px] text-center pt-[10px]">
          Make Your Own Chatbot Here
        </div>
      </div>

      <ChatbotPageInputSection
        setIsChatbotTrainingModalOpen={setIsChatbotTrainingModalOpen}
        setChatbotID={setChatbotID}
        setFilename={setFilename}
        createChatbot={createChatbot}
      />

      {isChatbotTrainingModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <ChatbotPageTrainingSection isLoading={isTraining} />
        </div>
      )}

      <ChatbotPageChatbotCreatedModal
        isOpen={isChatbotCreatedModalOpen}
        setIsOpen={setIsChatbotCreatedModalOpen}
      />
    </>
  );
};
