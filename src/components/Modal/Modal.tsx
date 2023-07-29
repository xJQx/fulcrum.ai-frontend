import React from "react";
import "./Modal.styles.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

interface ModalProps {
  isOpen: boolean;
  onPostQns: () => void;
}

// Get in touch Modal
export const Modal: React.FC<ModalProps> = ({ isOpen, onPostQns }) => {
  const inputStyles =
    " mt-3 md:mt-5 w-full rounded-lg bg-white px-2 py-1 md:px-5 md:py-3 placeholder-grey";
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const navigate = useNavigate();
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };

  const endpointURL = "http://127.0.0.1:8000/faq";

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    onPostQns();
    try {
      // always need to use FormData for multi-part form 
      const _data = new FormData();

      _data.append("name", data.name);
      _data.append("email", data.email);
      _data.append("message", data.message);

      const response = await fetch(endpointURL,{
        method: 'POST',
        body: _data,
      }
       );
      const jsonData = await response.json();

      console.log(jsonData);

      if (!response.ok) {
        throw new Error("Failed to submit the form.");
      }

      console.log(response.ok);
      toast.success("Form is submitted sucessfully!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while submitting the form.");
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
          className=" rounded-xl justify-center items-center bg-[#F5F5F5] p-8 w-[300px] h-[400px] md:p-20 md:w-[600px] md:h-[600px] modal__box center_box"
          onClick={stopPropagation}
        >
          <div className="font-work-sans font-bold text-[20px] md:text-[32px]">
            We&apos;d love to help.
          </div>
          <p className="font-source-sans-pro text-[14px] md:text-[16px]">
            Reach out and we&apos;ll get in touch within 24 hours.{" "}
          </p>
          {/* Form input fields and Post a Qns Button */}
          <div className="justify-between gap-8 md:flex">
            <form onSubmit={handleSubmit(onSubmit)}>
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
              <div>
                <button
                  id="button"
                  type="submit"
                  className="mt-3 md:mt-5 rounded-lg bg-brand-sunglow text-black text-[14px] md:text-[16px] px-10 py-1 md:px-20 md:py-3"
                >
                  Post a Question
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
