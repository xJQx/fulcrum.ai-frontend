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
import { FileIcon, defaultStyles } from "react-file-icon";

export const ChatbotPage = () => {
  // create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  //check if its pdf file
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");

  // view PDF
  const [viewPdf, setViewPdf] = useState(null);

  // for displaying the selected pdf name and size below with option to delete
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fileType = ["application/pdf"];

  const [isModalOpen, setIsModalOpen] = useState(false);

  // for drag and drop functionality
  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    event.target.files = event.dataTransfer.files;
    handlePDFFile(event);
  };
  const handlePDFFile = (event: any) => {
    event.preventDefault();
    let selectedFile = event.target.files && event.target.files[0];
    // if the person has even selected a file
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (event: any) => {
          setPdfFile(event.target.result);
          setPdfFileError("");
        };

        // Call the API to upload the training data
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append(
          "req",
          JSON.stringify({
            username: "esther",
            chatbotID: "chatbot1",
          })
        );

        fetch("http://127.0.0.1:8000/api/chatbot/uploadTrainingData", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("File uploaded successfully:", data.filename);
          })
          .catch((error) => {
            console.error("Error uploading file:", error);
          });
        setSelectedFile(selectedFile);
      } else {
        setPdfFile(null);
        setPdfFileError("Please select valid PDF File.");
      }
    } else {
      setPdfFileError("Please select your file.");
    }
  };

  // function to handle view PDF
  const handlePDFFileViewer = (e: any) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
      setPdfFileError("Please select your file.");
    }
  };
  return (
    <>
      <div>
        <div className="font-work-sans font-semibold text-[25px] px-4 md:text-[45px] md:px-0 text-center pt-[40px]">
          Say Hello To{" "}
          <TextLinearGradient brand> Quick, Accurate </TextLinearGradient>{" "}
          support
        </div>
        <div className="font-work-sans font-medium text-[20px] px-4 md:text-[35px] text-center pt-[10px]">
          Make Your Own Chatbot Here
        </div>
      </div>

      {/* PDF file drag and drop here */}

      <div>
        <div className="flex flex-col justify-center items-center mt-[30px] md:mt-[50px]">
          <div className="font-work-sans font-semibold text-xl md:text-3xl mb-1 mr-[216px] md:mr-[460px]">
            PDF File
          </div>
          <FileUploader
            handlePDFFile={handlePDFFile}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
          />
          {/* display selected file with option to remove and choose another */}
          {selectedFile && (
            <div className="mt-[10px] ml-[25px] file-preview flex">
              <div className="flex mb-[10px] p-[15px] rounded-md bg-[#F2F2F2] md:w-[600px] relative file-preview__item">
                <div className="w-[50px] h-[50px] flex items-center pr-[15px]">
                  <FileIcon extension="pdf" {...defaultStyles.pdf} />
                </div>
                <div className="file-preview__item__info">
                  <p>{selectedFile.name}</p>
                  <p>{selectedFile.size}</p>
                </div>
                <button
                  style={{ borderRadius: "50%" }}
                  className=" text-white text-center bg-red-500 w-6 h-6 absolute right-[20px] top-1/2 transform -translate-y-1/2 flex items-center justify-center file-preview__item__del"
                  onClick={() => {
                    setSelectedFile(null);
                    setPdfFile(null);
                  }}
                >
                  x
                </button>
              </div>
            </div>
          )}
          <button
            type="button"
            style={{ transition: "all .3s cubic-bezier(0,0,.5,1)" }}
            className=" w-[80px] md:w-[100px] mr-[216px] md:mr-[475px] my-[10px] mb-[50px] text-center font-work-sans text-[#193338] bg-brand-sunglow font-medium rounded-lg text-sm px-3 py-2.5 uploadBtn"
            onClick={(e) => {
              // handlePDFFile(e);
              handlePDFFileViewer(e);
            }}
          >
            Upload
          </button>

          {pdfFileError && (
            <div className="error-msg text-red-500 text-[16px]">
              {pdfFileError}
            </div>
          )}
        </div>

        <br></br>
        <div className="flex flex-col">
          <div className="font-work-sans font-semibold text-[30px] flex w-auto mt-[50px] ml-[215px]">
            Page Preview
          </div>
          <div className="w-[1000px] h-[800px] bg-[#e4e4e4] flex justify-center items-center overflow-y-auto mx-auto px-4 my-[20px] pdf-container">
            {viewPdf && (
              <>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.8.162/build/pdf.worker.min.js">
                  <Viewer
                    fileUrl={viewPdf}
                    plugins={[defaultLayoutPluginInstance]}
                  />
                </Worker>
              </>
            )}
          </div>
          <button
            type="button"
            style={{ transition: "all .3s cubic-bezier(0,0,.5,1)" }}
            className="text-white bg-brand-persian-green focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[80px] md:w-[100px] ml-[215px] mb-[50px] confirm_btn"
            onClick={() => setIsModalOpen(true)}
          >
            Confirm
          </button>
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <ChatbotTraining setIsModalOpen={setIsModalOpen} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
