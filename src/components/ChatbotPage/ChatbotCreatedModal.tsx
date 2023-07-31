import { clientBaseUrl } from "config/client";
import React from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

interface ChatbotCreatedModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ChatbotCreatedModal = (props: ChatbotCreatedModalProps) => {
  const { isOpen, setIsOpen } = props;

  const navigate = useNavigate();

  const navigateToChatPage = () => {
    navigate(`${clientBaseUrl}chat`);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Chatbot Created Modal"
        className="bg-white outline outline-brand-sunglow shadow-md w-[340px] h-[210px] md:w-[650px] md:h-[376px] rounded-lg block mx-auto mb-[50px] relative"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center pointer-events-none"
      >
        <div className="flex flex-col items-center justify-between p-[20px] md:p-[34px]">
          <div className="mb-2 md:mb-4">
            <img
              src="/fulcrum.ai-frontend/assets/chatbot_logo.png"
              alt="chatbot"
              className="h-[70px] w-[70px] md:h-[125px] md:w-[125px]"
            />
          </div>
          <div className="space-y-2 text-center ">
            <p className="text-black text-xs w-[280px] md:text-lg md:w-[400px]">
              Your chatbot has been created and is ready to chat.
            </p>
          </div>
        </div>

        {/* <!-- Bottom Section --> */}
        <div className="bg-brand-gunmetal w-full h-[60px] md:h-[100px] mx-auto rounded-b-lg flex justify-center items-center absolute bottom-0">
          <button
            type="button"
            className="text-white uppercase bg-brand-persian-green hover:bg-brand-sunglow font-work-sans font-medium rounded-full text-[10px] md:text-sm px-2.5 py-2 md:px-5 md:py-2.5 text-center md:mr-2 md:mb-2 pointer-events-auto"
            onClick={navigateToChatPage}
          >
            Start chat
          </button>
        </div>
      </Modal>
    </>
  );
};
