import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const FilterButtonSlider = () => {
  return (
    <>
      <Swiper spaceBetween={16} slidesPerView={"auto"}>
        <SwiperSlide><button className="button button-sm">همه</button></SwiperSlide>
        <SwiperSlide><button className="button button-sm">کافه</button></SwiperSlide>
        <SwiperSlide><button className="button button-sm button-not">فست فود</button></SwiperSlide>
        <SwiperSlide><button className="button button-sm button-not">رستوران ایتالیایی</button></SwiperSlide>
        <SwiperSlide><button className="button button-sm button-not">رستوران ایرانی</button></SwiperSlide>
      </Swiper>
    </>
  );
};
