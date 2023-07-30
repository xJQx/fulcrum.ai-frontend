import React, { useContext } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ButtonLink } from "./ButtonLink";
import { ChatbotSchema } from "schemas/chatbot";
import { Button } from "./Button";
import useFetch from "hooks/useFetch";
import { clientBaseUrl } from "config/client";
import { Toast, toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { ChatbotContext } from "states/ChatbotContextProvider";

export type ChatbotCardProps = ChatbotSchema;

export const ChatbotCard = (props: ChatbotCardProps) => {
  const {
    chatbot_id,
    dataFileName,
    personality,
    created_date,
    updated_date,
    deployedURL,
  } = props;

  const fetch = useFetch();
  const navigate = useNavigate();
  const chatbotState = useContext(ChatbotContext);

  const handleDelete = async () => {
    try {
      const response = await fetch._delete(
        `chatbot/deleteChatbot/userId/${chatbot_id}`
      );

      // Handle the response here
      if (response.msg === "Success") {
        // Success
        console.log("Chatbot deleted successfully");
      } else {
        // Error handling
        console.error("Error while deleting chatbot:", response.error);
      }
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.error("Error during API call:", error);
    }
  };

  const handleRunChatbot = () => {
    chatbotState.setEndpointURL(deployedURL);
    navigate(`${clientBaseUrl}chat`);
  };

  const ConfirmDeleteToast = ({ t }: { t: Toast }) => {
    return (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-lg w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                ❗ &nbsp;Are you sure you want to delete this chatbot?
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200 flex-row justify-center items-center px-4 gap-2">
          <button
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete();
              toast("❗ Deleting...");
            }}
            className="w-full border border-transparent rounded-none rounded-r-lg flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Yes
          </button>
          <span>/</span>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            No
          </button>
        </div>
      </div>
    );
  };

  return (
    <CardContainer>
      <div className="flex flex-col gap-4">
        {/* Chatbot Name */}
        <div className="flex flex-row gap-2 items-center font-semibold text-[24px]">
          # {chatbot_id}{" "}
          <a href={`${clientBaseUrl}chat/${chatbot_id}`}>
            <FaArrowUpRightFromSquare className="w-[16px] cursor-pointer hover:text-brand-sandy-brown" />
          </a>
        </div>

        <section className="flex flex-col">
          {/* Trained Data */}
          <div>
            <span className="font-semibold">Data File Name: </span>
            <span className="text-blue-600 underline">{dataFileName}</span>
          </div>

          {/* Tuned Parameters */}
          <div>
            <span className="font-semibold">Personality: </span>
            <span className="">{personality}</span>
          </div>
        </section>

        {/* Dates */}
        <section className="text-[12px]">
          <div>
            Deployed At: <span className="underline">{deployedURL}</span>
          </div>
          <div>Created At: {created_date}</div>
          <div>Updated At: {updated_date}</div>
        </section>

        {/* Button */}
        <section className="mt-3 flex gap-2 justify-end">
          <Button
            className="bg-white border border-red-400 text-red-500 hover:bg-red-400 hover:text-white"
            onClick={() => {
              toast.custom((t) => <ConfirmDeleteToast t={t} />);
            }}
          >
            Delete
          </Button>
          <Button
            onClick={() => {
              handleRunChatbot();
            }}
          >
            Run
          </Button>
        </section>
      </div>
    </CardContainer>
  );
};

interface CardContainerProps {
  children: React.ReactNode;
}

const CardContainer = (props: CardContainerProps) => {
  const { children } = props;

  return (
    <div className="shadow-md hover:shadow-lg px-[22px] py-[16px] min-w-[350px]">
      {children}
    </div>
  );
};
