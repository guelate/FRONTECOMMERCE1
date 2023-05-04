/* eslint-disable jsx-a11y/anchor-is-valid */
import { Newsletter_STYLE_DIV_1, Newsletter_STYLE_FORM, Newsletter_STYLE_H3, Newsletter_STYLE_P } from '../utils/Constants/style';
import './full.css'

const Newsletter = ({h3,p,button}) => {
    return(
        
        <div class={Newsletter_STYLE_DIV_1}>
          <div>
            <h3 class={Newsletter_STYLE_H3}>{h3}</h3>
            <p class={Newsletter_STYLE_P}>{p}</p>
          </div>
            <form action="" class={Newsletter_STYLE_FORM}>
            <input name="myInput" />

              {/* <a href="#" class="button">{button}</a> IMPORTATION BUTTON*/}
            </form>
          </div>
        
    );

}
export default Newsletter