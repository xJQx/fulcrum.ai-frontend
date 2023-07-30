import { clientBaseUrl } from "config/client";
import useFetch from "hooks/useFetch";
import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "states/AuthContextProvider";

type SpinnerProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Spinner = ({ setIsModalOpen }: SpinnerProps) => {
  const authState = useContext(AuthContext);
  const fetch = useFetch();

  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false); //modal is originally closed, only opens after spinner has stopped spinning
  const [endpointURL, setEndpointURL] = useState("");

  const navigate = useNavigate();

  const navigateToChatPage = () => {
    navigate(`${clientBaseUrl}chat`);
  };

  // call the create_chatbot endpoint
  const createChatbot = async () => {
    const formData = new FormData();
    formData.append("userid", authState.user.id);

    try {
      const data = await fetch.post(
        `chatbot/createChatbot?userid=${authState.user.id}`,
        {},
        "form"
      );
      return data;
    } catch (error) {
      console.error("Error calling createChatbot API:", error);
      throw error;
    }
  };

  useEffect(() => {
    createChatbot()
      .then((response) => {
        const { endpointURL } = response;
        setEndpointURL(endpointURL);
        setIsLoading(false);
        setIsOpen(true);
      })
      .catch((error) => {
        console.error("Error creating chatbot:", error);
        // setIsLoading(false);
      });
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Spinner */}
      {isLoading && (
        <div className="text-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-11 h-11 md:w-16 md:h-16 mr-2 text-gray-200 animate-spin fill-brand-sunglow"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

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
              src="fulcrum.ai-frontend/assets/chatbot_logo.png"
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
    </div>
  );
};

export default Spinner;
