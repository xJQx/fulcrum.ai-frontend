import { serverBaseUrl } from "config/server";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "states/AuthContextProvider";
import { LocalStorageEnum } from "types/enums";

export const LoginGooglePage = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.isLoggedIn) {
      navigate("/");
    } else {
      fetch(serverBaseUrl + "auth/login/cookies", { credentials: "include" })
        .then((res) => res.json())
        .then((data) => {
          // has access_token -> Login user
          if (data["access_token"]) {
            localStorage.setItem(
              LocalStorageEnum.access_token,
              data["access_token"]
            );
            authContext.setIsLoggedIn(true);
            navigate("/dashboard");
          }
        });
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
          <a href={serverBaseUrl + "auth/login/google"}>
            <div className="flex flex-row justify-center items-center bg-[#4385F5] hover:bg-[#366dca] p-[2px] rounded">
              <img src="/assets/google-logo.png" className="w-10 rounded" />
              <span className="text-white font-semibold px-3">
                Login with Google
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
