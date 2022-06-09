import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Thumbs } from 'swiper';
import { useState } from 'react';

const Slider = ({ images }) => (
<Swiper
 loop={true}
 spaceBetween={10}
 navigation={true}
 modules={[Navigation, Thumbs]}
 grabCursor={true}
 >
  {images.map((image, index) => (
  <SwiperSlide key={index}>
    <img src={image} alt="slider images" style={{ width:"100%" }} />
  </SwiperSlide>
  ))}
</Swiper>
);

export default Slider;
