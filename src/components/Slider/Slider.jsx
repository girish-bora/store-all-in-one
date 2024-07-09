import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { nextSlide, prevSlide, dotSlide } from "../../store/slices/sliderSlice";
import { sliderData } from "../../assets/data/dummyData";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();

  const nextSlideHandler = () => {
    dispatch(nextSlide(slideIndex + 1));
  };

  const prevSlideHandler = () => {
    dispatch(prevSlide(slideIndex - 1));
  };
  const dotSlideHandler = (index) => {
    dispatch(dotSlide(index));
  };

  return (
    <div className="relative pb-4 dark:bg-gray-900">
      <div className="bg-black p-4 w-full flex  justify-around">
        <div className="text-white font-inter text-base font-medium tracking-normal leading-none text-center ">
          {" "}
          50% OFF
        </div>
        <div className="text-white font-inter text-base font-medium tracking-normal leading-none text-center ">
          {" "}
          Free Shipping And Returns
        </div>
        <div className="text-white font-inter text-base font-medium tracking-normal leading-none text-center ">
          {" "}
          Different Payment Methods
        </div>
      </div>
      <div>
        {sliderData.map((item) => (
          <div
            key={item.id}
            className={
              parseInt(item.id) === slideIndex
                ? "opacity-100 duration-700 ease-in-out scale-100"
                : "opacity-0 duration-700 ease-in-out scale-950"
            }
          >
            <div>
              {parseInt(item.id) === slideIndex && (
                <img className="h-[850px] w-full sm:h-[400px] md:h-[600px]" src={item.img} alt="shoes" />
              )}
            </div>
            <div className="absolute top-44 sm:top-4 mx-auto inset-x-1/4">
              <p className="text-white text-4xl sm:text-xl font-inter font-bald tracking-normal leading-none">
                {parseInt(item.id) === slideIndex && item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex absolute bottom-12 left-[45%] sm:left-[35%] xs:left-[30%]">
        {sliderData.map((dot, index) => {
          return (
            <div className="mr-4" key={dot.id}>
              <div
                className={
                  index === slideIndex
                    ? "bg-green-300 rounded-full p-4 cursor-pointer"
                    : "bg-white rounded-full p-4 cursor-pointer"
                }
                onClick={() => dotSlideHandler(index)}
              ></div>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300"
          onClick={nextSlideHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300"
          onClick={prevSlideHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
