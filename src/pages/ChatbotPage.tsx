import Dropdown from "components/Dropdown";
import TextFile from "components/TextFile";
import FileUploader from "components/FileUploader";
import { TextLinearGradient } from "components/Typography/TextLinearGradient";
import React, { useState } from "react";
import { Viewer } from "@react-pdf-viewer/core"; // install this library
// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library
import ChatbotTraining from "components/Modal/ChatbotTraining";
import ChatbotCreated from "components/Modal/ChatbotCreated";

export const ChatbotPage = () => {
  // create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  //check if its pdf file
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");

  // view PDF
  const [viewPdf, setViewPdf] = useState(null);

  const fileType = ["application/pdf"];

  const handlePDFFile = (e: any) => {
    let selectedFile = e.target.files[0];
    // if the person has even selected a file
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e: any) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select valid PDF File.");
      }
    } else {
      console.log("Select your file.");
    }
  };

  // function to handle view PDF
  const handlePDFFileViewer = (e: any) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

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
        <div className="font-work-sans font-semibold text-[30px] flex w-auto mt-[50px] ml-[430px]">
          PDF File
        </div>
        <FileUploader />
        <div className="flex justify-center">
          <button
            type="button"
            style={{ transition: "all .3s cubic-bezier(0,0,.5,1)" }}
            className="w-[100px] mr-[475px] my-[10px] mb-[50px] items-center font-work-sans text-[#193338] bg-brand-sunglow font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 uploadBtn"
            onClick={(e) => {
              handlePDFFile(e);
              handlePDFFileViewer(e);
            }}
          >
            Upload
          </button>
          {pdfFileError && <div className="error-msg">{pdfFileError}</div>}
        </div>
        <br></br>
        <div className="flex flex-col">
          <div className="font-work-sans font-semibold text-[30px] flex w-auto mt-[50px] ml-[215px]">
            Page Preview
          </div>
          <div className="w-[1000px] h-[800px] bg-[#e4e4e4] flex justify-center items-center overflow-y-auto mx-auto px-4 my-[20px] pdf-container">
            {viewPdf && (
              <>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                  <Viewer
                    fileUrl={viewPdf}
                    plugins={[defaultLayoutPluginInstance]}
                  />
                </Worker>
              </>
            )}
          </div>
        </div>
      </div>

    
    </>
  );
};
