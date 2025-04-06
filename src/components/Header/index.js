import React from "react";
import { useSelector } from "react-redux";

import HeaderInner from "./HeaderInner";

const HeaderContainer = () => {
  const select = useSelector((state) => ({
    isAuth: state.auth.isAuth,
    profile: state.auth.profile,
  }));
  return (
    <>
      <HeaderInner profile={select.profile} isAuth={select.isAuth} />
    </>
  );
};

export default HeaderContainer;
