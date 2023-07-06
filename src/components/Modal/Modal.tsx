import React, { useRef } from "react";
import "./Modal.styles.css";
import { useForm } from "react-hook-form";
import { toBeRequired } from "@testing-library/jest-dom/matchers";

interface ModalProps {
  isOpen: boolean;
  onPostQns: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onPostQns }) => {
  const inputStyles =
    " mt-5 w-full rounded-lg bg-white px-5 py-3 placeholder-grey";
  const {
    register,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (isValid) {
      // Call the onPostQns function if the form is valid
      onPostQns();
      reset(); // Reset the form fields
    } else {
      e.preventDefault();
    }
  };

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return isOpen ? (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "1",
      }}
      className="modal"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, .8)",
          cursor: "pointer",
        }}
        className="modal__overlay"
      >
        <div
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: "12px",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="p-20 modal__box center_box"
          onClick={stopPropagation}
        >
          <div className="font-work-sans font-bold text-[32px]">
            We&apos;d love to help.
          </div>
          <p className="font-source-sans-pro ">
            Reach out and we&apos;ll get in touch within 24 hours.{" "}
          </p>
          {/* Form input fields and Post a Qns Button */}
          <div className="justify-between gap-8 md:flex">
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/bb76d2a06e034b25087a189ce33779ed"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                id="name"
                autoComplete="on"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-red-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters."}
                </p>
              )}
              <input
                className={inputStyles}
                id="email"
                type="text"
                autoComplete="on"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-red-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              <textarea
                className={inputStyles}
                id="message"
                autoComplete="on"
                rows={4}
                cols={50}
                placeholder="Leave a message..."
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-red-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters."}
                </p>
              )}
              <button
                id="button"
                type="submit"
                className="mt-5 rounded-lg bg-brand-sunglow text-black px-20 py-3"
                // onClick={() => {
                //   onPostQns();
                // }}
              >
                Post a Question
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
