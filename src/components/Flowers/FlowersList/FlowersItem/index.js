import React from "react";
import s from "./style.module.css";
import photoNot from "../../../../assets/photonot.png";
import { useNavigate } from "react-router";
import Button from "../../../../common/Button";
const FlowersItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`flowers/${item.id}`)} className={s.wrap}>
      <div className={s.photo}>
        <img
          style={!item.photo ? { width: "45px", height: "45px" } : {}}
          src={item.photo || photoNot}
        />
      </div>

      <h2 className={s.title}>{item.title}</h2>

      <p className={s.descr}>{item.description}</p>

      <span className={s.price}>{item.price} руб.</span>
      {item.stockQuantity ? (
        <Button
          onClick={() => navigate(`flowers/${item.id}`)}
          value={"Посмотреть"}
        />
      ) : (
        <Button value={"Нет в наличии"} />
      )}
    </div>
  );
};

export default FlowersItem;
