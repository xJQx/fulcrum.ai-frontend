import Dropdown from "components/Dropdown";
import TextFile from "components/TextFile";
import FileUploader from "components/FileUploader";
import { TextLinearGradient } from "components/Typography/TextLinearGradient";
import React from "react";

export const ChatbotPage = () => {
  return (
    <>
      <div>
        <div className="font-work-sans font-semibold text-[45px] text-center pt-[40px]">
          Say Hello To{" "}
          <TextLinearGradient brand> Quick, Accurate </TextLinearGradient>{" "}
          support
        </div>
        <div className="font-work-sans font-medium text-[35px] text-center">
          Make Your Own Chatbot Here
        </div>
      </div>
      {/* <div className="relative">
        <div className="relative w-5/6 mx-auto left-0 right-0 ">
          <Dropdown />
        </div>
      </div>
      <div className="relative">
        <div className="absolute w-5/6 mx-auto left-0 z-99">
          <TextFile />
        </div>
      </div> */}

      {/* PDF file drag and drop here */}
      <div className="flex flex-col justify-center">
        <div className="font-work-sans font-semibold text-[30px] flex w-auto mt-[50px] ml-[420px]">
          PDF File
        </div>
        <FileUploader />
        <div className="flex justify-center">
          <button
            type="button"
            style={{ transition: "all .3s cubic-bezier(0,0,.5,1)" }}
            className="w-[100px] mr-[475px] my-[10px] mb-[50px] items-center font-work-sans text-[#193338] bg-brand-sunglow font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 uploadBtn"
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
};
