import { AiOutlineUser } from "react-icons/ai";
import { RiFileList3Line } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";
import { FaAngleUp } from "react-icons/fa";

import listIcon from '../../pictures/icons/listIcon.svg';
import mapIcon from '../../pictures/icons/mapIcon.svg';
import userIcon from '../../pictures/icons/userIcon.svg';

// test images
import bg1 from '../../pictures/test/bgtest1.png';
import bg2 from '../../pictures/test/bgtest2.png';
import food1 from '../../pictures/test/food1.png';
import food2 from '../../pictures/test/food2.png';
import food3 from '../../pictures/test/food3.png';
import logocoffe from '../../pictures/test/coffelogo.svg';
import denj1 from '../../pictures/test/denj1.png';
import denj2 from '../../pictures/test/denj2.png';
import denj3 from '../../pictures/test/denj3.png';
import denj4 from '../../pictures/test/denj4.png';
import offer1 from '../../pictures/test/offer1.png';
import offer2 from '../../pictures/test/offer2.png';
import offer3 from '../../pictures/test/offer3.png';

import { useState } from "react";

import { Skeleton } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Grid } from 'swiper';

import { NearestCoffe, Economical, Denj, Offer } from "../../components";

import 'swiper/css';
import 'swiper/css/grid';
import "swiper/css/pagination";




export const Home = () => {
  const [loading, setLoading] = useState(false);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  if (loading) {
    return (
      <main>
        <section className="home">
          <section className="head pt-4 d-flex justify-content-around align-items-center text-center">
            <div>
              <RiFileList3Line />
            </div>
            <div className="d-flex flex-column align-items-center">
              <Skeleton animation="wave" variant="rounded" width={45} height={8} sx={{ borderRadius : '8px' }} className="mb-1" />
              <Skeleton animation="wave" variant="circular" width={21} height={21} />
            </div>
            <div>
              <AiOutlineUser />
            </div>
          </section>

          <section className="d-flex justify-content-between px-3 pt-5">
            <Skeleton animation="wave" variant="rounded" width={82} height={28} sx={{ borderRadius : '8px' }} />
            <Skeleton animation="wave" variant="rounded" width={82} height={28} sx={{ borderRadius : '8px' }} />
            <Skeleton animation="wave" variant="rounded" width={82} height={28} sx={{ borderRadius : '8px' }} />
            <Skeleton animation="wave" variant="rounded" width={82} height={28} sx={{ borderRadius : '8px' }} />
          </section>

          <section className="pt-4 px-3 ps-0">
            <Swiper spaceBetween={20} slidesPerView={"auto"} modules={[Pagination]} pagination={pagination}>
              <SwiperSlide><Skeleton animation="wave" variant="rounded" width={225} height={183} sx={{ borderRadius : '48px' }} /></SwiperSlide>
              <SwiperSlide><Skeleton animation="wave" variant="rounded" width={225} height={183} sx={{ borderRadius : '48px' }} /></SwiperSlide>
              <SwiperSlide><Skeleton animation="wave" variant="rounded" width={225} height={183} sx={{ borderRadius : '48px' }} /></SwiperSlide>
              <SwiperSlide><Skeleton animation="wave" variant="rounded" width={225} height={183} sx={{ borderRadius : '48px' }} /></SwiperSlide>
            </Swiper>
          </section>

          <section className="pt-5 px-3 efficient-section">
            <div className="d-flex justify-content-between pb-3">
              <Skeleton animation="wave" variant="rounded" width={70} height={60} sx={{ borderRadius : '16px' }} className="ms-2" />
              <Skeleton animation="wave" variant="rounded" width='100%' height={60} sx={{ borderRadius : '16px' }} />
            </div>
            <div className="d-flex justify-content-between pb-3">
              <Skeleton animation="wave" variant="rounded" width={70} height={60} sx={{ borderRadius : '16px' }} className="ms-2" />
              <Skeleton animation="wave" variant="rounded" width='100%' height={60} sx={{ borderRadius : '16px' }} />
            </div>
            <div className="d-flex justify-content-between pb-3">
              <Skeleton animation="wave" variant="rounded" width={70} height={60} sx={{ borderRadius : '16px' }} className="ms-2" />
              <Skeleton animation="wave" variant="rounded" width='100%' height={60} sx={{ borderRadius : '16px' }} />
            </div>
          </section>

          <section className="pt-4 px-3">
            <div className="row m-0">
              <div className="col-6 p-2 pb-2"><Skeleton animation="wave" variant="rounded" width='100%' height={164} sx={{ borderRadius : '18px' }} /></div>
              <div className="col-6 p-2 pb-2"><Skeleton animation="wave" variant="rounded" width='100%' height={164} sx={{ borderRadius : '18px' }} /></div>
              <div className="col-6 p-2 pb-2"><Skeleton animation="wave" variant="rounded" width='100%' height={164} sx={{ borderRadius : '18px' }} /></div>
              <div className="col-6 p-2 pb-2"><Skeleton animation="wave" variant="rounded" width='100%' height={164} sx={{ borderRadius : '18px' }} /></div>
            </div>
          </section>

        </section>
      </main>
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
            <h5 className="title my-4">نزدیک ترین ها</h5>
            <Swiper spaceBetween={20} slidesPerView={"auto"}>
              <SwiperSlide><NearestCoffe bg={bg1} name={"کافه دنج نشین"} info={"هر روزه 8 صبح تا 12 شب"} rate={3} /></SwiperSlide>
              <SwiperSlide><NearestCoffe bg={bg2} name={"رستوران ایرانی دنج نشین"} info={"هر روزه 8 صبح تا 12 شب"} rate={2}  /></SwiperSlide>
              <SwiperSlide><NearestCoffe bg={bg1} name={"کافه قدیم"} info={"هر روزه 9 صبح تا 11 شب"} rate={4.3} /></SwiperSlide>
            </Swiper>
          </section>
          {/* nearest coffe slider */}


          {/* Economical coffe slider */}
          <section className="pe-3 ps-0">
            <div className="ps-3 d-flex justify-content-between align-items-center mt-4">
              <h5 className="title">به صرفه ترین ها</h5>
              <p className="show-all">نمایش همه <FaAngleUp /></p>
            </div>
            <Swiper className="py-4" slidesPerView={"auto"} grid={{rows: 3, fill:"row"}} spaceBetween={16} modules={[ Grid, ]}>
              <SwiperSlide><Economical name={"بشقاب ماهی 3 نفره"} image={food1} price={"220,000"} oldPrice={"420,000"} coffe={"کافه رستوران دنج نشین"} rate={"4.2"} logo={logocoffe} /></SwiperSlide>
              <SwiperSlide><Economical name={"کباب کوبیده غول آسا"} image={food2} price={"320,000"} coffe={"کافه رستوران صدر اعظم"} rate={"5"} logo={logocoffe} /></SwiperSlide>
              <SwiperSlide><Economical name={"کیک شکلاتی روز"} image={food3} price={"80,000"} coffe={"کافه قدیم"} rate={"4.1"} /></SwiperSlide>
              <SwiperSlide><Economical name={"بشقاب ماهی 3 نفره"} image={food1} price={"220,000"} oldPrice={"420,000"} coffe={"کافه رستوران دنج نشین"} rate={"4.2"} logo={logocoffe} /></SwiperSlide>
              <SwiperSlide><Economical name={"کباب کوبیده غول آسا"} image={food2} price={"320,000"} oldPrice={"440,000"} coffe={"کافه رستوران صدر اعظم"} rate={"5"} logo={logocoffe} /></SwiperSlide>
              <SwiperSlide><Economical name={"کیک شکلاتی روز"} image={food3} price={"80,000"} oldPrice={""} coffe={"کافه قدیم"} rate={"4.1"} /></SwiperSlide>
            </Swiper>
          </section>
          {/* Economical coffe slider */}


          {/* denj coffe slider */}
          <section className="pe-3 ps-0">
            <div className="ps-3 d-flex justify-content-between align-items-center mt-4">
              <h5 className="title">دنج ترین های بابل <img src={mapIcon} alt="" /></h5>
              <p className="show-all">نمایش همه <FaAngleUp /></p>
            </div>
            <Swiper className="py-4" slidesPerView={"auto"} grid={{rows: 2, fill:"row"}} spaceBetween={16} modules={[ Grid ]}>
              <SwiperSlide><Denj name={"کافه دنج نشین"} bg={denj1} rate={"100"}  /></SwiperSlide>
              <SwiperSlide><Denj name={"کافه رستوران ایتالیایی دنج نشین"} bg={denj2} rate={"10"}  /></SwiperSlide>
              <SwiperSlide><Denj name={"رستوران سنتی دنج نشین"} bg={denj3} rate={"90"}  /></SwiperSlide>
              <SwiperSlide><Denj name={"صبحانه سرا دنج نشین"} bg={denj4} rate={"10"}  /></SwiperSlide>
              <SwiperSlide><Denj name={"کافه رستوران ایتالیایی دنج نشین"} bg={denj2} rate={"10"}  /></SwiperSlide>
              <SwiperSlide><Denj name={"رستوران سنتی دنج نشین"} bg={denj3} rate={"90"}  /></SwiperSlide>
              <SwiperSlide><Denj name={"صبحانه سرا دنج نشین"} bg={denj4} rate={"10"}  /></SwiperSlide>
              
            </Swiper>
          </section>
          {/* denj coffe slider */}


          {/* off coffe slider */}
          <section className="pe-3 ps-0">
            <div className="ps-3 d-flex justify-content-between align-items-center mt-4">
              <h5 className="title">تخفیف دار ها</h5>
              <p className="show-all">نمایش همه <FaAngleUp /></p>
            </div>
            <Swiper className="py-4" slidesPerView={"auto"} spaceBetween={16}>
              <SwiperSlide><Offer name={"بشقاب ماهی 3 نفره"} bg={offer1} off={"90"} price={"220,000"}  /></SwiperSlide>
              <SwiperSlide><Offer name={"اکبر جوجه"} bg={offer2} off={"20"} price={"220,000"}  /></SwiperSlide>
              <SwiperSlide><Offer name={"کباب کوبیده"} bg={offer3} off={"10"} price={"220,000"}  /></SwiperSlide>
              
            </Swiper>
          </section>
          {/* off coffe slider */}

        </section>
      </main>
    );
  }
};
