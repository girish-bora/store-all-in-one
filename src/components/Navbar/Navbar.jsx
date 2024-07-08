import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import logoDark from "../../assets/images/logodark.png";
import Cart from "../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { Avatar, Tooltip, Button } from "@material-tailwind/react";
import { toggleTheme } from "../../store/slices/themeSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const { name, image } = user;

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const darkMode = useSelector((state) => state.theme.darkMode);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  const toggleModeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      {/* <div className="bg-black p-2 w-full">
        <h3 className="text-white font-inter text-2xl font-bold tracking-normal leading-none text-center ">
          Welcome All
        </h3>
      </div> */}
      <div className="flex justify-around items-center bg-blue-gray-300 dark:bg-blue-gray-900">
        <Link to="/">
          <div>
            <img
              className="h-28 w-full"
              src={darkMode ? logoDark : logo}
              alt="store"
            />
          </div>
        </Link>
        <div className="flex flex-row items-center">
          {/* <button className="font-inter text-base font-medium tracking-normal leading-none text-center mr-4">
            Logout
          </button> */}
          <div className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke={darkMode ? "#fff" : "#000"}
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <p className="font-inter text-base font-medium tracking-normal leading-none text-center mr-4 cursor-pointer dark:text-white">
              Wishlist
            </p>
          </div>
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={handleOpen}
          >
            {totalAmount > 0 ? (
              <span className="rounded-full bg-gray-300 px-2 font-inter text-sm mr-1">
                {totalAmount}
              </span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke={darkMode ? "#fff" : "#000"}
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            )}

            <p className="font-inter text-base font-medium tracking-normal leading-none text-center dark:text-white">
              Shopping Bag
            </p>
            <div>
              {open && <Cart openModal={open} setOpen={setOpen}></Cart>}
            </div>
          </div>
          <div className="flex flex-row items-center cursor-pointer pl-4">
            {image && (
              <Avatar src={image} alt="avatar" size="sm" className="mr-2" />
            )}
            <div onClick={logoutHandler}>
              <Tooltip content="Sign Out" placement="bottom">
                <p className="font-inter text-base font-medium tracking-normal leading-none dark:text-white">
                  Hi {name.charAt(0).toUpperCase() + name.slice(1)}
                </p>
              </Tooltip>
            </div>
          </div>
          <div onClick={toggleModeHandler}>
            {darkMode ? (
              <div className="flex flex-row items-center cursor-pointer ml-1 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke={darkMode ? "#fff" : "#000"}
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>

                <p className="font-inter text-base font-medium tracking-normal leading-none text-center text-white">
                  Dark
                </p>
              </div>
            ) : (
              <div className="flex flex-row items-center cursor-pointer ml-1 px-2">
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
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
                <p className="font-inter text-base font-medium tracking-normal leading-none text-center">
                  Light
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
