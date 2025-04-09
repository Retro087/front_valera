import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages, sendMessage } from "../../store/chatSlice";
import BlockTitle from "../../common/block-title";
import ContainerLayout from "../layouts/container-layout";
import HeaderContainer from "../Header";
import Input from "../../common/input";
import Button from "../../common/Button";

const Chat = () => {
  const select = useSelector((state) => ({
    messages: state.chat.messages,
  }));
  const dispatch = useDispatch();
  const [mes, setMes] = useState("");
  useEffect(() => {
    dispatch(getMessages());
  }, []);

  return (
    <div>
      <HeaderContainer />
      <ContainerLayout width={1350}>
        <BlockTitle title={"Чат с поддержкой"} />
        <div
          style={{
            height: 600,
            border: "1px solid #000",
            borderRadius: 10,
            padding: 15,
            overflowY: "scroll",
            marginBottom: 20,
          }}
        >
          {select.messages?.map((i) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: i.from === "user" ? "end" : "start",
                }}
              >
                <div
                  style={{
                    width: "max-content",
                    padding: 15,
                    borderRadius: 10,
                    backgroundColor: i.from === "user" ? "#90EE90" : "gray",
                    marginBottom: 10,
                  }}
                >
                  {i.message}
                </div>
              </div>
            );
          })}
        </div>

        <Input value={mes} onChange={(e) => setMes(e.target.value)} />
        <Button
          onClick={() => {
            dispatch(sendMessage(mes));
            setMes("");
          }}
          value={"Отправить"}
        />
      </ContainerLayout>
    </div>
  );
};

export default Chat;
