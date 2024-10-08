import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import "./CoursePage.css";

function CourseCard({ title, des, img, price, id }) {
  return (
    <div className="single_course xl:w-[48%] lg:w-[45%] md:w-[60%] sm:w-[65%] w-[95%]">
      <div className="object-cover overflow-hidden">
        <span className="image_holder">
          <img src={img} alt="" className="" />
        </span>
      </div>
      <div className="py-[20px] px-[24px]">
        <div className="single_course_title">{title}</div>
        <div className="single_course_des">{des}</div>
      </div>
      <div className="single_course_fee_btn">
        <p className="single_course_fee_btn_p">
          মাত্র
          <span className="pl-[5px] text-[#cf278d]">{price}</span>
          <span className="single_course_fee_btn_discount">৳৯৯৮০</span>
        </p>
        <Link
          to={`/coureDetails/${id}`}
          state={{ img: img, title: title, des: des, price: price, id: id }}
        >
          <div className="single_course_fee_details_btn">বিস্তারিত</div>
        </Link>
      </div>
    </div>
  );
}

function CourseCardSkeleton() {
  return (
    <div className="flex flex-wrap xl:justify-between lg:justify-around justify-center gap-4 mt-10">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div
            className="single_course skeleton-card xl:w-[48%] lg:w-[45%] md:w-[60%] sm:w-[65%] w-[95%] animate-pulse"
            key={index}
          >
            {/* Image Skeleton */}
            <div className="skeleton-image skeleton-loader"></div>

            {/* Content Skeleton */}
            <div className="py-[20px] px-[24px]">
              <div className="skeleton-title skeleton-loader"></div>
              <div className="skeleton-des skeleton-loader"></div>
            </div>

            {/* Pricing and Button Skeleton */}
            <div className="single_course_fee_btn">
              <div className="skeleton-price skeleton-loader"></div>
              <div className="skeleton-button skeleton-loader"></div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default CourseCard;

export { CourseCardSkeleton };
