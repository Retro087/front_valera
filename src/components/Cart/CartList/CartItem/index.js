import React from "react";
import s from "./style.module.css";

const CartItem = ({ item, onDelete, updateCart, inCheckout = null }) => {
  return (
    <div className={s.wrap}>
      <div>{item.id}</div>
      <div>{item.flower.title}</div>
      <div>{item.flower.price}</div>
      <div>
        {inCheckout ? (
          <>{item.quantity}</>
        ) : (
          <>
            <span
              onClick={() => {
                updateCart(item.id, item.quantity - 1);
              }}
            >
              -
            </span>
            {item.quantity}
            <span
              onClick={() => {
                updateCart(item.id, item.quantity + 1);
              }}
            >
              +
            </span>
          </>
        )}
      </div>
      <div>{item.amount}</div>
      {inCheckout ? (
        ""
      ) : (
        <button onClick={() => onDelete(item.id)}>Удалить</button>
      )}
    </div>
  );
};

export default CartItem;
