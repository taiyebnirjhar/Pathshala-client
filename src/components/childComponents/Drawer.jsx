import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../components/childComponents/Drawer.css";
import { AuthContext } from "../../contexts/FirebaseContext";
import "../Navbar/Navbar.css";

function Drawer({ navToggle, navToggler, setNavToggler }) {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className=" bg-[#364895] w-screen h-screen  mt-[-4.5rem] font__custome transition-all  ease-in-out duration-300  ">
      <div className="block">
        <div className="w-[90%] h-[85vh] mt-[80px]  mx-auto">
          <div className="text-[22px]">
            <div className="pt-16">
              <Link to={"/home"}>
                <div
                  href="#"
                  className="block py-2.5 px-4 mt-11  text-pink-600  hover:text-pink-600 "
                  aria-current="page"
                  onClick={navToggle}
                >
                  হোম
                </div>
              </Link>
              <hr className="w-[97%] mx-auto opacity-40" />
              <Link to={"/course/1"}>
                <div
                  href="#"
                  className="block py-2.5 px-4  text-white  hover:text-pink-600"
                  aria-current="page"
                  onClick={navToggle}
                >
                  কোর্স
                </div>
              </Link>
              <hr className="w-[97%] mx-auto opacity-40" />
              {/* <Link to="/pricing">
                <div
                  href="#"
                  className="block py-2.5 px-4  text-white  hover:text-pink-600"
                  aria-current="page"
                  onClick={navToggle}
                >
                  লার্নিং
                </div>
              </Link> */}
              <hr className="w-[97%] mx-auto opacity-40" />
              <Link to="/blog">
                <div
                  href="#"
                  className="block py-2.5 px-4  text-white  hover:text-pink-600"
                  aria-current="page"
                  onClick={navToggle}
                >
                  ব্লগ
                </div>
              </Link>
              <hr className="w-[97%] mx-auto opacity-40" />
              <Link to="/FAQ">
                <div
                  href="#"
                  className="block py-2.5 px-4  text-white hover:text-pink-600 "
                  aria-current="page"
                  onClick={navToggle}
                >
                  জিজ্ঞাসা
                </div>
              </Link>
              <hr className="w-[97%] mx-auto opacity-40" />
              <div
                href="#"
                className="block py-2.5 px-4  text-white hover:text-pink-600 "
                aria-current="page"
                onClick={navToggle}
              >
                আমাদের সম্পর্কে
              </div>
              <hr className="w-[97%] mx-auto opacity-40" />
              {!user ? (
                <Link to={"/login"}>
                  <button
                    className="w-[97%] mx-3 hover:bg-indigo-700 sm:mx-4 lg:mx-4 relative  my-6  py-4 px-4 text-white  text-lg rounded-xl bg-pink-600 opacity-80 "
                    onClick={navToggle}
                  >
                    লগ ইন / সাইন আপ
                  </button>
                </Link>
              ) : (
                <button
                  className="w-[97%] mx-3 hover:bg-indigo-700 sm:mx-4 lg:mx-4 relative  my-6  py-4 px-4 text-white  text-lg rounded-xl bg-pink-600 opacity-80 hidden"
                  onClick={navToggle}
                >
                  লগ ইন / সাইন আপ
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//

export default Drawer;
