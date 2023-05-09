/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  SneakerProductCard_STYLE_A_HREF,
  SneakerProductCard_STYLE_CONTAINER,
  SneakerProductCard_STYLE_IMG,
  SneakerProductCard_STYLE_SPAN_1,
  SneakerProductCard_STYLE_SPAN_2,
} from "../utils/Constants/style";
import "./style.css";

const SneakerProductCard = ({ Img, Model, Price, Shopping_cart }) => {
    
  return (
    <article class={SneakerProductCard_STYLE_CONTAINER}>
      <img
        src="assets/img/yeezy1.png"
        alt=""
        class={SneakerProductCard_STYLE_IMG}
      />
      <span class={SneakerProductCard_STYLE_SPAN_1}>{Model}</span>
      <span class={SneakerProductCard_STYLE_SPAN_2}>{Price}</span>
      <a href="" class={SneakerProductCard_STYLE_A_HREF}>
        {Shopping_cart}
      </a>
    </article>
  );
};

export default SneakerProductCard;
