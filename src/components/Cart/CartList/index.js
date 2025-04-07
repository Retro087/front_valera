import React from "react";
import CartItem from "./CartItem";
import { getAmount } from "../../../utils/getAmount";

const CartList = ({ list, onDelete }) => {
  return (
    <div>
      {list.map((i) => {
        return <CartItem onDelete={onDelete} item={i} />;
      })}
      <hr />
      <div style={{ textAlign: "end" }}>Итого: {getAmount(list)}</div>
    </div>
  );
};

export default CartList;
