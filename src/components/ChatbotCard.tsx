import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ButtonLink } from "./ButtonLink";
import { ChatbotSchema } from "schemas/chatbot";

export type ChatbotCardProps = ChatbotSchema;

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

  return (
    <CardContainer>
      <div className="flex flex-col gap-4">
        {/* Chatbot Name */}
        <div className="flex flex-row gap-2 items-center font-semibold text-[24px]">
          {name}{" "}
          <a href={`chat/${chatbotId}`}>
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
          <ButtonLink href={`chatbot/edit/${chatbotId}`} variant="ghost">
            Edit
          </ButtonLink>
          <ButtonLink href={`chat/${chatbotId}`}>Run</ButtonLink>
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
