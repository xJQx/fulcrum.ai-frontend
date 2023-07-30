import { clientBaseUrl } from "config/client";
import React, { useContext, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { AuthContext } from "states/AuthContextProvider";

type LoginInputs = {
  username: string;
  password: string;
};

export const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginInputs>();
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.isLoggedIn) {
      navigate(clientBaseUrl);
    }
  }, []);

  const loginHandler: SubmitHandler<LoginInputs> = async (formData) => {
    console.log(formData);
    toast.success("Login Successfully!");

    // TODO: Link to backend
    // const response = await fetch("...", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });

    // if (response.ok) {
    //   toast.success("Login Successfully!");
    // }

    authContext.setIsLoggedIn(true);
    navigate(`${clientBaseUrl}dashboard`);
  };

  return (
    <>
      {/* Header */}
      <section className="py-[42px] md:py-[56px] px-[48px] text-white flex flex-row justify-center gap-6">
        <div className="text-brand-gunmetal font-work-sans font-bold text-[30px] md:text-[40px] leading-tight text-center md:text-center above">
          Login
          <div className=" text-brand-gunmetal font-source-sans-pro font-normal max-w-[425px] text-[15px] py-[15px] text-center md:text-center below">
            Don&apos;t have an account? Sign up{" "}
            <span className="hover:text-brand-burnt-sienna">
              <a
                href={`${clientBaseUrl}signup`}
                className="underline cursor-pointer"
              >
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
