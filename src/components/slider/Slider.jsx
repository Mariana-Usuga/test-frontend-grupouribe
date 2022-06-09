import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';

import 'swiper/css';
import './slider.scss'

const Slider = ({ images }) => (
<div className='containerSwiper'>
  <Swiper
    loop={true}
    spaceBetween={10}
    navigation={true}
    modules={[Navigation, Thumbs]}
    grabCursor={true}
    >
      {images.map((image, index) => (
      <SwiperSlide key={index}>
        <img src={image} alt="slider images" className='img'/>
      </SwiperSlide>
      ))}
    </Swiper>
</div>
);

export default Slider;
