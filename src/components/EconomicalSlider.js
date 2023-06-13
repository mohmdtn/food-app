// test images
import food1 from "../pictures/test/food1.png";
import food2 from "../pictures/test/food2.png";
import food3 from "../pictures/test/food3.png";
import logocoffe from "../pictures/test/coffelogo.svg";

import { Economical } from "./Economical";

import { FaAngleUp } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from 'swiper'

import "swiper/css";
import 'swiper/css/grid';

export const EconomicalSlider = () => {
  return (
    <>
      <div className="ps-3 d-flex justify-content-between align-items-center mt-4">
        <h5 className="title">به صرفه ترین ها</h5>
        <p className="show-all">
          نمایش همه <FaAngleUp />
        </p>
      </div>
      <Swiper
        className="py-4"
        slidesPerView={"auto"}
        grid={{ rows: 3, fill: "row" }}
        spaceBetween={16}
        modules={[Grid]}
      >
        <SwiperSlide>
          <Economical
            name={"بشقاب ماهی 3 نفره"}
            image={food1}
            price={"220,000"}
            oldPrice={"420,000"}
            coffe={"کافه رستوران دنج نشین"}
            rate={"4.2"}
            logo={logocoffe}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Economical
            name={"کباب کوبیده غول آسا"}
            image={food2}
            price={"320,000"}
            coffe={"کافه رستوران صدر اعظم"}
            rate={"5"}
            logo={logocoffe}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Economical
            name={"کیک شکلاتی روز"}
            image={food3}
            price={"80,000"}
            coffe={"کافه قدیم"}
            rate={"4.1"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Economical
            name={"بشقاب ماهی 3 نفره"}
            image={food1}
            price={"220,000"}
            oldPrice={"420,000"}
            coffe={"کافه رستوران دنج نشین"}
            rate={"4.2"}
            logo={logocoffe}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Economical
            name={"کباب کوبیده غول آسا"}
            image={food2}
            price={"320,000"}
            oldPrice={"440,000"}
            coffe={"کافه رستوران صدر اعظم"}
            rate={"5"}
            logo={logocoffe}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Economical
            name={"کیک شکلاتی روز"}
            image={food3}
            price={"80,000"}
            oldPrice={""}
            coffe={"کافه قدیم"}
            rate={"4.1"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
