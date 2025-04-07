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

/*export default ArticleInner;
import React, { useState } from "react";
import s from "./style.module.css";
import photoNot from "../../../assets/photonot.png";
import Button from "../../../common/Button";
const ArticleInner = ({ article }) => {
  const [quantity, setQuantity] = useState(1);
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
        <span className={s.price}>{price}</span>
        <Button value={"Купить"} />
      </div>
    </div>
  );
};

export default ArticleInner;
*/
