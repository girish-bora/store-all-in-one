import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ProductCard = ({ id, name, price, text, colors, img }) => {
  return (
    <Card className="mt-6 w-92">
      <CardHeader color="blue" className="relative h-96">
        <img src={img} alt="card-image" className="h-full w-full" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" className="mb-2">
          {name}
        </Typography>
        <Typography>
          {text}
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">${price}</Typography>
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
  );
};

export default ProductCard;
