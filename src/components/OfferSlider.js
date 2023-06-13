// test images
import offer1 from "../pictures/test/offer1.png";
import offer2 from "../pictures/test/offer2.png";
import offer3 from "../pictures/test/offer3.png";

import { Offer } from "./Offer";
import { FaAngleUp } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const OfferSlider = () => {
  return (
    <>
      <div className="ps-3 d-flex justify-content-between align-items-center mt-4">
        <h5 className="title">تخفیف دار ها</h5>
        <p className="show-all">
          نمایش همه <FaAngleUp />
        </p>
      </div>
      <Swiper className="py-4" slidesPerView={"auto"} spaceBetween={16}>
        <SwiperSlide>
          <Offer
            name={"بشقاب ماهی 3 نفره"}
            bg={offer1}
            off={"90"}
            price={"220,000"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Offer name={"اکبر جوجه"} bg={offer2} off={"20"} price={"220,000"} />
        </SwiperSlide>
        <SwiperSlide>
          <Offer
            name={"کباب کوبیده"}
            bg={offer3}
            off={"10"}
            price={"220,000"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
