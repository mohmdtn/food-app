import { FaAngleDown } from "react-icons/fa";

import listIcon from '../../pictures/icons/listIcon.svg';
import mapIcon from '../../pictures/icons/mapIcon.svg';
import userIcon from '../../pictures/icons/userIcon.svg';


import React, { useState } from "react";

import { NearestCoffeSlider, EconomicalSlider, DenjSlider, OfferSlider, HomeSkeleton } from "../../components";
import { MoreContext } from "../../contexts/more_context";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Home = () => {
  const { loading, homeFilter, showMore } = React.useContext(MoreContext);






  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null);
  const [moreHeight, setMoreHeight] = useState(0);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50 

  const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientY)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isUpSwipe = distance > minSwipeDistance
    const isDownSwipe = distance < -minSwipeDistance
    if (isUpSwipe){ 
      setMoreHeight("100vh")
    }
    if (isDownSwipe){ 
      setMoreHeight("0")
    }
  }


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
              <SwiperSlide><button className='button button-sm' onClick={() => homeFilter("all")}>همه</button></SwiperSlide>
              <SwiperSlide><button className='button button-sm' onClick={() => homeFilter("coffe")}>کافه</button></SwiperSlide>
              <SwiperSlide><button className='button button-sm button-not' onClick={() => homeFilter("fastfood")}>فست فود</button></SwiperSlide>
              <SwiperSlide><button className='button button-sm button-not' onClick={() => homeFilter("italy")}>رستوران ایتالیایی</button></SwiperSlide>
              <SwiperSlide><button className='button button-sm button-not' onClick={() => homeFilter("iran")}>رستوران ایرانی</button></SwiperSlide>
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

          <section className="more px-3" style={{height: moreHeight}}>
            <div className="sticky-top bg-white pt-4" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
              <div className="close-btn">
                <div></div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="title">به صرفه ترین ها</h5>
                <p className="show-all" onClick={() => setMoreHeight('0')}>پنهان <FaAngleDown /></p>
              </div>
            </div>

            {/* <div className="col pb-3">
              <Economical name={"بشقاب ماهی 3 نفره"} image={food1} price={"220,000"} oldPrice={"420,000"} coffe={"کافه رستوران دنج نشین"} rate={"4.2"} logo={logocoffe} />
            </div>
            <div className="col pb-3">
              <Economical name={"کباب کوبیده غول آسا"} image={food2} price={"320,000"} coffe={"کافه رستوران صدر اعظم"} rate={"5"} logo={logocoffe} />
            </div>
            <div className="col pb-3">
              <Economical name={"کیک شکلاتی روز"} image={food3} price={"80,000"} coffe={"کافه قدیم"} rate={"4.1"} />
            </div>
            <div className="col pb-3">
              <Economical name={"بشقاب ماهی 3 نفره"} image={food1} price={"220,000"} oldPrice={"420,000"} coffe={"کافه رستوران دنج نشین"} rate={"4.2"} logo={logocoffe} />
            </div>
            <div className="col pb-3">
              <Economical name={"کباب کوبیده غول آسا"} image={food2} price={"320,000"} oldPrice={"440,000"} coffe={"کافه رستوران صدر اعظم"} rate={"5"} logo={logocoffe} />
            </div>
            <div className="col pb-3">
              <Economical name={"کیک شکلاتی روز"} image={food3} price={"80,000"} oldPrice={""} coffe={"کافه قدیم"} rate={"4.1"} />
            </div> */}
          </section>
        </section>
      </main>
    );
  }
};
