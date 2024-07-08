import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Alert,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "@material-tailwind/react";
import { removeFromCart, placeOrder } from "../../store/slices/cartSlice";

const Cart = ({ openModal, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  //const totalAmount = useSelector((state) => state.cart.totalAmount);

  const [message, setMessage] = useState(false);

  const dispatch = useDispatch();

  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart(item));
  };

  const placeOrderHandler = () => {
    setMessage(true);
    setOpen(false);
    setTimeout(() => setMessage(false), 5000);
    dispatch(placeOrder());
  };

  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      {message && (
        <Alert
          color="red"
          className="text-xl font-inter font-bold absolute top-1 w-full left-1 flex justify-center z-10"
        >
          <p>Order Placed. Your order will be shipped soon.</p>
        </Alert>
      )}
      {!message &&
        (cart.length > 0 ? (
          <>
            <Dialog
              size="xl"
              open={openModal}
              handler={() => setOpen(false)}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
              }}
              className="h-[500px] overflow-scroll"
            >
              <DialogHeader>Shopping Bag</DialogHeader>
              <DialogBody
                divider
                className="flex flex-col justify-center items-start"
              >
                {cart.map((item, index) => (
                  <div key={index} className="mx-auto">
                    <div className="grid grid-cols-2 py-4">
                      <div>
                        <img
                          className="h-[125px] rounded-md"
                          src={item.img}
                          alt={item.name}
                        />
                        <div className="flex flex-col items-start">
                          <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
                            {item.name}
                          </h4>
                        </div>
                        <div className="max-w-xs">
                          <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                            {item.text}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Selected size:{" "}
                          <span className="ml-2">{item.size}</span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Selected color:{" "}
                          <span
                            className="ml-2 rounded-full px-2"
                            style={{
                              backgroundColor: item.color,
                            }}
                          ></span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Amount: <span className="ml-2">{item.amount}</span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Single Item Price:{" "}
                          <span className="ml-2">${item.price}</span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Total Price:{" "}
                          <span className="ml-2">${item.totalPrice}</span>
                        </p>
                        <div className="pt-4">
                          <Tooltip
                            content="Remove from Cart"
                            placement="bottom"
                          >
                            <Button
                              onClick={() => removeFromCartHandler(item)}
                              size="sm"
                              color="red"
                              ripple={true}
                              variant="filled"
                            >
                              Remove
                            </Button>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </DialogBody>
              <DialogFooter className="flex justify-between items-center">
                <p className="text-black text-base font-inter tracking-normal leading-none pt-2">
                  Cart Total: <span className="ml-2">${totalPrice}</span>
                </p>
                <Button
                  size="md"
                  color="red"
                  ripple={true}
                  variant="filled"
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </DialogFooter>
            </Dialog>
          </>
        ) : (
          <>
            <Dialog
              className="border-0 outline-0"
              open={openModal}
              handler={() => setOpen(false)}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
              }}
            >
              <DialogHeader>Shopping Bag</DialogHeader>
              <DialogBody divider>
                <div>
                  <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
                    Your bag is empty
                  </h1>
                  <p className="text-black text-base font-inter tracking-normal leading-none">
                    Add some products
                  </p>
                </div>
              </DialogBody>
            </Dialog>
          </>
        ))}
    </div>
  );
};

export default Cart;
