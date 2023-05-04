/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import hightNike1 from "../assets/img/hightNike1.png";
import {
  SneakerSaleCard_STYLE_ARTICLE,
  SneakerSaleCard_STYLE_DIV_1,
  SneakerSaleCard_STYLE_IMG,
} from "../utils/Constants/style";

const SneakerSaleCard = ({ vente, model, price, misc }) => {
  return (
    <article class={SneakerSaleCard_STYLE_ARTICLE}>
      <div class={SneakerSaleCard_STYLE_DIV_1}>{vente}</div>
      <img src={hightNike1} class={SneakerSaleCard_STYLE_IMG} />
      <span class="sneaker__name">{model}</span>
      <span class="sneaker__preci">{price}</span>
      <a href="" class="button__light">
        {misc}
      </a>
    </article>
  );
};

export default SneakerSaleCard;

//reprendre l'animation des cartes nouveautés & ne pas faire la partie nouveauté
//constante pour les couleurs et le style
