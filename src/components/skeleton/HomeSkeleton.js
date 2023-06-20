import listIcon from '../../pictures/icons/listIcon.svg';
import userIcon from '../../pictures/icons/userIcon.svg';

import { Skeleton } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import "swiper/css/pagination";

export const HomeSkeleton = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };
      
  return (
    <main>
        <section className="home">
          <section className="head pt-4 d-flex justify-content-around align-items-center text-center">
            <div>
              <img src={listIcon} alt="" />
            </div>
            <div className="d-flex flex-column align-items-center">
              <Skeleton animation="wave" variant="rounded" width={45} height={8} sx={{ borderRadius : '8px' }} className="mb-1" />
              <Skeleton animation="wave" variant="circular" width={21} height={21} />
            </div>
            <div>
              <img src={userIcon} alt="" />
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
  )
}
