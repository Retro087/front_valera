import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getFlowerById } from "../../store/flowersSlice/flowersSlice";
import HeaderContainer from "../Header";
import ArticleInner from "./ArticleInner";
import ContainerLayout from "../layouts/container-layout";

const ArticleContainer = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const select = useSelector((state) => ({
    article: state.flowers.currentFlower,
  }));
  useEffect(() => {
    dispatch(getFlowerById(params.id));
  }, [params.id]);

  return (
    <ContainerLayout width={1050}>
      <ArticleInner article={select.article} />
    </ContainerLayout>
  );
};

export default ArticleContainer;
