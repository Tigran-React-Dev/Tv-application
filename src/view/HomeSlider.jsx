import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../assets/style/slider.scss";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { useSelector,useDispatch } from "react-redux";
import { selectVideo } from "../components/redux/TVaction";

export default function HomeSlider() {
    const dispath= useDispatch()
  const activeCategory = useSelector(
    ({ TVreducer }) => TVreducer.activeCategory
  );
  return (
    <>
      <Swiper
        slidesPerView={8}
        spaceBetween={5}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {activeCategory.map((item) => {
          return (
            <SwiperSlide key={item.Id} onClick={()=>{
                dispath(selectVideo(item.Id))
               }}>
              <img
               
              className="slideritem"
                src={`http://localhost:5173/src/assets/image/${item.CoverImage}`}
                alt={item.Description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
