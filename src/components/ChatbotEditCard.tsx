import React, { useState } from "react";
import { ButtonLink } from "./ButtonLink";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ChatbotDisplaySchema } from "schemas/chatbot";
import FileUploader from "./FileUploader";
import { Button } from "./Button";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

type ChatbotEditCardProps = ChatbotDisplaySchema;

export const ChatbotEditCard = (props: ChatbotEditCardProps) => {
  const { chatbotId, name, trainedData, parameters, createdAt, updatedAt } =
    props;
  const navigate = useNavigate();

  const [personality, setPersonality] = useState(parameters.personality);
  const [language, setLanguage] = useState(parameters.language);

  const onSaveHandler = () => {
    // TODO: save chatbot data
    console.log(personality); // updated personality
    console.log(language); // updated language
    // updated file
    toast.success("(TODO) Chatbot saved.");
    navigate("/dashboard");
  };

  const onDeleteHandler = () => {
    // TODO: delete chatbot
    toast("Feature 'Delete Chatbot' is coming soon.");
  };

  return (
    <CardContainer>
      <div className="flex flex-col gap-4">
        <section className="flex flex-col gap-2">
          {/* Chatbot Name */}
          <div className="flex flex-row gap-2 items-center font-semibold text-[24px]">
            {name} (#{chatbotId}){" "}
            <a href={`/chat/${chatbotId}`}>
              <FaArrowUpRightFromSquare className="w-[16px] cursor-pointer hover:text-brand-sandy-brown" />
            </a>
          </div>

          {/* Time */}
          <section className="text-[14px]">
            <div>Created At: {createdAt}</div>
            <div>Updated At {updatedAt}</div>
          </section>
        </section>

        <section className="flex flex-col gap-12">
          {/* Trained Data (TODO: enable file upload) */}
          <section className="flex flex-col p-4">
            <span className="self-center underline mb-4">Training Data</span>
            <div>
              <span>
                Data uploaded:{" "}
                <span className="text-blue-600">{trainedData}</span>
              </span>
              <div className="flex flex-row justify-center items-center gap-1">
                <div>
                  <FileUploader />
                </div>
              </div>
            </div>
          </section>

          {/* Tuned Parameters */}
          <section className="flex flex-col p-4">
            <span className="self-center underline mb-4">Tuned Parameters</span>
            <div className="flex flex-col gap-4">
              {/* Personality */}
              <div className="flex flex-col gap-1">
                <label htmlFor="personality">Personality: </label>
                <input
                  id="personality"
                  type="text"
                  defaultValue={personality}
                  onChange={(e) => setPersonality(e.target.value)}
                  className="text-[12px] border border-black rounded-xl px-3 py-1 hover:scale-105 focus:scale-105 transition-all"
                />
              </div>

              {/* Language */}
              <div className="flex flex-col gap-1">
                <label htmlFor="language">Language: </label>
                <input
                  id="language"
                  type="text"
                  defaultValue={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="text-[12px] border border-black rounded-xl px-3 py-1 hover:scale-105 focus:scale-105 transition-all"
                />
              </div>
            </div>
          </section>
        </section>

        {/* Button */}
        <section className="mt-3 flex gap-2 justify-end">
          <ButtonLink href="dashboard" variant="ghost">
            Cancel
          </ButtonLink>
          <Button
            onClick={onDeleteHandler}
            variant="ghost"
            className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
          >
            Delete
          </Button>
          <Button onClick={onSaveHandler}>Save</Button>
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
