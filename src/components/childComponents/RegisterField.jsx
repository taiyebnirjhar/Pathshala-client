import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import icon from "../../assets/images/icon.png";
import { AuthContext } from "../../contexts/FirebaseContext";
import "../../styles/index.css";
import "../childComponents/LoginField.css";

function RegisterField() {
  const [showPassword, SetShowPassword] = useState(false);
  const [showConfirmPassword, SetShowConfirmPassword] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(true);
  const show = () => {
    SetShowPassword((prev) => !prev);
  };
  const showConfirm = () => {
    SetShowConfirmPassword((prev) => !prev);
  };
  /********************************/
  const { regiseterUser, updateUserProfile } = useContext(AuthContext);
  /********************************/
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const image = form.image.value;

    if (password !== confirmPassword) {
      setPasswordValidate(false);
      return;
    } else {
      setPasswordValidate(true);
    }
    // console.log(email, password, image);

    regiseterUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUserProfile({
          displayName: name,
          // photoURL: image,
        });
        toast.success("Successfully registered 🦄!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate(from, { replace: true });

        /****[spinner]****/
        form.reset();
      })
      .catch((err) =>
        toast.error(err.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      );
  };

  return (
    <>
      <ToastContainer />
      <section className="h-full gradient-form bg-sky-50 md:h-screen ">
        <div className="container py-12 px-12 h-full mx-auto">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto 2xl:w-32 xl:w-28 lg:w-24 md:w-24 w-20 "
                          src={icon}
                          alt="logo"
                        />
                        <h4 className=" primary_font text-xl font-semibold mt-1 mb-12 pb-1 mt-2"></h4>
                      </div>
                      <form onSubmit={handleRegister}>
                        <p className="mb-4 font-semibold text-[#364895] primary_font 2xl:text-[22px]">
                          শেখার নতুন জগতে স্বাগতম
                        </p>
                        <div className="mb-4">
                          <input
                            type="text"
                            name="name"
                            className="form-control block w-full px-3 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none primary_font"
                            id="exampleFormControlInput1"
                            placeholder="নাম "
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="email"
                            name="email"
                            className="form-control block w-full px-3 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none primary_font"
                            id="exampleFormControlInput1"
                            placeholder=" ইমেল"
                            required
                          />
                        </div>

                        <div className="mb-4 relative">
                          <input
                            name="password"
                            type={!showPassword ? "password" : "text"}
                            className="form-control block w-full px-3 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none primary_font"
                            placeholder="পাসওয়ার্ড"
                            required
                            // onChange={passwordHandler}
                          />
                          {!showPassword ? (
                            <div
                              className="absolute top-1 right-5 py-1"
                              onClick={show}
                            >
                              <i className="fa-regular fa-eye text-gray-700 opacity-60"></i>
                            </div>
                          ) : (
                            <div
                              className="absolute top-1 right-5 py-1"
                              onClick={show}
                            >
                              <i className="fa-regular fa-eye-slash text-gray-700 opacity-60"></i>
                            </div>
                          )}
                        </div>
                        <div className="mb-4 relative">
                          <input
                            type={!showConfirmPassword ? "password" : "text"}
                            name="confirmPassword"
                            className={
                              !passwordValidate
                                ? `form-control block w-full px-3 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-pink-600 rounded transition ease-in-out m-0  focus:outline-none primary_font`
                                : `form-control block w-full px-3 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none primary_font`
                            }
                            placeholder="পাসওয়ার্ড নিশ্চিত করো"
                            required
                          />
                          {!showConfirmPassword ? (
                            <div
                              className="absolute top-1 right-5 py-1"
                              onClick={showConfirm}
                            >
                              <i className="fa-regular fa-eye text-gray-700 opacity-60"></i>
                            </div>
                          ) : (
                            <div
                              className="absolute top-1 right-5 py-1"
                              onClick={showConfirm}
                            >
                              <i className="fa-regular fa-eye-slash text-gray-700 opacity-60"></i>
                            </div>
                          )}
                          {!passwordValidate && (
                            <p className="primary_font_light text-red-600">
                              পাসওয়ার্ড ম্যাচ করে নি !
                            </p>
                          )}
                        </div>
                        <div className="mb-4 block">
                          <div
                            className=" mt-4 mb-3 ml-3 text-base font-extrabold text-gray-900 opacity-40 primary_font"
                            htmlFor="file_input"
                          >
                            প্রোফাইল পিকচার
                          </div>
                          <input
                            id="file_input"
                            type="file"
                            name="image"
                            className="form-control  w-full px-3 py-1.5 text-base  text-gray-500 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none primary_font"
                            placeholder="Upload file"
                            required
                          />
                          <p
                            className="mt-2 ml-3 text-sm font-medium text-gray-400  "
                            id="file_input_help"
                          >
                            SVG, PNG, JPG or Webp .
                          </p>
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block px-6 py-2.5 text-white font-semibold text-base leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 custome_style_btn "
                            type="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            রেজিস্টার
                          </button>
                        </div>
                        <div className="flex items-center justify-between pb-6 ">
                          <p className="mb-0 mr-2  text-gray-700 opacity-70 primary_font_light font-semibold">
                            একাউন্ট খোলো আছে ?
                          </p>
                          <Link to="/login">
                            <button
                              type="button"
                              className="inline-block px-6 py-2 border-2 rounded-[25px] border-pink-600 text-pink-600 primary_font_light font-semibold text-sm leading-tight uppercase  hover:text-indigo-600 hover:border-indigo-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out "
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                            >
                              লগ ইন
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none custome_style_div">
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6 ">
                      <blockquote className="text-xl italic font-semibold opacity-90 ">
                        <svg
                          aria-hidden="true"
                          className="w-10 h-10  "
                          viewBox="0 0 24 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <p className="primary_font leading-8">
                          "সাফল্যের মূল মন্ত্র হল যা আমরা ভয় পাই তার উপর নয় বরং
                          আমরা যা চাই তার উপর আমাদের চেতন মনকে কেন্দ্রীভূত করা "
                        </p>
                      </blockquote>
                      <div className="2xl:mt-10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterField;
