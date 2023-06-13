// test images
import denj1 from "../pictures/test/denj1.png";
import denj2 from "../pictures/test/denj2.png";
import denj3 from "../pictures/test/denj3.png";
import denj4 from "../pictures/test/denj4.png";

import { Denj } from "./Denj";
import mapIcon from '../pictures/icons/mapIcon.svg';

import { FaAngleUp } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper";

import "swiper/css";
import "swiper/css/grid";

export const DenjSlider = () => {
  return (
    <>
      <div className="ps-3 d-flex justify-content-between align-items-center mt-4">
        <h5 className="title">
          دنج ترین های بابل <img src={mapIcon} alt="" />
        </h5>
        <p className="show-all">
          نمایش همه <FaAngleUp />
        </p>
      </div>
      <Swiper
        className="py-4"
        slidesPerView={"auto"}
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={16}
        modules={[Grid]}
      >
        <SwiperSlide>
          <Denj name={"کافه دنج نشین"} bg={denj1} rate={"100"} />
        </SwiperSlide>
        <SwiperSlide>
          <Denj
            name={"کافه رستوران ایتالیایی دنج نشین"}
            bg={denj2}
            rate={"10"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Denj name={"رستوران سنتی دنج نشین"} bg={denj3} rate={"90"} />
        </SwiperSlide>
        <SwiperSlide>
          <Denj name={"صبحانه سرا دنج نشین"} bg={denj4} rate={"10"} />
        </SwiperSlide>
        <SwiperSlide>
          <Denj
            name={"کافه رستوران ایتالیایی دنج نشین"}
            bg={denj2}
            rate={"10"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Denj name={"رستوران سنتی دنج نشین"} bg={denj3} rate={"90"} />
        </SwiperSlide>
        <SwiperSlide>
          <Denj name={"صبحانه سرا دنج نشین"} bg={denj4} rate={"10"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
