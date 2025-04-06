import React, { useState } from "react";
import s from "./style.module.css";
import photoNot from "../../../assets/photonot.png";
const ArticleInner = ({ article }) => {
  const [quantity, setQuantity] = useState(1);
  const validate = (e) => {
    if (
      Number(e.target.value) >= 1 &&
      Number(e.target.value) <= Number(article.stockQuantity)
    ) {
      setQuantity(e.target.value);
    }
  };
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
        <div>
          <div
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </div>
          <input
            onChange={(e) => {
              validate(e);
            }}
            value={quantity}
          />
          <div
            onClick={() => {
              if (quantity < article.stockQuantity) {
                setQuantity(quantity + 1);
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
      </div>
    </div>
  );
};

export default ArticleInner;
