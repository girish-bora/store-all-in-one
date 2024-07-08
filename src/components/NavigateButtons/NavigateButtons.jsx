import React from "react";
import { Button } from "@material-tailwind/react";
import clothes from "../../assets/images/clothes.jpg";
import { filterProducts } from "../../store/slices/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const darkMode = useSelector((state) => state.theme.darkMode);

  const dispatch = useDispatch();

  const filterHandler = (arg) => {
    dispatch(filterProducts(arg));
  };

  return (
    <div className="dark:bg-gray-900">
      <div className="flex items-center justify-center py-8 dark:bg-gray-900">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
              <Link to={"/filteredProducts/" + button}>
                <Button
                  color="gray"
                  variant="outlined"
                  size="lg"
                  ripple={true}
                  className="text-black hover:bg-gray-300 duration-300 ease-in-out dark:text-white dark:border-white dark:hover:bg-gray-800"
                  onClick={() => filterHandler(button)}
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-green-300 p-2 w-[55%] mx-auto rounded-md">
        <h3 className="text-orange-900 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SALES UPTO 50%
        </h3>
      </div>
      <div className="flex justify-center items-center py-4 dark:bg-gray-900">
        <img
          className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600"
          src={clothes}
          alt="clothes"
        />
      </div>
    </div>
  );
};

export default NavigateButtons;
