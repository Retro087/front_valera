import React, { useState } from "react";
import s from "./style.module.css";

import Input from "../../../common/input";
const Login = (props) => {
  const [data, setData] = useState({ login: "", password: "" });

  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <div className={s.rigth}>
          <Input
            value={data.login}
            onChange={(e) => setData({ ...data, login: e.target.value })}
            label={"Логин"}
          />
          <Input
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            label={"Пароль"}
          />
          <div onClick={() => props.auth(data)} className={s.btn_block}>
            <button className={s.btn}>Войти</button>
          </div>

          <div className={s.reg} onClick={props.toReg}>
            Зарегистрироваться
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
