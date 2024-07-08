import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";

const ProductSectionItem = ({
  id,
  img,
  name,
  text,
  size,
  price,
  color,
  totalPrice,
}) => {
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.theme.darkMode);

  const defaultSize = size[0];
  const defaultColor = color[0];

  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      <Card className="w-96 dark:bg-gray-700">
        <CardHeader floated={false} className="h-96">
          <img src={img} alt={name} />
        </CardHeader>
        <CardBody className="text-center dark:bg-gray-700">
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2 dark:text-white"
          >
            {name}
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            {text}
          </Typography>
          <div className="flex justify-center gap-7 pt-2">
            <Typography
              color="gray"
              className="font-medium text-gray-800 dark:text-white"
              textGradient
            >
              Size left: {defaultSize}
            </Typography>
            <Typography
              color="gray"
              className="font-medium text-gray-800 dark:text-white"
              textGradient
            >
              Color:{" "}
              <span
                className="px-2 rounded-full ml-2"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt- dark:bg-gray-800">
          <Tooltip content="Add to Cart" placement="bottom">
            <Button
              size="lg"
              color="gray"
              variant="outlined"
              ripple={true}
              className="dark:text-white dark:border-white"
              onClick={() =>
                addToCartHandler({
                  id: id,
                  img: img,
                  name: name,
                  text: text,
                  amount: 1,
                  price: price,
                  totalPrice: totalPrice,
                  color: defaultColor,
                  size: defaultSize,
                })
              }
            >
              Add to Cart
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductSectionItem;
