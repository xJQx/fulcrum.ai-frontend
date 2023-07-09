import React from "react";
import FileUploadIcon from "./FileUploadIcon";

const FileUploader = () => {
  return (
    <div className="flex justify-center">
    <div className="max-w-xl">
      <label className="flex justify-center w-[600px] h-[320px] px-4 transition bg-[#F4A261]/[0.33] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-[#F4A261] focus:outline-none my-[10px]">
        <span className="flex items-center space-x-2">
          <FileUploadIcon />
          <span className="font-medium text-gray-600">
            Drop files to Attach, or{" "}
            <span className="text-blue-600 underline">browse</span>
          </span>
        </span>
        <input type="file" name="file_upload" className="hidden" />
      </label>
    </div>
    </div>
  );
};

export default FileUploader;
