import { ChatbotEditCard } from "components/ChatbotEditCard";
import { chatbotsData } from "mockData/chatbotsData";
import React from "react";
import { useParams } from "react-router";

export const ChatbotEditPage = () => {
  const params = useParams();
  const { chatbotId } = params;

  const chatbotData = chatbotsData.find((c) => c.chatbotId === chatbotId);

  return (
    <>
      {/* Header */}
      <section className="py-[42px] md:py-[56px] px-[48px] text-white flex flex-row justify-center gap-6">
        <div className="text-brand-gunmetal font-work-sans font-bold text-[30px] md:text-[40px] leading-tight text-center md:text-center above">
          Edit Chatbot
        </div>
      </section>

      {/* Edit Chatbot */}
      <div className="flex justify-center items-center mb-[64px]">
        <div className="max-w-[80%]">
          {chatbotData && <ChatbotEditCard {...chatbotData} />}
        </div>
      </div>
    </>
  );
};
