"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/features/store";
import Image from "next/image";
import { toggleTheme } from "../redux/features/appSlice";
import ContentfulImage from "./ContentfulImage";

export function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state?.appReducer?.theme);
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <header>
      <nav
        className={`relative flex flex-wrap items-center justify-between px-2 py-3 bg-primary`}
      >
        <div className="container px-4 mx-auto flex  items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className={`text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase  text-white } `}
              href="/"
            >
              CMS
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={"lg:flex flex-grow items-center"}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item" onClick={handleToggleTheme}>
                <ContentfulImage
                  src={theme === "light" ? "/light.svg" : "/dark.svg"}
                  alt="Vercel Logo"
                  className="cursor-pointer w-[30px] h-auto"
                  width={30}
                  height={24}
                  priority
                  title={
                    theme === "light"
                      ? "Click here to change to dark mode"
                      : "Click here to change to light mode "
                  }
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
