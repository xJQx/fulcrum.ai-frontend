import { Button } from "components/Button";
import { ChatbotCard } from "components/ChatbotCard";
import useFetch from "hooks/useFetch";
import { chatbotsData } from "mockData/chatbotsData";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "states/AuthContextProvider";

export const DashboardPage = () => {
  const fetch = useFetch();
  const navigate = useNavigate();
  const authContext = React.useContext(AuthContext);
  const [numberOfChatbotsVisible, setNumberOfChatbotsVisible] = useState(4);

  const viewMoreChatbots = () => {
    setNumberOfChatbotsVisible(numberOfChatbotsVisible + 2);
  };
  const hideSomeChatbots = () => {
    setNumberOfChatbotsVisible(numberOfChatbotsVisible - 2);
  };

  React.useEffect(() => {
    if (!authContext.isLoggedIn) {
      return navigate("/");
    }
  }, []);

  // TODO: Integrate with backend
  // React.useEffect(() => {
  //   try {
  //     if (authContext.isLoggedIn)
  //       fetch
  //         .get("chatbot/getChatbot/...")
  //         .catch((e) => console.log(e.detail));
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, []);

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
          {chatbotsData.map(
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
          {numberOfChatbotsVisible < chatbotsData.length && (
            <Button className="w-[40%] text-center" onClick={viewMoreChatbots}>
              View More
            </Button>
          )}
        </div>
      </section>
    </>
  );
};
