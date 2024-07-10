import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import {
  Button,
  MenuHandler,
  MenuList,
  MenuItem,
  Menu,
} from "@material-tailwind/react";
import Error from "../Error/Error";
import {
  filterProducts,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} from "../../store/slices/productsSlice";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";

const FilteredProducts = () => {
  const { t } = useTranslation();

  const products = useSelector((state) => state.products.filteredProducts);
  const { type } = useParams();

  const dispatch = useDispatch();

  const error = useSelector((state) => state.products.error);

  const genderButtons = ["male", "female"];
  const colorButtons = [
    "black",
    "brown",
    "red",
    "blue",
    "green",
    "purple",
    "yellow",
    "orange",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];

  return (
    <>
      <Navbar></Navbar>
      <div className="dark:bg-gray-900">
        <div className="pt-16">
          <div className="pl-14">
            <h1 className="text-4xl font-inter text-gray-600 dark:text-white font-bold tracking-normal leading-none">
              {t(`filteredProducts.type.${type}`)}
            </h1>
            <div className="flex items-center justify-between py-8 sm:justify-normal sm:gap-y-2">
              <div className="flex items-center sm:flex-wrap sm:gap-y-2 ">
                {genderButtons.map((item, index) => (
                  <div key={index}>
                    <Button
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      className="text-black dark:text-white dark:border-white dark:hover:bg-gray-700 hover:bg-gray-300 duration-300 ease-in-out mr-4"
                      onClick={() => dispatch(filterGender(item))}
                    >
                      {t(`filteredProducts.filterButtons.button${index}`)}
                    </Button>
                  </div>
                ))}
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="text-black  dark:text-white dark:border-white dark:hover:bg-gray-700 hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  onClick={() => dispatch(sortByPrice())}
                >
                  {t(`filteredProducts.filterButtons.button2`)}
                </Button>
                <Menu>
                  <MenuHandler>
                    <Button
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      className="text-black dark:text-white dark:border-white dark:hover:bg-gray-700 hover:bg-gray-300 duration-300 ease-in-out mr-4"
                    >
                      {t(`filteredProducts.filterButtons.button3.text`)}
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    {colorButtons.map((item, index) => (
                      <MenuItem
                        style={{ color: item }}
                        key={index}
                        onClick={() => dispatch(filterByColor(item))}
                      >
                        {t(
                          `filteredProducts.filterButtons.button3.color${index}`
                        )}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuHandler>
                    <Button
                      disabled={type === "Bags"}
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      className="text-black dark:text-white dark:border-white dark:hover:bg-gray-700 hover:bg-gray-300 duration-300 ease-in-out mr-4"
                    >
                      {t(`filteredProducts.filterButtons.button4.text`)}
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    {sizeButtons.map((item, index) => (
                      <MenuItem
                        key={index}
                        onClick={() => dispatch(filterBySize(item))}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="text-black dark:text-white dark:border-white dark:hover:bg-gray-700 hover:bg-gray-300 duration-300 ease-in-out mr-4 hidden sm:inline-block"
                  onClick={() => dispatch(filterProducts(type))}
                >
                  {t(`filteredProducts.filterButtons.button5`)}
                </Button>
              </div>
              <div className="pr-14 sm:hidden">
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="text-black dark:text-white dark:border-white dark:hover:bg-gray-700 hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  onClick={() => dispatch(filterProducts(type))}
                >
                  {t(`filteredProducts.filterButtons.button5`)}
                </Button>
              </div>
            </div>
          </div>
          {error ? (
            <Error></Error>
          ) : (
            <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-1 justify-items-center py-8 gap-12">
              {products
                .filter((product) => product.type === type)
                .map((product, index) => (
                  <div key={index}>
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      colors={product.color}
                    ></ProductCard>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FilteredProducts;
