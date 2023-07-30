import FileUploader from "components/FileUploader";
import { TextLinearGradient } from "components/Typography/TextLinearGradient";
import React, { useState, useRef, useContext } from "react";
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
import useFetch from "hooks/useFetch";
import { AuthContext } from "states/AuthContextProvider";

export const ChatbotPage = () => {
  const fetch = useFetch();
  const { user } = useContext(AuthContext);

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

  // for re-uploading same file if necessary
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleRemove = () => {
    setSelectedFile(null);
    setPdfFile(null);
    setViewPdf(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the value of the file input element
    }
  };

  // for drag and drop functionality
  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    event.target.files = event.dataTransfer.files;
    handlePDFFile(event);
  };

  // const headers = {
  //   Authorization:
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVzdGhlcnRlb2dla3dhdEBnbWFpbC5jb20iLCJpZCI6IjY0YzRlYTdjZGVkYWYyMDk5ZjQ5Y2Y2MyIsIm5hbWUiOiJlc3RoZXIiLCJyZWdpc3RlcmVkIjp0cnVlLCJleHAiOjE2OTA2Mjc1ODR9.SpVSVzRlyoumdabfgUgrtkTwEzCBsUZ1TRVeCBo3IrU",
  // };

  const handlePDFFile = async (event: any) => {
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
        formData.append("email", user.email);
        formData.append("chatbotID", "chatbot1");

        fetch
          .post("chatbot/uploadTrainingData", formData, "form")
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
      setUploadClicked(true);
      setTimeout(() => {
        scrollToPreview();
      }, 0);
    } else {
      setViewPdf(null);
      setPdfFileError("Please select your file.");
    }
  };

  const pdfContainerRef = useRef<HTMLDivElement>(null);

  //function to auto-scroll to page preview
  const scrollToPreview = () => {
    if (pdfContainerRef.current) {
      pdfContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // hiding of the page preview until upload button is clicked
  const [uploadClicked, setUploadClicked] = useState(false);

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
        <div className="flex flex-col justify-center items-center mt-[60px] md:mt-[80px]">
          <div className="relative">
            <div className="font-work-sans font-semibold text-xl md:text-3xl md:mb-1 absolute top-[-25px] md:top-[-40px]">
              PDF File
            </div>
            <FileUploader
              handlePDFFile={handlePDFFile}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
              handleRemove={handleRemove}
              fileInputRef={fileInputRef}
            />
            {/* display selected file with option to remove and choose another */}
            {selectedFile && (
              <div className="mt-[10px] file-preview absolute">
                <div className="flex mb-[10px] p-[15px] rounded-md bg-[#F2F2F2] w-[300px] sm:w-[450px] md:w-[600px] relative file-preview__item">
                  <div className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] flex items-center pr-[15px]">
                    <FileIcon extension="pdf" {...defaultStyles.pdf} />
                  </div>
                  <div className="text-[14px] md:text-[16px] flex flex-col justify-center file-preview__item__info">
                    <p>{selectedFile.name}</p>
                    <p>{selectedFile.size}B</p>
                  </div>
                  <button
                    style={{
                      borderRadius: "50%",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                    className=" text-white text-center text-[14px] md:text-[16px] bg-red-500 w-5 h-5 md:w-6 md:h-6 absolute right-[15px] md:right-[20px] transform -translate-x-1/2 flex items-center justify-center file-preview__item__del"
                    onClick={handleRemove}
                  >
                    x
                  </button>
                </div>
              </div>
            )}
            <button
              type="button"
              style={{ transition: "all .3s cubic-bezier(0,0,.5,1)" }}
              className={` w-[70px] md:w-[100px] md:my-[10px] mb-[150px] text-center font-work-sans text-[#193338] bg-brand-sunglow font-medium rounded-lg text-xs md:text-sm px-3 py-2.5 relative uploadBtn ${
                selectedFile ? "top-[100px]" : ""
              }`}
              onClick={(e) => {
                // handlePDFFile(e);
                handlePDFFileViewer(e);
              }}
            >
              Upload
            </button>

            {pdfFileError && (
              <div className="error-msg text-red-500 text-[14px] md:text-[16px] absolute top-[100%] mt-[-145px] md:mt-0">
                {pdfFileError}
              </div>
            )}
          </div>
        </div>
        <br></br>

        <div className="flex flex-col items-center md:mt-[140px]">
          {uploadClicked && pdfFile && (
            <div className="relative">
              <div className="font-work-sans font-semibold text-xl md:text-3xl flex w-auto absolute top-[-20px] md:top-[-30px]">
                Page Preview
              </div>
              <div
                ref={pdfContainerRef}
                className="w-[330px] h-[600px] sm:w-[580px] sm:h-[600px] md:w-[990px] md:h-[800px] bg-[#e4e4e4] overflow-y-auto mx-auto px-4 my-[20px] pdf-container"
              >
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
                className="text-white bg-brand-persian-green focus:outline-none font-medium rounded-lg text-sm px-3 py-1.5 md:px-5 md:py-2.5 text-center w-[80px] md:w-[100px] mb-[50px] confirm_btn"
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
          )}
        </div>
      </div>
    </>
  );
};
