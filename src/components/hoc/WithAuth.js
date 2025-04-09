import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const WithAuth = ({ children }) => {
  const select = useSelector((state) => ({
    isAuth: state.auth.isAuth,
  }));
  const navigate = useNavigate();
  useEffect(() => {
    if (!select.isAuth) {
      navigate("/auth");
    }
  }, [select.isAuth]);
  return <div>{children}</div>;
};

export default WithAuth;
