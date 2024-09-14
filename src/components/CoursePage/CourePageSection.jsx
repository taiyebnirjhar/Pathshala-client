import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/FirebaseContext";
import "../../styles/index.css";
import CourseCard from "./CourseCard";

import "./CoursePage.css";
function CoursePageSection() {
  /**********************************/
  const { navToggler } = useContext(AuthContext);
  const courseData = useLoaderData();

  const [ads, setAds] = useState(true);
  /**********************************/

  /**********************************/

  return (
    <>
      {!navToggler && (
        <section className=" border-gray-200 mt-8 sm:mt-0 px-2 py-4 sm:px-6 sm:py-4 md:px-6 md:py-4   primary_font_light ">
          <div className=" max-w-[1320px] mx-auto pl-10  ">
            {/* section header start */}

            <div className="flex flex-row gap-8 primary_font_light  justify-end sticky">
              <div className="text-lg font-semibold brand_primary__color py-3 activeSelect cursor-pointer">
                সকল কোর্স
              </div>
              <div
                className="text-lg font-semibold brand_primary__color py-3  cursor-pointer"
                onClick={() => {
                  toast.warn("Coming Soon!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                }}
              >
                এসএসসি
              </div>
              <div
                className="text-lg font-semibold brand_primary__color py-3 cursor-pointer"
                onClick={() => {
                  toast.warn("Coming Soon!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                }}
              >
                এইচএসসি
              </div>
            </div>
            {/**************************************/}
            {/********* Because of,
             * adding icons to the sidebar
             *  i had to write them statically
             * *******************/}
            {/**************************************/}
            <div className="flex flex-wrap w-[100%] mt-4 justify-start lg:hidden inline ">
              <Link to="/course/1">
                <div className="cursor-pointer mb-5 ml-1 mr-5 mt-1 flex-none border rounded-full bg-gray-200 px-4 py-2 font-medium ">
                  অ্যানিমেটেড লেসনস
                </div>
              </Link>
              <Link to="/course/2">
                <div className="cursor-pointer mb-5 ml-1 mr-5 mt-1 flex-none border rounded-full bg-gray-200 px-4 py-2 font-medium ">
                  অনলাইন কোচিং
                </div>
              </Link>

              <Link to="/course/3">
                <div className="cursor-pointer mb-5 ml-1 mr-5 mt-1 flex-none border rounded-full bg-gray-200 px-4 py-2 font-medium ">
                  টেস্ট পেপার
                </div>
              </Link>
              <Link to="/course/4">
                {" "}
                <div className="cursor-pointer mb-5 ml-1 mr-5 mt-1 flex-none border rounded-full bg-gray-200 px-4 py-2 font-medium ">
                  বোর্ড পেপার সলভিং
                </div>
              </Link>
              <Link to="/course/5">
                <div className="cursor-pointer mb-5 ml-1 mr-5 mt-1 flex-none border rounded-full bg-gray-200 px-4 py-2 font-medium ">
                  ডেইলি লেসন
                </div>
              </Link>
              <Link to="/course/6">
                <div className="cursor-pointer mb-5 ml-1 mr-5 mt-1 flex-none border rounded-full bg-gray-200 px-4 py-2 font-medium ">
                  পডকাস্ট
                </div>
              </Link>
            </div>
            <hr className="border-[1px] mt-4 border-pink-600 opacity-40 b-t-0" />

            {/* section header end */}
            <div className="flex flex-row mt-4 justify-between">
              <aside
                className="2xl:w-[30%] lg:inline hidden "
                aria-label="Sidebar"
              >
                <div className="overflow-y-auto py-4 px-3 rounded ">
                  <ul className="space-y-2">
                    <Link to="/course/1">
                      {" "}
                      <li>
                        <div
                          href="#"
                          className="flex items-center p-2 2xl:text-base font-semibold opacity-90 brand_primary__color rounded-lg "
                        >
                          <i className="fa-brands fa-google-play"></i>
                          <span className="ml-3">অ্যানিমেটেড লেসনস</span>
                        </div>
                      </li>
                    </Link>
                    <Link to="/course/2">
                      {" "}
                      <li>
                        <div
                          href="#"
                          className="flex items-center p-2 2xl:text-base font-semibold opacity-90 brand_primary__color rounded-lg hover:bg-gray-100 "
                        >
                          <i className="fa-solid fa-video"></i>
                          <span className="flex-1 ml-3 whitespace-nowrap">
                            অনলাইন কোচিং
                          </span>
                          <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full ">
                            Pro
                          </span>
                        </div>
                      </li>
                    </Link>
                    <Link to="/course/3">
                      {" "}
                      <li>
                        <div
                          href="#"
                          className="flex items-center p-2 2xl:text-base font-semibold opacity-90 brand_primary__color rounded-lg  hover:bg-gray-100 "
                        >
                          <i className="fa-solid fa-brain"></i>
                          <span className="flex-1 ml-3 whitespace-nowrap">
                            টেস্ট পেপার
                          </span>
                        </div>
                      </li>
                    </Link>
                    <Link to="/course/4">
                      {" "}
                      <li>
                        <div
                          href="#"
                          className="flex items-center p-2 2xl:text-base font-semibold opacity-90 brand_primary__color rounded-lg hover:bg-gray-100 "
                        >
                          <i className="fa-solid fa-clipboard-check"></i>
                          <span className="flex-1 ml-3 whitespace-nowrap">
                            বোর্ড পেপার সলভিং
                          </span>
                        </div>
                      </li>
                    </Link>
                    <Link to="/course/5">
                      <li>
                        <div
                          href="#"
                          className="flex items-center p-2 2xl:text-base font-semibold opacity-90 brand_primary__color rounded-lg  hover:bg-gray-100 "
                        >
                          <i className="fa-solid fa-fire"></i>
                          <span className="flex-1 ml-3 whitespace-nowrap">
                            ডেইলি লেসন
                          </span>
                        </div>
                      </li>
                    </Link>
                    <Link to="/course/6">
                      {" "}
                      <li>
                        <div
                          href="#"
                          className="flex items-center p-2 2xl:text-base font-semibold opacity-90 brand_primary__color rounded-lghover:bg-gray-100 "
                        >
                          <i className="fa-solid fa-headphones-simple"></i>

                          <span className="flex-1 ml-3 whitespace-nowrap">
                            পডকাস্ট
                          </span>
                        </div>
                      </li>
                    </Link>
                    {/* <Link to="/pricing">
                  {" "}
                  <li>
                    <div
                      href="#"
                      className="flex items-center p-2 2xl:text-base font-semibold opacity-90 brand_primary__color rounded-lghover:bg-gray-100 "
                    >
                      <i className="fa-solid fa-wand-magic-sparkles"></i>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        প্রিমিয়াম কোর্সেস
                      </span>
                    </div>
                  </li>
                </Link> */}
                  </ul>{" "}
                  {ads && (
                    <div
                      id="dropdown-cta"
                      className="p-4 mt-6 bg-blue-50 rounded-lg "
                      role="alert"
                    >
                      <div className="flex items-center mb-3">
                        <span className="text-pink-800  text-sm font-semibold mr-2 px-2.5 py-0.5 rounded ">
                          Get Premium
                        </span>
                        <button
                          type="button"
                          className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 "
                          data-collapse-toggle="dropdown-cta"
                          aria-label="Close"
                          onClick={() => setAds(false)}
                        >
                          <span className="sr-only">Close</span>
                          <svg
                            aria-hidden="true"
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          {/* <i className="fa-solid fa-wand-magic-sparkles"></i> */}
                        </button>
                      </div>
                      <p className="mb-3 text-sm text-blue-900 ">
                        পাঠশালা প্লাটফর্ম এ পাচ্ছ ১০০+ প্রিমিয়াম কোর্সেস। বিশ্ব
                        বিদ্যায়লয় ভর্তি পরীক্ষা, বিসিএস , সরকারি চাকরি পরীক্ষা
                        প্রস্তুতি এর উপর লাইভ সেশন এবং সঠিক গাইডলাইন।
                      </p>
                      <Link to="/course/1">
                        <div
                          className="text-sm text-blue-900 underline hover:text-blue-800 "
                          href="#"
                        >
                          কোর্স এনরোল করো
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </aside>

              <div className="2xl:w-[60%]">
                {/*********************************************************************/}
                {/* {loading && (
              <div className="text-center">
                <div role="status">
                  <svg
                    className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )} */}
                <div className="mt-6 flex justify-end">
                  <h3 className="text-end 2xl:text-3xl md:text-xl text-lg mr-8 font-semibold  brand_primary__color activeSelect">
                    লেসনস
                  </h3>
                </div>
                <div className="flex flex-wrap xl:justify-between lg:justify-around justify-center gap-4 mt-10">
                  {courseData.data.map((item) => {
                    return (
                      <CourseCard
                        course={item}
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        des={item.des}
                        img={item.imgUrl}
                        price={item.price}
                      />
                    );
                  })}
                </div>
                {/*********************************************************************/}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default CoursePageSection;
