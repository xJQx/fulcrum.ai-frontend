import React, { useState } from "react";

const TextFile = () => {
  const [textFileList, setTextFileList] = useState([{ file: "" }]);

  return (
    <div className="font-work-sans font-semibold text-[40px] flex w-auto mt-[150px] ml-[350px] ">
      Text File
      <div></div>
    </div>
  );
};

export default TextFile;
