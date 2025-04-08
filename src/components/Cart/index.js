import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCart,
  getCart,
  updateCart,
} from "../../store/cartSlice/cartSlice";
import FlowersList from "../Flowers/FlowersList";
import BlockTitle from "../../common/block-title";
import ContainerLayout from "../layouts/container-layout";
import CartList from "./CartList";
import HeaderContainer from "../Header";
import Button from "../../common/Button";
import { useNavigate } from "react-router";

const CartContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const select = useSelector((state) => ({
    list: state.cart.list,
    amount: state.cart.amount,
    myId: state.auth.myId,
  }));

  useEffect(() => {
    if (select.myId) {
      dispatch(getCart(select.myId));
    }
  }, [select.myId]);

  const callbacks = {
    onDelete: (id) => {
      dispatch(deleteCart(id));
    },
    updateCart: (id, quantity) => {
      dispatch(updateCart({ id: id, quantity }));
    },
  };
  return (
    <>
      <HeaderContainer />
      <ContainerLayout width={1350}>
        <BlockTitle title={"Корзина"} />
        {select.list.length ? (
          <>
            <CartList
              updateCart={callbacks.updateCart}
              onDelete={callbacks.onDelete}
              list={select.list}
            />
            <Button onClick={() => navigate("/checkout")} value={"Оформить"} />
          </>
        ) : (
          <div>Корзина пуста</div>
        )}
      </ContainerLayout>
    </>
  );
};

export default CartContainer;
