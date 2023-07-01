import React from "react";
import { GetInTouchButtonLink } from "./GetInTouchButtonLink";
import { useState } from "react";
import Modal from "./Modal/Modal";

const GetInTouch = () => {
  const [ModalVisible, setModalVisible] = useState<boolean>(false);

  const toggleModal = ()=> setModalVisible(!ModalVisible);

  return (
    <div
      style={{
        borderRadius: "16px",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      className="bg-brand-sandy-brown px-8"
    >
      <div className="text">
        <h2 className="font-source-sans-pro font-semibold">
          Still have questions?
        </h2>
        <p className="font-source-sans-pro">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
      </div>
      <div className="getInTouch cursor-pointer" onClick={toggleModal}>
        <GetInTouchButtonLink >Get in touch</GetInTouchButtonLink>
        <Modal isOpen={ModalVisible} onPostQns={toggleModal}></Modal>
      </div>
    </div>
  );
};

export default GetInTouch;
