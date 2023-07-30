import { Button } from "components/Button";
import { ChatbotCard } from "components/ChatbotCard";
import { clientBaseUrl } from "config/client";
import useFetch from "hooks/useFetch";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatbotSchema } from "schemas/chatbot";
import { AuthContext } from "states/AuthContextProvider";

export const DashboardPage = () => {
  const fetch = useFetch();
  const navigate = useNavigate();
  const authState = React.useContext(AuthContext);
  const [chatbotsList, setChatbotsList] = useState<ChatbotSchema[]>([]);
  const [numberOfChatbotsVisible, setNumberOfChatbotsVisible] = useState(4);

  const viewMoreChatbots = () => {
    setNumberOfChatbotsVisible(numberOfChatbotsVisible + 2);
  };
  const hideSomeChatbots = () => {
    setNumberOfChatbotsVisible(numberOfChatbotsVisible - 2);
  };

  React.useEffect(() => {
    if (!authState.isLoggedIn) {
      return navigate(clientBaseUrl);
    }
  }, []);

  // TODO: Integrate with backend
  // React.useEffect(() => {
  //   const callApi = async () => {
  //     try {
  //       if (authState.isLoggedIn) {
  //         const chatbotsListtemp: ChatbotSchema[] = [];
  //         const chatbotIds = await fetch
  //           .get(`chatbot/getChatbots/${authState.user.id}`)
  //           .then((data) => {
  //             return data.chatbots;
  //           })
  //           .catch((e) => console.log(e.detail));
  //         await chatbotIds.forEach(async (chatbotId: string) => {
  //           await fetch
  //             .get(`chatbot/getChatbot/${chatbotId}`)
  //             .then((chatbotDetails) => {
  //               chatbotsListtemp.push(chatbotDetails);
  //               console.log(chatbotDetails);
  //             });
  //         });
  //         setChatbotsList([...chatbotsListtemp]);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   callApi();
  // }, []);

  React.useEffect(() => {
    const callApi = async () => {
      try {
        if (authState.isLoggedIn) {
          const chatbotIds = await fetch
            .get(`chatbot/getChatbots/${authState.user.id}`)
            .then((data) => {
              return data.chatbots;
            })
            .catch((e) => console.log(e.detail));

          // Remove duplicates using a Set
          const uniqueChatbotIds = Array.from(new Set(chatbotIds));

          // Use Promise.all to wait for all API calls to complete
          const chatbotDetailsPromises = uniqueChatbotIds.map((chatbotId: any) =>
            fetch.get(`chatbot/getChatbot/${chatbotId}`)
          );
          const chatbotDetailsResponses = await Promise.all(
            chatbotDetailsPromises
          );
          const chatbotsListtemp = chatbotDetailsResponses.map(
            (response) => response
          );

          setChatbotsList([...chatbotsListtemp]);
        }
      } catch (e) {
        console.log(e);
      }
    };
    callApi();
  }, []);

  console.log(chatbotsList);

  return (
    <>
      {/* Header */}
      <section className="py-[42px] md:py-[56px] px-[48px] text-white flex flex-row justify-center gap-6">
        <div className="text-brand-gunmetal font-work-sans font-bold text-[30px] md:text-[40px] leading-tight text-center md:text-center above">
          Your Chatbots
          <a
            title="Create New Chatbot"
            href={`${clientBaseUrl}chatbot`}
            className="bg-brand-sunglow hover:bg-brand-sandy-brown ml-2 px-[8px] md:px-[10px] text-[26px] md:text-[32px] rounded-full text-brand-gunmetal h-max w-max cursor-pointer"
          >
            +
          </a>
        </div>
      </section>

      {/* Chatbot Cards */}
      <section className="mb-[80px] px-[32px] flex flex-col justify-center items-center">
        <div className="flex flex-wrap justify-center items-center gap-5 max-w-screen-lg">
          {chatbotsList.map(
            (chatbot, index) =>
              index < numberOfChatbotsVisible && (
                <ChatbotCard key={chatbot.chatbot_id} {...chatbot} />
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
          {numberOfChatbotsVisible < chatbotsList.length && (
            <Button className="w-[40%] text-center" onClick={viewMoreChatbots}>
              View More
            </Button>
          )}
        </div>
      </section>
    </>
  );
};
