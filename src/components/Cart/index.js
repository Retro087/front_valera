import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getCart } from "../../store/cartSlice/cartSlice";
import FlowersList from "../Flowers/FlowersList";
import BlockTitle from "../../common/block-title";
import ContainerLayout from "../layouts/container-layout";
import CartList from "./CartList";
import HeaderContainer from "../Header";

const CartContainer = () => {
  const dispatch = useDispatch();
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
  };
  return (
    <>
      <HeaderContainer />
      <ContainerLayout width={1350}>
        <BlockTitle title={"Корзина"} />
        {select.list.length ? (
          <CartList onDelete={callbacks.onDelete} list={select.list} />
        ) : (
          <div>Корзина пуста</div>
        )}
      </ContainerLayout>
    </>
  );
};

export default CartContainer;
