/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.css'
import hightNike1 from "../assets/img/hightNike1.png"

const SneakerSaleCard = () => {
  return (
    <article className="sneaker">
       {/* parameter here */}
    <div className="sneaker__sale">Vente</div>
    {/* parameter here */}
    <img src={hightNike1} className="sneaker__img" />
      {/* parameter here */}
    <span className="sneaker__name">Nike 1</span>
      {/* parameter here */}
    <span className="sneaker__preci">180 euros</span>
     {/* parameter here */}
    <a href="" className="button__light">Ajouter au panier </a>
    </article>

  );
};

export default SneakerSaleCard;
