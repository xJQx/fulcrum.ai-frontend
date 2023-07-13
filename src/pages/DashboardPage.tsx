import { Button } from "components/Button";
import { ChatbotCard, ChatbotCardProps } from "components/ChatbotCard";
import React, { useState } from "react";

export const DashboardPage = () => {
  const [numberOfChatbotsVisible, setNumberOfChatbotsVisible] = useState(4);

  const viewMoreChatbots = () => {
    setNumberOfChatbotsVisible(numberOfChatbotsVisible + 2);
  };
  const hideSomeChatbots = () => {
    setNumberOfChatbotsVisible(numberOfChatbotsVisible - 2);
  };

  return (
    <>
      {/* Header */}
      <section className="py-[42px] md:py-[56px] px-[48px] text-white flex flex-row justify-center gap-6">
        <div className="text-brand-gunmetal font-work-sans font-bold text-[30px] md:text-[40px] leading-tight text-center md:text-center above">
          Your Chatbots
        </div>
      </section>

      {/* Chatbot Cards */}
      <section className="mb-[80px] px-[32px] flex flex-col justify-center items-center">
        <div className="flex flex-wrap justify-center items-center gap-5 max-w-screen-lg">
          {chatbotCardData.map(
            (chatbot, index) =>
              index < numberOfChatbotsVisible && (
                <ChatbotCard key={chatbot.name} {...chatbot} />
              )
          )}
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-[42px] gap-3">
          {/* Hide Chatbot Button */}
          {numberOfChatbotsVisible > 3 && (
            <Button
              variant="ghost"
              className="w-[40%] text-center"
              onClick={hideSomeChatbots}
            >
              Minimise
            </Button>
          )}

          {/* View More Button */}
          {numberOfChatbotsVisible < chatbotCardData.length && (
            <Button className="w-[40%] text-center" onClick={viewMoreChatbots}>
              View More
            </Button>
          )}
        </div>
      </section>
    </>
  );
};

const chatbotCardData: Array<ChatbotCardProps> = [
  {
    chatbotId: "1",
    name: "StudyGPT",
    trainedData: "study-note.pdf",
    parameters: {
      personality: "Methodological",
      language: "English",
    },
    usage: {
      currentApiRequests: 5,
      maxApiRequests: 365,
      timeUsed: 30,
      totalTime: 9999,
    },
  },
  {
    chatbotId: "2",
    name: "StudyGPT v2",
    trainedData: "study-note.pdf",
    parameters: {
      personality: "Methodological",
      language: "Chinese",
    },
    usage: {
      currentApiRequests: 53,
      maxApiRequests: 365,
      timeUsed: 1537,
      totalTime: 9999,
    },
  },
  {
    chatbotId: "3",
    name: "StudyGPT v3",
    trainedData: "study-note.pdf",
    parameters: {
      personality: "Methodological",
      language: "Japanese",
    },
    usage: {
      currentApiRequests: 158,
      maxApiRequests: 365,
      timeUsed: 5555,
      totalTime: 9999,
    },
  },
  {
    chatbotId: "4",
    name: "StudyGPT v4",
    trainedData: "study-note.pdf",
    parameters: {
      personality: "Expert",
      language: "English",
    },
    usage: {
      currentApiRequests: 200,
      maxApiRequests: 365,
      timeUsed: 8888,
      totalTime: 9999,
    },
  },
  {
    chatbotId: "5",
    name: "StudyGPT v5",
    trainedData: "study-note.pdf",
    parameters: {
      personality: "Methodological",
      language: "Japanese",
    },
    usage: {
      currentApiRequests: 158,
      maxApiRequests: 365,
      timeUsed: 5555,
      totalTime: 9999,
    },
  },
  {
    chatbotId: "6",
    name: "StudyGPT v6",
    trainedData: "study-note.pdf",
    parameters: {
      personality: "Expert",
      language: "English",
    },
    usage: {
      currentApiRequests: 200,
      maxApiRequests: 365,
      timeUsed: 8888,
      totalTime: 9999,
    },
  },
];
