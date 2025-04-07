import React from "react";
import s from "./style.module.css";

const CartItem = ({ item, onDelete }) => {
  return (
    <div className={s.wrap}>
      <div>{item.id}</div>
      <div>{item.flower.title}</div>
      <div>{item.flower.price}</div>
      <div>{item.quantity}</div>
      <div>{item.amount}</div>
      <button onClick={() => onDelete(item.id)}>Удалить</button>
    </div>
  );
};

export default CartItem;
