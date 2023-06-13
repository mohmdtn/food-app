// test images
import bg1 from "../pictures/test/bgtest1.png";
import bg2 from "../pictures/test/bgtest2.png";
import { NearestCoffe } from "./NearestCoffe";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const NearestCoffeSlider = () => {
  return (
    <>
      <h5 className="title my-4">نزدیک ترین ها</h5>
      <Swiper spaceBetween={20} slidesPerView={"auto"}>
        <SwiperSlide>
          <NearestCoffe
            bg={bg1}
            name={"کافه دنج نشین"}
            info={"هر روزه 8 صبح تا 12 شب"}
            rate={3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NearestCoffe
            bg={bg2}
            name={"رستوران ایرانی دنج نشین"}
            info={"هر روزه 8 صبح تا 12 شب"}
            rate={2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NearestCoffe
            bg={bg1}
            name={"کافه قدیم"}
            info={"هر روزه 9 صبح تا 11 شب"}
            rate={4.3}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
