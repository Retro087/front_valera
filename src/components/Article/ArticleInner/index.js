import React, { useEffect, useState } from "react";
import s from "./style.module.css";
import photoNot from "../../../assets/photonot.png";
import Button from "../../../common/Button";
import { useNavigate } from "react-router";
const ArticleInner = ({ article, addToCart, updateCart, isAuth }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const [price, setPrice] = useState(article.price);
  const validate = (e) => {
    if (
      Number(e.target.value) >= 0 &&
      Number(e.target.value) <= Number(article.stockQuantity)
    ) {
      setQuantity(e.target.value);
      setPrice(Number(article.price) * Number(e.target.value));
    }
  };

  useEffect(() => {
    if (article) {
      setPrice(Number(article.price));
      if (!article.stockQuantity) {
        debugger;
        setQuantity(0);
      } else {
        setQuantity(1);
      }
    }
  }, [article]);

  debugger;
  return (
    <div className={s.wrap}>
      <div
        style={{ border: !article.photo ? "1px solid #eee" : "" }}
        className={s.photo}
      >
        <img
          style={!article.photo ? { width: "55px", height: "55px" } : {}}
          src={article.photo || photoNot}
        />
      </div>

      <div>
        <h2 className={s.title}>{article.title}</h2>
        <p className={s.descr}>{article.description}</p>
        <div className={s.input_block}>
          <div
            className={s.btn_input}
            onClick={() => {
              if (quantity > 0) {
                setQuantity(quantity - 1);
                setPrice(Number(quantity - 1) * Number(article.price));
              }
            }}
          >
            -
          </div>
          <input
            className={s.input}
            onChange={(e) => {
              validate(e);
            }}
            value={quantity}
          />
          <div
            className={s.btn_input}
            onClick={() => {
              if (quantity < article.stockQuantity) {
                setQuantity(Number(quantity) + 1);
                setPrice(Number(quantity + 1) * Number(article.price));
              }
            }}
          >
            +
          </div>
        </div>
        <span className={s.stock}>
          Количество на складе: {article.stockQuantity}
        </span>
        <span className={s.sku}>Артикул: {article.sku}</span>
        <span className={s.price}>{price} руб.</span>

        {article.stockQuantity ? (
          article.inCart ? (
            <Button value={`В корзине `} />
          ) : (
            <>
              {isAuth ? (
                <Button
                  onClick={() => {
                    addToCart(quantity, article.id);
                  }}
                  value={"Добавить в корзину"}
                />
              ) : (
                <Button
                  onClick={() => {
                    navigate("/auth");
                  }}
                  value={"Добавить в корзину"}
                />
              )}
            </>
          )
        ) : (
          <Button value={"Нет на складе"} />
        )}
      </div>
    </div>
  );
};

export default ArticleInner;
