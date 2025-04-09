import React from "react";
import { useDispatch, useSelector } from "react-redux";

import HeaderInner from "./HeaderInner";
import { logOut } from "../../store/authSlice/authSlice";

const HeaderContainer = () => {
  const select = useSelector((state) => ({
    isAuth: state.auth.isAuth,
    profile: state.auth.profile,
  }));
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logOut());
  };

  return (
    <>
      <HeaderInner
        logout={logout}
        profile={select.profile}
        isAuth={select.isAuth}
      />
    </>
  );
};

export default HeaderContainer;
