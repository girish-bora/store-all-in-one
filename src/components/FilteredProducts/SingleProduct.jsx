import React, { useState } from "react";
import { useSelector } from "react-redux";
import { singleProduct } from "../../store/slices/productsSlice";
import { useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const { id } = useParams();

  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color[0];

  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);
  //console.log(product);

  const sizeChangeHandler = (e) => {
    setSize(e.target.value);
  };
  const colorChangeHandler = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      {product
        .filter((prod) => prod.id === id)
        .map((item, index) => (
          <div key={index} className="flex justify-center items-center py-10">
            <div className="pl-44 grow-[2]">
              <img
                src={item.img}
                alt={item.name}
                className="h-[850px] rounded-lg"
              />
            </div>
            <div className="grow-[3] pl-4">
              <div className="max-w-lg">
                <h5 className="text-2xl font-inter font-bold tracking-normal leading-none pb-4">
                  {item.name}
                </h5>
                <p className="text-orange-700 text-xl font-bold font-inter tracking-normal leading-none pb-4">
                  15% OFF
                </p>
                <p className="text-gray-600 text-xl font-bold font-inter tracking-normal leading-none pb-4">
                  {item.text}
                </p>
                <div className="pb-4">
                  {item.size ? (
                    <div>
                      <label
                        htmlFor="size"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Pick a size
                      </label>
                      <select
                        name="size"
                        id="size"
                        value={size}
                        onChange={sizeChangeHandler}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
                      >
                        {item.size.map((itm, index) => (
                          <option value={itm} key={index}>
                            {itm}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <div>
                      <label
                        htmlFor="size"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Pick a size
                      </label>
                      <select
                        name="size"
                        disabled
                        id="size"
                        value={size}
                        onChange={sizeChangeHandler}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-not-allowed"
                      >
                        {item?.size?.map((itm, index) => (
                          <option value={itm} key={index}>
                            {itm}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
                <div>
                  <div className="pb-4">
                    <label
                      htmlFor="color"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Pick a color
                    </label>
                    <select
                      name="color"
                      id="color"
                      value={color}
                      onChange={colorChangeHandler}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
                    >
                      {item.color.map((col, index) => (
                        <option value={col} key={index}>
                          {col}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Tooltip content="Add to Cart" placement="bottom">
                    <Button color="gray" size="lg" variant="outlined" ripple>
                      Add to Cart
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingleProduct;
