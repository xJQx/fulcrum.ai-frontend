import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

type SignupInputs = {
  username: string;
  password: string;
  confirmPassword: string;
};

export const SignupPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<SignupInputs>();
  const navigate = useNavigate();

  const loginHandler: SubmitHandler<SignupInputs> = async (formData) => {
    console.log(formData);
    toast.success("Signup Successfully!");

    // TODO: Link to backend
    // const response = await fetch("...", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });

    // if (response.ok) {
    //   toast.success("Signup Successfully!");
    // }

    navigate("/login");
  };

  return (
    <>
      {/* Header */}
      <section className="py-[42px] md:py-[56px] px-[48px] text-white flex flex-row justify-center gap-6">
        <div className="text-brand-gunmetal font-work-sans font-bold text-[30px] md:text-[40px] leading-tight text-center md:text-center above">
          Signup
          <div className=" text-brand-gunmetal font-source-sans-pro font-normal max-w-[425px] text-[15px] py-[15px] text-center md:text-center below">
            Already have an account? Login{" "}
            <span className="hover:text-brand-burnt-sienna">
              <a href="/login" className="underline cursor-pointer">
                here
              </a>
              .
            </span>
          </div>
        </div>
      </section>

      {/* Inputs */}
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="flex flex-col justify-center items-center"
      >
        <div className="max-w-[230px]">
          {/* Username */}
          <input
            id="username"
            placeholder="Username"
            type="text"
            className="mt-5 w-full rounded-lg px-5 py-3 border border-brand-gunmetal placeholder-gray-500"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <p className="mt-1 text-red-500">
              {errors.username.type === "required" && "This field is required."}
            </p>
          )}

          {/* Password */}
          <input
            id="password"
            placeholder="Password"
            type="password"
            className="mt-5 w-full rounded-lg px-5 py-3 border border-brand-gunmetal placeholder-gray-500"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="mt-1 text-red-500">
              {errors.password.type === "required" && "This field is required."}
            </p>
          )}

          {/* Confirm Password */}
          <input
            id="confirm-password"
            placeholder="Confirm Password"
            type="password"
            className="mt-5 w-full rounded-lg px-5 py-3 border border-brand-gunmetal placeholder-gray-500"
            {...register("confirmPassword", {
              required: true,
              validate: (val: string) => {
                if (watch("password") != val) {
                  return "Passwords do not match.";
                }
              },
            })}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-red-500">
              {errors.confirmPassword.type === "required" &&
                "This field is required."}
              {errors.confirmPassword.message}
            </p>
          )}

          {/* Submit Button */}
          <input
            type="submit"
            className="mt-5 w-full rounded-lg bg-brand-sunglow hover:bg-brand-sandy-brown text-black px-20 py-3 cursor-pointer"
          />
        </div>
      </form>
    </>
  );
};
