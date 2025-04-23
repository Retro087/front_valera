import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartList from "../Cart/CartList";
import ContainerLayout from "../layouts/container-layout";
import HeaderContainer from "../Header";
import Input from "../../common/input";
import Button from "../../common/Button";
import { useNavigate, useParams } from "react-router";
import { getCart } from "../../store/cartSlice/cartSlice";
import Pay from "./Pay";
import { clearOrder, createOrder } from "../../store/orderSlice/orderSlice";

const CheckoutContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const select = useSelector((state) => ({
    cart: state.cart.list,
    myId: state.auth.myId,
    order: state.order.orderData,
  }));
  const [pay, setPay] = useState(false);
  useEffect(() => {
    if (select.myId) {
      dispatch(getCart(select.myId));
    }
  }, [select.myId]);

  const [data, setData] = useState({
    name: "",
    city: "",
    street: "",
    house: "",
    flat: "",
  });

  if (!select.cart.length) {
    navigate("/");
  }

  useEffect(() => {
    if (select.order) {
      setTimeout(() => {
        navigate("/");
        dispatch(clearOrder());
      }, 10000);
    }
  }, [select.order]);

  if (select.order) {
    return (
      <div
        style={{
          marginTop: 100,
          padding: 15,
          width: "max-content",
          border: "1px solid black",
          margin: "100px auto",
          borderRadius: 10,
        }}
      >
        {select.order.shippingAddress.name}, Ваш заказ успешно оформлен.
        <p>
          Ожидайте доставку. Ваш заказ привезут по адресу:{" "}
          {select.order.shippingAddress.city},{" "}
          {select.order.shippingAddress.street},
          {select.order.shippingAddress.house},{" "}
          {select.order.shippingAddress.flat}
        </p>
        <button onClick={() => navigate("/")}>На главную</button>
      </div>
    );
  }
  return (
    <div>
      <HeaderContainer />
      <ContainerLayout width={1350}>
        {pay ? (
          <Pay
            onPay={(paymentData) => {
              dispatch(
                createOrder({
                  userId: select.myId,
                  paymentData,
                  shippingAddress: data,
                })
              );
            }}
          />
        ) : (
          <>
            <CartList inCheckout={true} list={select.cart} />
            <form>
              <Input
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                label={"Имя"}
              />
              <Input
                value={data.city}
                onChange={(e) => setData({ ...data, city: e.target.value })}
                label={"Город"}
              />
              <Input
                value={data.street}
                onChange={(e) => setData({ ...data, street: e.target.value })}
                label={"Улица"}
              />
              <Input
                value={data.house}
                onChange={(e) => setData({ ...data, house: e.target.value })}
                label={"Дом"}
              />
              <Input
                value={data.flat}
                onChange={(e) => setData({ ...data, flat: e.target.value })}
                label={"Квартира"}
              />
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setPay(true);
                }}
                value={"Дальше"}
              />
            </form>
          </>
        )}
      </ContainerLayout>
    </div>
  );
};

export default CheckoutContainer;
