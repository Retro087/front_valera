import React, { useState } from "react";
import s from "./style.module.css";
import AuthInput from "../../../common/input";
import Button from "../../../common/Button";
import { useNavigate } from "react-router";
const Registration = (props) => {
  const [data, setData] = useState({ login: "", password: "", name: "" });
  const navigate = useNavigate();
  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <div className={s.rigth}>
          <AuthInput
            value={data.login}
            onChange={(e) => setData({ ...data, login: e.target.value })}
            label={"Логин"}
          />
          <AuthInput
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            label={"Пароль"}
          />
          <AuthInput
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            label={"Имя"}
          />
          <div className={s.btn_block}>
            <button onClick={() => props.reg(data)} className={s.btn}>
              Зарегистрироваться
            </button>
          </div>
          <div
            style={{ marginBottom: 25 }}
            className={s.reg}
            onClick={() => props.toAuth()}
          >
            Войти
          </div>
          <Button onClick={() => navigate("/")} value={"Назад"} />
        </div>
      </div>
    </div>
  );
};

export default Registration;
