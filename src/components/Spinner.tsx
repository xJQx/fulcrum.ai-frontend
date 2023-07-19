import React, { useEffect, useState } from "react";
import Modal from "react-modal";

type SpinnerProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Spinner = ({ setIsModalOpen }: SpinnerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false); //modal is originally closed, only opens after spinner has stopped spinning

  useEffect(() => {
    // when timeout happens/30 milisecs is up, stop the spinner and open the modal
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      setIsOpen(true);
      
    }, 5000);
    // cleanup function
    return () => {
      clearTimeout(timeoutId);
    };
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
              className="inline w-16 h-16 mr-2 text-gray-200 animate-spin fill-brand-sunglow"
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
        className="bg-white outline outline-brand-sunglow shadow-md w-[650px] h-[376px] rounded-lg block mx-auto mb-[50px] relative"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center pointer-events-none"
      >
        <div className="flex flex-col items-center justify-between p-[34px]">
          <div className="mb-4">
            <img
              src="assets/chatbot_logo.png"
              alt="chatbot"
              height="125"
              width="125"
            />
          </div>
          <div className="space-y-2 text-center ">
            <p className="text-lg text-black w-[400px]">
              Your chatbot has been created and is ready to chat.
            </p>
          </div>
        </div>

        {/* <!-- Bottom Section --> */}
        {/* <div className="bg-brand-gunmetal h-[100px] mt-6 mx-auto rounded flex flex-grow"></div> */}
        <div className="bg-brand-gunmetal w-full h-[100px] mx-auto rounded-b-lg flex justify-center items-center absolute bottom-0">
          <button
            type="button"
            className="text-white uppercase bg-brand-persian-green hover:bg-brand-sunglow font-work-sans font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 pointer-events-auto"
          >
            Start chat
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Spinner;
