import { serverBaseUrl } from "config/server";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "states/AuthContextProvider";
import jwt from "jwt-decode";
import toast from "react-hot-toast";
import { clientBaseUrl } from "config/client";
import { getGoogleAuthResult, loginWithGoogle } from "db/firebase";
import useFetch from "hooks/useFetch";
import { JwtUserSchema } from "schemas/jwt";

export const LoginGooglePage = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const fetch = useFetch();

  // Firebase Google OAuth
  const handleLogIn = async () => {
    await loginWithGoogle();
  };

  /**
   * Parse Firebase Google OAuth Login Results.
   * Includes registering users in the backend and setting the authorization headers and global Auth State
   */
  const parseLogInResult = async () => {
    const response = await getGoogleAuthResult();
    if (!response) {
      return;
    } else {
      console.log(response);
      const { token, user } = response;
      console.log("token:", token);
      console.log("user:", user);

      // Register User if User does not exist in the server.
      const { userExists } = await fetch.get(
        `/user/checkExist/userid/${user.id}` // TODO: this should be firebase user_id
      );
      if (!userExists) {
        const formData = new FormData();
        formData.append("userid", user.id); // TODO: this should be firebase user_id
        formData.append("name", user.name); // TODO: this should be firebase name
        formData.append("email", user.email); // TODO: this should be firebase email
        const res = await fetch.post("/user/register", formData, "form");
        if (res.user) {
          // user created succesfully
          toast.success("User has been successfully registered");
        } else {
          console.log(res.error);
          toast.error("Failed to register user");
          return;
        }
      }

      // Update State
      const loggedInUser: JwtUserSchema = {
        id: user.id, // TODO: this should be firebase user_id
        email: user.email, // TODO: this should be firebase email
        name: user.name, // TODO: this should be firebase name
        registered: true,
      };
      authContext.setAccessToken(token);
      authContext.setUser(loggedInUser);
      authContext.setIsLoggedIn(true);

      toast.success("Log in successfully.");
      navigate(`${clientBaseUrl}dashboard`);
    }
  };

  useEffect(() => {
    if (authContext.isLoggedIn) {
      toast.success("Logged In Successfully. Welcome " + authContext.user.name);
      navigate(clientBaseUrl);
    } else {
      // Log in Results will only be parsed when user is redirected to this page back from the Google OAuth Log in
      parseLogInResult();
    }
  }, []);

  return (
    <>
      {/* Header */}
      <section className="py-[42px] md:py-[56px] px-[48px] text-white flex flex-row justify-center gap-6">
        <div className="text-brand-gunmetal font-work-sans font-bold text-[30px] md:text-[40px] leading-tight text-center md:text-center above">
          Login
        </div>
      </section>

      {/* Login Methods */}
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-[230px]">
          {/*
            Login with google buttons
            Note: Must use <a> for redirect purposes
          */}
          <div onClick={handleLogIn}>
            <div className="flex flex-row justify-center items-center bg-[#4385F5] hover:bg-[#366dca] p-[2px] rounded">
              <img
                src="/fulcrum.ai-frontend/assets/google-logo.png"
                className="w-10 rounded"
              />
              <span className="text-white font-semibold px-3">
                Login with Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
