import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../contexts/FirebaseContext";
import "../../styles/index.css";

function Checkout() {
  /***************************/
  const { navToggler } = useContext(AuthContext);
  const location = useLocation();
  const { pathname } = location;
  const [loaded, setLoaded] = useState(false);
  const [checkoutData, setCheckoutData] = useState({});

  console.log(pathname.slice(10));
  /***************************/
  useEffect(() => {
    fetch(`https://pathshala-server.vercel.app/course/${pathname.slice(10)}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCheckoutData((prev) => {
          return {
            ...data,
          };
        });
        setLoaded(true);
      });
  }, []);
  /***************************/
  console.log(checkoutData);
  const checkOutHandler = () => {
    return toast.success("enrollment successfull 🦄!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <ToastContainer />

      {!navToggler ? (
        loaded ? (
          <div className="h-screen primary_font_light ">
            <div className="flex items-center flex-col " id="cart">
              <div
                className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800   h-auto"
                id="scroll"
              >
                <p className="lg:text-4xl text-3xl font-semibold leading-10 brand_primary__color pt-3">
                  সিলেক্টেড কোর্স
                </p>
                <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50 ">
                  <div className="md:w-4/12 2xl:w-1/4 w-full">
                    <img
                      src={checkoutData.imgUrl}
                      alt="Black Leather Bag"
                      className="h-full object-center object-cover md:block hidden"
                    />
                    <img
                      src={checkoutData.imgUrl}
                      alt="Black Leather Bag"
                      className="md:hidden w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="mx-4 md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center  brand_primary__color">
                    <p className="text-xs leading-3  md:pt-0 pt-4">
                      কোর্স আইডি :{checkoutData.id}
                    </p>
                    <div className="flex items-center justify-between w-full pt-1">
                      <p className="text-base font-semibold leading-none ">
                        {checkoutData.title}
                      </p>
                      <select
                        aria-label="Select quantity"
                        className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 "
                      >
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                    <p className="text-xs leading-3  pt-2">
                      Course Duration: 6 month
                    </p>
                    <p className="text-xs leading-3  py-4">Subject: static</p>
                    <p className="w-96 text-xs leading-3 ">
                      Money Back Duration: First 3 Module
                    </p>
                    <div className="flex items-center justify-between pt-5">
                      <div className="flex items-center">
                        <p className="text-xs leading-3 underline  cursor-pointer">
                          Add to Cart
                        </p>
                        <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                          Remove
                        </p>
                      </div>
                      <p className="text-base font-semibold leading-none  ">
                        {checkoutData.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" lg:w-1/2 md:w-8/12 w-full bg-gray-100  ">
                <div className="flex flex-col  h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6  overflow-y-auto">
                  <div>
                    <p className="lg:text-4xl text-3xl font-semibold leading-9 brand_primary__color ">
                      সামারি
                    </p>
                    <div className="flex items-center justify-between pt-16 brand_primary__color">
                      <p className="text-base leading-none font-semibold ">
                        সাব-টোটাল
                      </p>
                      <p className="text-base leading-none font-semibold ">
                        {checkoutData.price}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-5 brand_primary__color">
                      <p className="text-base leading-none  font-semibold">
                        ট্যাক্স
                      </p>
                      <p className="text-base leading-none font-semibold ">
                        00
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20 brand_primary__color">
                      <p className="text-2xl leading-normal  font-semibold">
                        Total
                      </p>
                      <p className="text-2xl font-bold leading-normal text-right  ">
                        {checkoutData.price}
                      </p>
                    </div>
                    <button
                      className="text-xl leading-none w-full py-5 my-4 text-pink-600 font-semibold border-pink-600 border rounded-2xl transition-all delay-400 ease-in-out hover:text-blue-600 hover:border-blue-600"
                      onClick={checkOutHandler}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
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
        )
      ) : (
        ""
      )}
    </>
  );
}

export default Checkout;
