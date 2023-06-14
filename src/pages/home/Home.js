import listIcon from '../../pictures/icons/listIcon.svg';
import mapIcon from '../../pictures/icons/mapIcon.svg';
import userIcon from '../../pictures/icons/userIcon.svg';


import React from "react";

import { NearestCoffeSlider, EconomicalSlider, DenjSlider, OfferSlider, HomeSkeleton, ShowMoreHome } from "../../components";
import { MoreContext } from "../../contexts/more_context";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Home = () => {
  const { loading } = React.useContext(MoreContext);


  if (loading) {
    return (
      <HomeSkeleton />
    );
  } 
  
  else {
    return (
      <main>
        <section className="home">
          <section className="head pt-4 d-flex justify-content-around align-items-center text-center">
            <div>
              <img src={listIcon} alt="" />
            </div>
            <div>
              <p className="mb-1 fw-bold">مازندران/ بابل/ شهرک بهزاد...</p>
              <img src={mapIcon} alt="" />
            </div>
            <div>
              <img src={userIcon} alt="" />
            </div>
          </section>

          {/* filter buttons slider */}
          <section className="pt-4 px-3">
            <Swiper spaceBetween={16} slidesPerView={"auto"}>
              <SwiperSlide><button className='button button-sm'>همه</button></SwiperSlide>
              <SwiperSlide><button className='button button-sm'>کافه</button></SwiperSlide>
              <SwiperSlide><button className='button button-sm button-not'>فست فود</button></SwiperSlide>
              <SwiperSlide><button className='button button-sm button-not'>رستوران ایتالیایی</button></SwiperSlide>
              <SwiperSlide><button className='button button-sm button-not'>رستوران ایرانی</button></SwiperSlide>
            </Swiper>
          </section>
          {/* filter buttons slider */}

          {/* nearest coffe slider */}
          <section className="px-3 ps-0">
            <NearestCoffeSlider />
          </section>
          {/* nearest coffe slider */}


          {/* Economical coffe slider */}
          <section className="pe-3 ps-0">
            <EconomicalSlider />
          </section>
          {/* Economical coffe slider */}


          {/* denj coffe slider */}
          <section className="pe-3 ps-0">
            <DenjSlider />
          </section>
          {/* denj coffe slider */}


          {/* off coffe slider */}
          <section className="pe-3 ps-0">
            <OfferSlider />
          </section>
          {/* off coffe slider */}

          {/* show moer */}
          <ShowMoreHome />
          {/* show moer */}
        </section>
      </main>
    );
  }
};
