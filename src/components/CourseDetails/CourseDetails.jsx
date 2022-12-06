import React, { useContext, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../contexts/FirebaseContext";
import "../../styles/index.css";
import "../CoursePage/CoursePage.css";

function CourseDetails() {
  const { navToggler } = useContext(AuthContext);
  const ref = useRef();
  const location = useLocation();
  const { img, title, des, price, id } = location.state;

  const pdfHandler = useReactToPrint({
    content: () => ref.current,
    documentTitle: `${title}-details`,
    onAfterPrint: () =>
      toast.success(" pdf created Successfully 🦄!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }),
  });

  return (
    <>
      <ToastContainer />
      {!navToggler && (
        <section
          className="border-gray-200 mt-8 sm:mt-0 px-2 py-2 sm:px-6 sm:py-2 md:px-6 md:py-2   primary_font_light"
          ref={ref}
        >
          <div className=" max-w-[1320px] mx-auto pl-10 ">
            <div className="brand_primary__color mb-6">
              <div className="2xl:text-3xl font-semibold py-2 tracking-wide">
                {title}{" "}
                <span
                  className="text-pink-600 2xl:text-2xl px-2"
                  onClick={pdfHandler}
                >
                  <i className="fa-solid fa-cloud-arrow-down"></i>
                </span>
              </div>
              <div className="py-2 font-medium 2xl:text-xl">{des}</div>
            </div>
            <div className="flex flex-row gap-8 primary_font_light  justify-start sticky">
              <div className="text-lg font-semibold brand_primary__color py-3 activeSelect">
                মেন্টর
              </div>
              <div className="text-lg font-semibold brand_primary__color py-3 ">
                সিলেবাস
              </div>
              <div className="text-lg font-semibold brand_primary__color py-3">
                বিস্তারিত
              </div>
            </div>
            <hr className="border-[1px] mt-4 border-pink-600 opacity-40 b-t-0" />
            <div className="flex xl:flex-row flex-col flex-wrap md:flex-col md:flex-wrap justify-between my-4">
              <div className="lg:my-16 xl:my-0">
                <div className="my-4 brand_primary__color">
                  <h2 className=" 2xl:text-2xl font-semibold py-2">
                    কোর্স সম্পর্কে বিস্তারিত
                  </h2>
                  <div className="py-2">
                    <h2 className="font-semibold 2xl:text-lg py-1.5">
                      এই কোর্সটি কাদের জন্য?
                    </h2>
                    <p className="2xl:text-base mb-8">
                      ক্লাস ৯-১০ ও SSC পরীক্ষার্থীদের জন্য সাজানো হয়েছে এই
                      কোর্সটি।
                    </p>
                  </div>
                  <div className="">
                    <h2 className="font-semibold 2xl:text-base">
                      কোর্সটি তোমার কেন প্রয়োজন?{" "}
                    </h2>
                    <ul className="font-medium">
                      <li className="py-1">
                        - ঘরে বসে ক্লাস এর টার্মিনাল পরীক্ষা ও semister পরীক্ষার
                        প্রস্তুতি নিতে
                      </li>
                      <li className="py-1">
                        - অধ্যায় কনসেপ্ট বুঝে ও প্রবলেম সল্ভ করে নিতে{" "}
                      </li>
                      <li className="py-1">
                        - এক্সপার্ট মেন্টরদের থেকে সরাসরি প্রশ্নের উত্তর বুঝে
                        নিতে{" "}
                      </li>
                      <li className="py-1">
                        - গুরুত্ব বুঝে কীভাবে পরীক্ষার প্রস্তুতি নিবে তার
                        সম্পূর্ণ ধারণা পেতে{" "}
                      </li>
                      <li className="py-1">
                        - নিয়মিত কুইজ দিয়ে নিজের শেখার অবস্থা জানতে
                      </li>
                      <li className="py-1">
                        - কীভাবে প্রশ্নের উত্তর করলে পরীক্ষায় সফল হবে তা জেনে
                        নিতে
                      </li>
                      <li className="py-1">
                        - সিলেবাস আগে আগে শেষ করে ক্লাসে-পরীক্ষায় এগিয়ে থাকতে{" "}
                      </li>
                      <li className="py-2 underline text-blue-800 font-semibold">
                        আরও পড়তে এখানে ক্লিক করো...{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="2xl:max-w-[75%] xl:max-w-[70%] max-w-40%  md:max-w-[50%] lg:max-w-[50%] lg:mb-4 xl:my-auto xl:mx-auto bg-white rounded-lg border border-gray-200 shadow-md lg:h-[50%] xl:h-full">
                  <a href="#">
                    <img className="rounded-t-lg w-full" src={img} alt="" />
                  </a>
                  <div className="p-5 brand_primary_bg rounded-b-lg opacity-95">
                    <div className="my-4">
                      <h5 className="py-1 text-2xl font-bold tracking-wide text-white ">
                        এই কোর্সে যা যা রয়েছে
                      </h5>
                      <hr className="w-[20%] bg-gray-400" />
                    </div>
                    <div className="text-white flex flex-row  justify-between py-4">
                      <div className="flex flex-col max-w-[50%] ">
                        <ul className="px-y">
                          <li className="py-2">
                            <span className="text-[9px] px-2">🟡</span> ২২৬ লাইভ
                            ক্লাস{" "}
                          </li>
                          <li className="py-2">
                            {" "}
                            <span className="text-[9px] px-2">🟡</span>প্রতিটি
                            ক্লাস ১ ঘণ্টা{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col  max-w-[50%] justify-end">
                        <ul className="px-2">
                          <li className="py-2">
                            <span className="text-[9px] px-2">🟡</span>১১ মাসে
                            পুরো সিলেবাস শেষ{" "}
                          </li>
                          <li className="py-2">
                            <span className="text-[9px] px-2">🟡</span>{" "}
                            <span className="">
                              অভিজ্ঞ মেন্টরদের সাথে প্রস্তুতি
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr className="border-[1px] mb-2 border-pink-800 opacity-40 b-t-0" />
                    <div className="flex justify-between py-4 ">
                      <Link to="/pricing">
                        <div className="inline-flex items-center py-2 px-6 text-base font-bold text-center text-white   hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                          মাত্র {price}
                        </div>
                      </Link>
                      <Link
                        to={`/checkout/${id}`}
                        state={{
                          img: img,
                          title: title,
                          des: des,
                          price: price,
                          id: id,
                        }}
                      >
                        <div className="inline-flex items-center py-2 px-6 text-base font-medium text-center text-white bg-pink-700 rounded-[10px] hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                          কোর্সে ভর্তি
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default CourseDetails;
