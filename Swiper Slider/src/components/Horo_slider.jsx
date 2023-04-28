import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "../components/Horo_slider.css";

import { Autoplay, EffectFade, Pagination } from "swiper";

import slide_image_1 from "../assets/images/img_1.jpg";
import slide_image_2 from "../assets/images/img_2.jpg";
import slide_image_3 from "../assets/images/img_3.jpg";

const Horo_slider = () => {
  return (
    <>
      <Swiper
        loop={true}
        autoHeight={true}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="slider"
      >
        <SwiperSlide>
          <div className="content">
            <div className="image">
              <img src={slide_image_1} alt="" />
            </div>
            <div className="title-info">
              <span className="price">$39</span>
              <h3 className="title">Feel the tosca color</h3>
              <div className="button">
                <a href="#" className="primary-btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <div className="image">
              <img src={slide_image_2} alt="" />
            </div>
            <div className="title-info">
              <span className="price">$39</span>
              <h3 className="title">Feel the tosca color</h3>
              <div className="button">
                <a href="#" className="primary-btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <div className="image">
              <img src={slide_image_3} alt="" />
            </div>
            <div className="title-info">
              <span className="price">$39</span>
              <h3 className="title">Feel the tosca color</h3>
              <div className="button">
                <a href="#" className="primary-btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="custom-pagination">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </>
  );
};

export default Horo_slider;
