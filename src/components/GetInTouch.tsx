import React from "react";
import { GetInTouchButtonLink } from "./GetInTouchButtonLink";
import { useState } from "react";
import Modal from "./Modal/Modal";

const GetInTouch = () => {
  const [ModalVisible, setModalVisible] = useState<boolean>(false);

  const toggleModal = () => setModalVisible(!ModalVisible);

  return (
    <div className="bg-brand-sandy-brown px-8 flex md:flex-row md:justify-between p-[20px] rounded-xl flex-col items-start">
      <div className="text md:items-start">
        <h2 className="font-source-sans-pro font-semibold">
          Still have questions?
        </h2>
        <p className="font-source-sans-pro">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
      </div>
      <div
        className="getInTouch cursor-pointer mt-[8px] mb-0"
        onClick={toggleModal}
      >
        <GetInTouchButtonLink>Get in touch</GetInTouchButtonLink>
        <Modal isOpen={ModalVisible} onPostQns={toggleModal}></Modal>
      </div>
    </div>
  );
};

export default GetInTouch;
