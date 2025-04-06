import React from "react";
import FlowersItem from "./FlowersItem";
import BlockTitle from "../../../common/block-title";

const FlowersList = ({ list }) => {
  if (!list.length) {
    return <div>Товаров нет</div>;
  }
  return (
    <div>
      <BlockTitle title={"Все цветы"} />
      {list.map((i, index) => {
        return <FlowersItem key={index} item={i} />;
      })}
    </div>
  );
};

export default FlowersList;
