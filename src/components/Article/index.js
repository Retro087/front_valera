import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getFlowerById } from "../../store/flowersSlice/flowersSlice";
import HeaderContainer from "../Header";
import ArticleInner from "./ArticleInner";
import ContainerLayout from "../layouts/container-layout";
import { addToCart } from "../../store/cartSlice/cartSlice";

const ArticleContainer = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const select = useSelector((state) => ({
    article: state.flowers.currentFlower,
    myId: state.auth.myId,
  }));
  debugger;
  useEffect(() => {
    dispatch(getFlowerById({ id: params.id, userId: select.myId }));
  }, [params.id, select.myId]);
  const callbacks = {
    addToCart: (quantity, flowerId) => {
      dispatch(addToCart({ userId: select.myId, quantity, flowerId }));
    },
  };
  return (
    <ContainerLayout width={1050}>
      <ArticleInner addToCart={callbacks.addToCart} article={select.article} />
    </ContainerLayout>
  );
};

export default ArticleContainer;
