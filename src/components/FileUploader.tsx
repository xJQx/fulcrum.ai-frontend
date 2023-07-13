import React, { useState, ChangeEvent } from "react";
import FileUploadIcon from "./FileUploadIcon";
import { FileIcon, defaultStyles } from "react-file-icon";

const FileUploader = (props: any) => {
  const { handlePDFFile } = props;
  return (
    <div className="flex justify-center">
    <div className="max-w-xl">
      <label className="flex justify-center w-[300px] h-[220px] md:w-[600px] md:h-[320px] px-4 transition bg-[#F4A261]/[0.33] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-[#F4A261] focus:outline-none my-[10px]">
        <span className="flex items-center space-x-2">
          <FileUploadIcon className=" h-[15px] w-[15px] md:h-[20px] md:w-[20px] "/>
          <span className="font-medium text-gray-600 text-[15px] md:text-[20px]">
            Drop files to Attach, or{" "}
            <span className="text-blue-600 text-[15px] md:text-[20px] underline">browse</span>
          </span>
        </span>
        <input type="file" name="file_upload" className="hidden" onChange={handlePDFFile}/>
      </label>

    </div>
    </div>
  );
};

export default FileUploader;
