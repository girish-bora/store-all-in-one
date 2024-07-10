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
import { useTranslation } from "react-i18next";

const Cart = ({ openModal, setOpen }) => {
  const { t } = useTranslation();

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
          <p>{t("cart.alert")}</p>
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
              className="max-h-[500px] overflow-scroll"
            >
              <DialogHeader
                className={
                  darkMode
                    ? "bg-gray-900 text-white text-3xl font-bold"
                    : "text-3xl font-bold"
                }
              >
                {t("cart.filled.head")}
              </DialogHeader>
              <DialogBody
                divider
                className={
                  darkMode
                    ? "bg-gray-800 flex flex-col justify-center items-start"
                    : "flex flex-col justify-center items-start"
                }
                //className="flex flex-col justify-center items-start"
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
                          <h4
                            className={
                              darkMode
                                ? "text-white text-xl font-bold font-inter tracking-normal leading-none pt-2"
                                : "text-black text-xl font-bold font-inter tracking-normal leading-none pt-2"
                            }
                          >
                            {t(`data.storeData.${item.id}.name`)}
                          </h4>
                        </div>
                        <div className="max-w-xs">
                          <p
                            className={
                              darkMode
                                ? "text-white text-xs font-inter tracking-normal leading-none pt-2"
                                : "text-black text-xs font-inter tracking-normal leading-none pt-2"
                            }
                            //className="text-black text-xs font-inter tracking-normal leading-none pt-2"
                          >
                            {t(`data.storeData.${item.id}.text`)}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p
                          className={
                            darkMode
                              ? "text-white text-sm font-inter tracking-normal leading-none pt-2"
                              : "text-black text-sm font-inter tracking-normal leading-none pt-2"
                          }
                          //className="text-black text-sm font-inter tracking-normal leading-none pt-2"
                        >
                          {t("cart.filled.body.item0")}{" "}
                          <span className="ml-2">{item.size}</span>
                        </p>
                        <p
                          className={
                            darkMode
                              ? "text-white text-sm font-inter tracking-normal leading-none pt-2"
                              : "text-black text-sm font-inter tracking-normal leading-none pt-2"
                          }
                          //className="text-black text-sm font-inter tracking-normal leading-none pt-2"
                        >
                          {t("cart.filled.body.item1")}{" "}
                          <span
                            className="ml-2 rounded-full px-2"
                            style={{
                              backgroundColor: item.color,
                            }}
                          ></span>
                        </p>
                        <p
                          className={
                            darkMode
                              ? "text-white text-sm font-inter tracking-normal leading-none pt-2"
                              : "text-black text-sm font-inter tracking-normal leading-none pt-2"
                          }
                          //className="text-black text-sm font-inter tracking-normal leading-none pt-2"
                        >
                          {t("cart.filled.body.item2")}{" "}
                          <span className="ml-2">{item.amount}</span>
                        </p>
                        <p
                          className={
                            darkMode
                              ? "text-white text-sm font-inter tracking-normal leading-none pt-2"
                              : "text-black text-sm font-inter tracking-normal leading-none pt-2"
                          }
                          //className="text-black text-sm font-inter tracking-normal leading-none pt-2"
                        >
                          {t("cart.filled.body.item3")}{" "}
                          <span className="ml-2">${item.price}</span>
                        </p>
                        <p
                          className={
                            darkMode
                              ? "text-white text-sm font-inter tracking-normal leading-none pt-2"
                              : "text-black text-sm font-inter tracking-normal leading-none pt-2"
                          }
                          //className="text-black text-sm font-inter tracking-normal leading-none pt-2"
                        >
                          {t("cart.filled.body.item4")}{" "}
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
                              className="text-sm font-bold"
                            >
                              {t("cart.filled.body.button")}
                            </Button>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </DialogBody>
              <DialogFooter
                className={
                  darkMode
                    ? "bg-gray-900 flex justify-between items-center"
                    : "flex justify-between items-center"
                }
              >
                <p
                  className={
                    darkMode
                      ? "text-white text-md font-bold font-inter tracking-normal leading-none pt-2"
                      : "text-black text-md font-bold font-inter tracking-normal leading-none pt-2"
                  }
                  //className="text-black text-base font-inter tracking-normal leading-none pt-2"
                >
                  {t("cart.filled.foot.total")}{" "}
                  <span className="ml-2">${totalPrice}</span>
                </p>
                <Button
                  size="md"
                  color="red"
                  ripple={true}
                  variant="filled"
                  onClick={placeOrderHandler}
                  className="text-md font-bold"
                >
                  {t("cart.filled.foot.button")}
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
              <DialogHeader
                className={
                  darkMode
                    ? "bg-gray-900 flex flex-col justify-center items-start"
                    : "flex flex-col justify-center items-start"
                }
              >
                <p
                  className={
                    darkMode
                      ? "text-white text-3xl font-bold font-inter tracking-normal leading-none pt-2"
                      : "text-black text-3xl font-bold font-inter tracking-normal leading-none pt-2"
                  }
                >
                  {t("cart.empty.head")}
                </p>
              </DialogHeader>
              <DialogBody
                divider
                className={
                  darkMode
                    ? "bg-gray-800 flex flex-col justify-center items-start"
                    : "flex flex-col justify-center items-start"
                }
              >
                <div>
                  <h1
                    className={
                      darkMode
                        ? "text-white text-3xl font-bold font-inter tracking-normal leading-none pt-2"
                        : "text-black text-3xl font-bold font-inter tracking-normal leading-none pt-2"
                    }
                  >
                    {t("cart.empty.body")}
                  </h1>
                  <p
                    className={
                      darkMode
                        ? "text-white text-base font-inter tracking-normal leading-none pt-2"
                        : "text-black text-base font-inter tracking-normal leading-none pt-2"
                    }
                  >
                    {t("cart.empty.foot")}
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
