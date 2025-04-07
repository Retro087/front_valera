import React from "react";
import FlowersItem from "./FlowersItem";
import BlockTitle from "../../../common/block-title";
import s from "./style.module.css";
import ContainerLayout from "../../layouts/container-layout";
const FlowersList = ({ list }) => {
  if (!list.length) {
    return <div>Товаров нет</div>;
  }
  return (
    <ContainerLayout width={1350}>
      <div className={s.list}>
        {list.map((i, index) => {
          return <FlowersItem key={index} item={i} />;
        })}
      </div>
    </ContainerLayout>
  );
};

export default FlowersList;
