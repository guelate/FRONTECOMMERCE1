/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.css'
import hightNike1 from "../assets/img/hightNike1.png"

const SneakerSaleCard = () => {
  return (
    <article class="relative flex flex-col items-center p-8 bg-gray-50 rounded-lg	transition duration-300 w-auto hover:-translate-y-2">
       {/* parameter here: constant classname & vente*/}
    <div class="absolute left-0.5 bg-black text-[#ffff] py-1 px-2 rounded text-xl -rotate-90 tracking-wider">Vente</div>
    {/* parameter here: constant classname & vente*/}
    <img src={hightNike1} class="" />
      {/* parameter here: constant classname & vente*/}
    <span className="sneaker__name">Nike 1</span>
      {/* parameter here: constant classname & vente */}
    <span className="sneaker__preci">180 euros</span>
     {/* parameter here: constant classname & vente*/}
    <a href="" className="button__light">Ajouter au panier </a>
    </article>

  );
};

export default SneakerSaleCard;

//reprendre l'animation des cartes nouveautés & ne pas faire la partie nouveauté
//constante pour les couleurs et le style 