import React from "react";

/* chatbot created modal */

const ChatbotCreated = () => {
  return (
    <div className="bg-white border border-gray-200 w-[650px] h-[376px] rounded-lg shadow-lg block mx-auto mb-[50px] ">
      {/* <!-- Top Section --> */}
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
      <div className="bg-brand-gunmetal h-[100px] mx-auto rounded-bl-lg rounded-br-lg flex justify-center items-center">
        <button
          type="button"
          className="text-white uppercase bg-brand-persian-green hover:bg-brand-sunglow font-work-sans font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
        >
          Start chat
        </button>
      </div>
    </div>
  );
};

export default ChatbotCreated;
