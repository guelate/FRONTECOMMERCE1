import {
    Carousel_STYLE_CONTAINER,
  Carousel_STYLE_SPAN_1,
  Carousel_STYLE_SPAN_2,
  Carousel_STYLE_SPAN_3,
  Carousel_STYLE_SPAN_4,
  Carousel_STYLE_SPAN_5,
} from "../utils/Constants/style";

import "./style.css";

const Carousel = ({ Span_1, Span_2, Span_3, Span_4, arrow }) => {
  return (
    <div class={Carousel_STYLE_CONTAINER}>
      <div>
        <span class={Carousel_STYLE_SPAN_1}>{Span_1}</span>
        <span class={Carousel_STYLE_SPAN_2}>{Span_2}</span>
        <span class={Carousel_STYLE_SPAN_3}>{Span_3}</span>
        <span class={Carousel_STYLE_SPAN_4}>{Span_4}</span>
        <span class={Carousel_STYLE_SPAN_5}>{arrow}</span>
      </div>
    </div>
  );
};
export default Carousel;
