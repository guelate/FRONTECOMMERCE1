/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
    return(
        <div class="footer__container bd-grid">

        <div class="footer__box">
          <h3 class="footer__title">E SNEAKERS</h3>
          <p class="footer__description">Nouvelle collection 2023</p>
        </div>

        <div class="footer__box">
          <h3 class="footer__title">EXPLORER</h3>
          <ul>
            <li><a href="#home" class="footer__link">Accueil</a></li>
            <li><a href="#featured" class="footer__link">En vedette</a></li>
            <li><a href="#new" class="footer__link">Nouveauté</a></li>
          </ul>
        </div>

        <div class="footer__box">
          <h3 class="footer__title">SUPPORT</h3>
          <ul>
            <li><a href="#" class="footer__link">Accueil</a></li>
            <li><a href="#" class="footer__link">En vedette</a></li>
            <li><a href="#" class="footer__link">Nouveauté</a></li>
          </ul>
        </div>

        <div class="footer__box">
          <a href="" class="footer__social"><i class='bx bxl-facebook'></i></a> 
          <a href="" class="footer__social"><i class='bx bxl-instagram'></i></a> 
          <a href="" class="footer__social"><i class='bx bxl-twitter'></i></a> 
        </div>
      </div>
    )
}

export default Footer