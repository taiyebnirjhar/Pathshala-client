import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import RegisterField from "../childComponents/RegisterField";

function Register() {
  return (
    <div>
      <nav className="bg-white border-gray-200 mt-2 sm:mt-0 px-2 py-4 sm:px-6 sm:py-4 md:px-6 md:py-4 rounded font__custome">
        <div className="container flex flex-wrap justify-between items-center mx-auto max_w_custome">
          <Link to="/">
            <div className="flex items-center">
              <img
                src={logo}
                className="ml-3 mr-3 h-10 sm:h-10 md:h-10 xl:h-12"
                alt="Pathshala Logo"
              />
            </div>
          </Link>
        </div>
      </nav>
      <RegisterField />
    </div>
  );
}

export default Register;
