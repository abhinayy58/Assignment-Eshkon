"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/features/store";
import Loader from "../utils/Loader";

const Wrapper = ({ children }: any) => {
  const state = useSelector((state: RootState) => state?.appReducer);
  return (
    <main
      className={`${
        state.theme === "light" ? "bg-mainLight" : "bg-[#070613]"
      } w-full h-full min-h-screen transition`}
    >
      {state.isLoading && <Loader />}
      <div className="">{children}</div>
    </main>
  );
};

export default Wrapper;
