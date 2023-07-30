import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ButtonLink } from "./ButtonLink";
import { ChatbotDisplaySchema } from "schemas/chatbot";
import { Button } from "./Button";
import useFetch from "hooks/useFetch";
import { clientBaseUrl } from "config/client";

export type ChatbotCardProps = ChatbotDisplaySchema;

export const ChatbotCard = (props: ChatbotCardProps) => {
  const { chatbotId, name, trainedData, parameters, usage } = props;

  const usageApiRequestPercentage =
    Math.round((usage.currentApiRequests / usage.maxApiRequests) * 100 * 100) /
    100;
  const usageTimeUsedPercentage =
    Math.round((usage.timeUsed / usage.totalTime) * 100 * 100) / 100;
  const percentageToColorClassName = (percentage: number) => {
    if (percentage < 50) return "text-green-500";
    if (percentage < 75) return "text-yellow-500";
    return "text-red-500";
  };

  // consuming the delete endpoint
  const fetchAPI = useFetch();

  const handleDelete = async () => {
    try {
      const response = await fetchAPI._delete(
        `${clientBaseUrl}chatbot/deleteChatbot/userId/${chatbotId}`
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

  return (
    <CardContainer>
      <div className="flex flex-col gap-4">
        {/* Chatbot Name */}
        <div className="flex flex-row gap-2 items-center font-semibold text-[24px]">
          {name}{" "}
          <a href={`${clientBaseUrl}chat/${chatbotId}`}>
            <FaArrowUpRightFromSquare className="w-[16px] cursor-pointer hover:text-brand-sandy-brown" />
          </a>
        </div>

        {/* Trained Data */}
        <div>
          Trained Data:{" "}
          <span className="text-blue-600 underline">{trainedData}</span>
        </div>

        {/* Tuned Parameters */}
        <section className="flex flex-col">
          <span>Tuned Parameters:</span>
          <div className="flex flex-col text-[#6B6B6B] text-[14px]">
            <span>{`> Personality: ${parameters.personality}`}</span>
            <span>{`> Language: ${parameters.language}`}</span>
          </div>
        </section>

        {/* Usage */}
        <section className="flex flex-col">
          <span>Usage:</span>
          <div className="flex flex-col text-[#6B6B6B] text-[14px]">
            <span>
              {"> API Requests: "}
              <span
                className={percentageToColorClassName(
                  usageApiRequestPercentage
                )}
              >
                {`${usage.currentApiRequests}/${usage.maxApiRequests} (${usageApiRequestPercentage}%)`}
              </span>
            </span>
            <span>
              {"> Time (minutes): "}
              <span
                className={percentageToColorClassName(usageTimeUsedPercentage)}
              >
                {`${usage.timeUsed}/${usage.totalTime} (${usageTimeUsedPercentage}%)`}
              </span>
            </span>
          </div>
        </section>

        {/* Button */}
        <section className="mt-3 flex gap-2 justify-end">
          <Button
            className="bg-white border border-brand-sunglow text-brand-sunglow hover:bg-brand-sunglow hover:text-brand-gunmetal"
            onClick={handleDelete}
          >
            Delete
          </Button>
          <ButtonLink href={`${clientBaseUrl}chat/${chatbotId}`}>
            Run
          </ButtonLink>
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
