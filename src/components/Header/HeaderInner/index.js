import React, { useState } from "react";
import icon from "../../../assets/icon.png";
import tulips from "../../../assets/tulips.png";
import cart from "../../../assets/shopping-cart.png";
import s from "./style.module.css";
import ContainerLayout from "../../layouts/container-layout";
import Button from "../../../common/Button";
import { useNavigate } from "react-router";
const HeaderInner = ({ isAuth, profile, logout }) => {
  const navigate = useNavigate();
  const [hide, setHide] = useState(true);
  return (
    <div className={s.wrap}>
      <ContainerLayout
        justify="space-between"
        display="flex"
        alignItems="center"
        width={1350}
      >
        <div onClick={() => navigate("/")} className={s.logo}>
          <img src={tulips} />
        </div>
        <div
          style={{ marginRight: 25 }}
          onClick={() => navigate("/cart")}
          className={s.logo}
        >
          <img src={cart} />
        </div>
        {isAuth ? (
          <div onClick={() => setHide(!hide)} className={s.profile}>
            <span className={s.name}>{profile?.username}</span>
            <img src={icon} />
            {!hide ? (
              <ul className={s.hide}>
                <li onClick={logout} className={s.hide_item}>
                  Выйти
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        ) : (
          <Button onClick={() => navigate("/auth")} value={"Войти"} />
        )}
      </ContainerLayout>
    </div>
  );
};

export default HeaderInner;
