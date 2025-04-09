import React, { useState } from "react";
import Input from "../../../common/input";
import Button from "../../../common/Button";

const Pay = ({ onPay }) => {
  const [payData, setPayData] = useState({ num: "", date: "", code: "" });
  return (
    <form>
      <Input
        onChange={(e) => setPayData({ ...payData, num: e.target.value })}
        value={payData.num}
        label={"Номер карты"}
      />
      <Input
        onChange={(e) => setPayData({ ...payData, date: e.target.value })}
        value={payData.date}
        label={"Дата"}
      />
      <Input
        onChange={(e) => setPayData({ ...payData, code: e.target.value })}
        value={payData.code}
        label={"Код"}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          onPay(payData);
        }}
        value={"Оплатить"}
      />
    </form>
  );
};

export default Pay;
