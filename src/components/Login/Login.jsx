import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const initialState = {
    name: "",
    password: "",
    image: "",
  };

  const [values, setValues] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const loginHandler = (vals) => {
    dispatch(login(vals));
  };

  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-screen">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Name"
            size="lg"
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          <Input
            label="Image URL"
            size="lg"
            type="text"
            name="image"
            value={values.image}
            onChange={onChange}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={() => loginHandler(values)}
          >
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Image is optional.
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
