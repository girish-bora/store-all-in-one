import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { singleProduct } from "../../store/slices/productsSlice";

const ProductCard = ({ id, name, price, text, colors, img }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  const singleProductHandler = (id) => {
    dispatch(singleProduct(id));
  };

  return (
    <Link to={`/filteredProducts/${type}/` + id}>
      <Card
        className="mt-6 w-92 xs:w-[85%] sm:w-[70%] sm:mx-auto  dark:bg-gray-800"
        onClick={() => singleProductHandler(id)}
      >
        <CardHeader color="blue" className="relative h-96">
          <img src={img} alt="card-image" className="h-full w-full" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" className="dark:text-white mb-2">
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small" className="dark:text-white">
            ${price}
          </Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            {colors.map((color, index) => (
              <i
                className="fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4"
                key={index}
                style={{ backgroundColor: color }}
              ></i>
            ))}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
