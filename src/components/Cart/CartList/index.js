import React from "react";
import CartItem from "./CartItem";
import { getAmount } from "../../../utils/getAmount";
import Button from "../../../common/Button";
import { useNavigate } from "react-router";

const CartList = ({ list, onDelete, updateCart, inCheckout }) => {
  const navigate = useNavigate();
  return (
    <div>
      {list.map((i) => {
        return (
          <CartItem
            inCheckout={inCheckout}
            updateCart={updateCart}
            onDelete={onDelete}
            item={i}
          />
        );
      })}
      <hr />
      <div style={{ textAlign: "end" }}>Итого: {getAmount(list)}</div>
    </div>
  );
};

export default CartList;
