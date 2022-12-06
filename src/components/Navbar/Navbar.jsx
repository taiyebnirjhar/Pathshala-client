import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/images/logo.png";
import avatar from "../../assets/images/avatar.webp";
import { AuthContext } from "../../contexts/FirebaseContext";
import { ThemeContext } from "../../contexts/ThemeToggleContext";
import "../../styles/index.css";
import Drawer from "../childComponents/Drawer";
import "./Navbar.css";

function Navbar() {
  // const [navToggler, setNavToggler] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [showName, setShowName] = useState(false);

  /********************************/
  const { user, logOut, navToggler, setNavToggler } = useContext(AuthContext);
  const { dark, setDark } = useContext(ThemeContext);
  /********************************/

  useEffect(() => {}, [navToggler]);
  const navToggle = () => {
    return setNavToggler((prev) => !prev);
  };

  return (
    <>
      {/* <nav className="bg-white border-gray-200 mt-2 sm:mt-0 px-2 py-4 sm:px-6 sm:py-4 md:px-6 md:py-4 rounded  primary_font_light block"> */}
      <nav
        className={
          !dark
            ? "bg-white border-gray-200 mt-2 sm:mt-0 px-2 py-4 sm:px-6 sm:py-4 md:px-6 md:py-4 rounded  primary_font_light block"
            : "bg-gray-200 border-gray-200 mt-2 sm:mt-0 px-2 py-4 sm:px-6 sm:py-4 md:px-6 md:py-4 rounded  primary_font_light block"
        }
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto max_w_custome">
          {/* logo start */}

          <Link to="/">
            <div className="flex items-center">
              <img
                src={logo}
                className="ml-3 mr-3 h-10 sm:h-10 md:h-10 xl:h-12"
                alt="Pathshala Logo"
              />
            </div>
          </Link>
          {/* logo end */}

          {/* button and user start */}
          <div className="flex items-center md:order-2">
            <div
              className="px-4 py-2 xl:text-xl lg:text-lg text-base brand_primary__color opacity-40"
              onClick={() => {
                setDark((prev) => !prev);
              }}
            >
              {dark ? (
                <i className="fa-solid fa-toggle-on"></i>
              ) : (
                <i className="fa-solid fa-toggle-off"></i>
              )}
            </div>
            <div className="">
              {user && user.uid ? (
                <div className="relative mx-4">
                  <div className="flex flex-col ">
                    <button
                      type="button"
                      className="flex rounded-full  text-sm focus:outline-none "
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={() => {
                        setDropDown(!dropDown);
                      }}
                    >
                      <span className="sr-only">Open user menu</span>
                      <div
                        className={
                          !showName ? "hidden  my-auto mx-4" : "my-auto mx-4"
                        }
                      >
                        <p className="">{user.displayName || "anonymus"}</p>
                      </div>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user.photoURL || avatar}
                        alt=""
                        onMouseEnter={() => setShowName(true)}
                        onMouseLeave={() => setShowName(false)}
                      />
                    </button>
                  </div>

                  <div
                    className={
                      !dropDown
                        ? "hidden"
                        : "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-[#2e4797]  py-1 shadow-lg  focus:outline-none transition ease-out duration-100"
                    }
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-0"
                    >
                      {user.displayName || "anonymus"}
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-1"
                    >
                      {user.email || "anonymus"}
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-2"
                      onClick={logOut}
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              ) : (
                <Link to="/login">
                  <div className="hidden xl:inline ">
                    <div className="block mx-4 py-3.5 px-8 my-2.5 md:text-lg font-semibold text-center text-white bg-indigo-600 custom_radius  hover:bg-pink-600 transition-all duration-300 ease-in-out">
                      লগ ইন / সাইন আপ
                    </div>
                  </div>
                </Link>
              )}
            </div>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 "
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={navToggle}
            >
              <span className="sr-only">Open main menu</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-8 md:h-8 md:w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {/* {navToggler && <Drawer navToggle={navToggle} />} */}
          </div>
          {/* button and user ends */}

          {/* ul 2xl */}
          <div
            className="hidden justify-between items-center w-full xl:flex md:justify-between md:w-auto md:order-1 "
            id="mobile-menu-2"
          >
            <ul className="flex flex-col p-4 mt-8 bg-gray-50 rounded-lg border border-gray-100 md:flex-row  md:space-x-10 md:mt-0 md:text-xl md:font-semibold  md:border-0 md:bg-white subpixel-antialiased opacity-95 cursor-pointer">
              <li>
                <Link to="/home">
                  <div
                    className="block py-2 pr-4 pl-3  bg-blue-700 rounded md:bg-transparent text-pink-600   md:p-0 "
                    aria-current="page"
                  >
                    হোম
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/course/1">
                  <div className="block py-2 pr-4 pl-3 brand_primary__color rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600 md:p-0 ">
                    কোর্স
                  </div>
                </Link>
              </li>

              <li>
                <Link to="/blog">
                  <div className="block py-2 pr-4 pl-3 brand_primary__color rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600 md:p-0 ">
                    ব্লগ
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/FAQ">
                  <div className="block py-2 pr-4 pl-3 brand_primary__color rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600 md:p-0 ">
                    জিজ্ঞাসা
                  </div>
                </Link>
              </li>
              <li>
                <div className="block py-2 pr-4 pl-3 brand_primary__color rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600 md:p-0 ">
                  আমাদের সম্পর্কে
                </div>
              </li>
            </ul>
          </div>
          {/* ul 2xl */}
        </div>
      </nav>
      {navToggler && (
        <Drawer
          navToggle={navToggle}
          navToggler={navToggler}
          setNavToggler={setNavToggler}
        />
      )}
    </>
  );
}

export default Navbar;

/******************************************************/
