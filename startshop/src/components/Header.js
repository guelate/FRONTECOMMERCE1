/* eslint-disable jsx-a11y/anchor-is-valid */

import './full.css'

const Header = () => {

    return(
        <header class="" id="header">
        <nav class="">

       
          <a href="#" class="nav__logo">E SNEAKERS</a>

          <div class="nav__menu" id="nav-menu">

            <ul class="nav__list">

            <li class="nav__item">
                <a href="#home" class="nav__link active">S'identifier</a>
              </li>

              <li class="nav__item">
                <a href="#home" class="nav__link active">Accueil</a>
              </li>

              <li class="nav__item">
                <a href="#featured" class="nav__link">En vedette</a>
              </li>

              <li class="nav__item">
                <a href="./shop.html" class="nav__link">Boutique</a>
              </li>

            </ul>

          </div>

          <div class="nav__shop">
            <i class="bx bx-shopping-bag"></i>
          </div>

        </nav>
      </header>
    )

}
export default Header