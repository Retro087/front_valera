import React, { useCallback, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import FlowersList from "./FlowersList";
import { getFlowers } from "../../store/flowersSlice/flowersSlice";
import ContainerLayout from "../layouts/container-layout";

const FlowersContainer = (props) => {
  const dispatch = useDispatch();
  const select = useSelector((state) => ({
    load: state.flowers.load,
    myId: state.auth.myId,

    isAuth: state.auth.isAuth,
    list: state.flowers.list,
    currentPage: state.flowers.currentPage,
    totalPages: state.flowers.totalPages,
    limit: state.flowers.limit,
  }));

  useEffect(() => {
    dispatch(getFlowers({ page: select.currentPage, limit: select.limit }));
  }, []);
  if (select.load) {
    return <div>Загрузка</div>;
  }
  return (
    <>
      <ContainerLayout width={1350}>
        <FlowersList list={select.list} />
      </ContainerLayout>
    </>
  );
};

export default FlowersContainer;
