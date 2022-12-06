import React, { useContext } from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/images/hero.webp";
import { ThemeContext } from "../../contexts/ThemeToggleContext";
import "./Hero.css";

function AltHero() {
  const { dark } = useContext(ThemeContext);

  return (
    // <section className="bg-[#243071] dark:bg-gray-900 h-screen overflow-x-hidden overflow-y-hidden">
    <section
      className={
        !dark
          ? "bg-[#243071] dark:bg-gray-900 h-screen overflow-x-hidden overflow-y-hidden"
          : "bg-gray-900 h-screen overflow-x-hidden overflow-y-hidden dark"
      }
    >
      <div className="flex items-center w-screen h-screen 2xl:mt-[-5rem]">
        <div className="grid max-w-screen-xl pl-20 pr-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-relaxed md:text-5xl xl:text-6xl  text-white">
              এবার সবাই শিখবো, সবাই জিতবো!
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 balo_da_custome">
              পড়াশোনায় জিতে যাওয়ার সবকিছু এখন তোমার হাতের মুঠোয়
            </p>

            <div className="mt-[40px] flex align-center gap-[24px]">
              <Link to={"/course/1"}>
                <div
                  className="hero__btn__first text-xs lg:text-sm hover:text-blue-600 hover:border-blue-600"
                  href=""
                >
                  কোর্স ঘুরে দেখো
                </div>
              </Link>
              <Link to={"/course/1"}>
                <div className="hero__btn__second mr-[10px] block align-middle hover:bg-indigo-600 opacity-80 hover:opacity-100 text-xs">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline"
                  >
                    <path
                      d="M2.25 2.79V21.21a.203.203 0 00.345.144l9.592-9.354-9.592-9.356a.203.203 0 00-.345.144zM16.21 8.157L4.181 1.53l-.007-.005c-.208-.112-.404.168-.235.331l9.428 9.015 2.841-2.715zM3.94 22.144c-.17.163.026.443.234.33l.008-.003 12.026-6.627-2.841-2.716-9.427 9.016zM21.063 10.829l-3.358-1.85-3.158 3.022 3.158 3.02 3.358-1.849c.914-.504.914-1.838 0-2.343z"
                      fill="#fff"
                    ></path>
                  </svg>
                  <span className="px-2.5">শিখতে শুরু করো</span>
                </div>
              </Link>
            </div>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src={hero} alt="mockup" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AltHero;
