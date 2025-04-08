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

const CheckoutContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const select = useSelector((state) => ({
    cart: state.cart.list,
    myId: state.auth.myId,
  }));

  useEffect(() => {
    dispatch(getCart(select.myId));
  }, [select.myId]);

  const [data, setData] = useState({
    name: "",
    city: "",
    street: "",
    house: "",
    flat: "",
  });

  return (
    <div>
      <HeaderContainer />
      <ContainerLayout width={1350}>
        {params.pay === "pay" ? (
          <Pay />
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
                onClick={() => {
                  navigate("pay");
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
