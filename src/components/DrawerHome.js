// test images
import food1 from "../pictures/test/food1.png";
import food2 from "../pictures/test/food2.png";
import food3 from "../pictures/test/food3.png";
import logocoffe from "../pictures/test/coffelogo.svg";
// 
import denj1 from "../pictures/test/denj1.png";
import denj2 from "../pictures/test/denj2.png";
import denj3 from "../pictures/test/denj3.png";
import denj4 from "../pictures/test/denj4.png";
// 
import offer1 from "../pictures/test/offer1.png";
import offer2 from "../pictures/test/offer2.png";
import offer3 from "../pictures/test/offer3.png";
// test images

import React, { useState } from "react";
import { Economical, Denj, Offer } from "./index";
import { MoreContext } from "../contexts/more_context";
import { FaAngleDown } from "react-icons/fa";
import mapIcon from '../pictures/icons/mapIcon.svg';


export const DrawerHome = () => {
  const { showMore, show_more } = React.useContext(MoreContext);

  




  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null);
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
      showMore("100vh", show_more.item)
    }
    if (isDownSwipe){ 
      if (show_more.height === '100vh')
        showMore("70vh", show_more.item);
      else
        showMore(0);
    }
  }


  return (
    <>
      <section className="more px-3" style={{height: show_more.height}} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <section className={`${ show_more.item === 'economical' ? 'd-block' : 'd-none' }`}>
            <div className="sticky-top bg-white pt-4">
                <div className="close-btn">
                <div></div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4" onClick={() => showMore('0', show_more.item)}>
                <h5 className="title">به صرفه ترین ها</h5>
                <p className="show-all">پنهان <FaAngleDown /></p>
              </div>
            </div>

            <div className="col pb-3">
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
            </div>
        </section>

        <section className={`${ show_more.item === 'denj' ? 'd-block' : 'd-none' }`}>
            <div className="sticky-top bg-white pt-4">
              <div className="close-btn">
                <div></div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4" onClick={() => showMore('0', show_more.item)}>
                <h5 className="title">
                    دنج ترین های بابل <img src={mapIcon} alt="" />
                </h5>
                <p className="show-all">پنهان <FaAngleDown /></p>
              </div>
            </div>

            <div className="row">
                <div className="col-6 mb-3">
                    <Denj name={"کافه دنج نشین"} bg={denj1} rate={"100"} />
                </div>

                <div className="col-6 mb-3">
                <Denj name={"رستوران سنتی دنج نشین"} bg={denj3} rate={"90"} />
                </div>

                <div className="col-6 mb-3">
                    <Denj name={"کافه دنج نشین"} bg={denj2} rate={"20"} />
                </div>

                <div className="col-6 mb-3">
                    <Denj name={"کافه دنج نشین"} bg={denj4} rate={"10"} />
                </div>
            </div>

        </section>

        <section className={`${ show_more.item === 'offer' ? 'd-block' : 'd-none' }`}>
            <div className="sticky-top bg-white pt-4">
              <div className="close-btn">
                <div></div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4" onClick={() => showMore('0', show_more.item)}>
                <h5 className="title">
                    تخفیف دار ها
                </h5>
                <p className="show-all">پنهان <FaAngleDown /></p>
              </div>
            </div>

            <div className="row">
                <div className="col-4 mb-3 p-1">
                    <Offer name={"بشقاب ماهی 3 نفره"} bg={offer1} off={"90"} price={"220,000"} />
                </div>

                <div className="col-4 mb-3 p-1">
                    <Offer name={"بشقاب ماهی 3 نفره"} bg={offer2} off={"90"} price={"220,000"} />
                </div>

                <div className="col-4 mb-3 p-1">
                    <Offer name={"بشقاب ماهی 3 نفره"} bg={offer3} off={"90"} price={"220,000"} />
                </div>

                <div className="col-4 mb-3 p-1">
                    <Offer name={"بشقاب ماهی 3 نفره"} bg={offer1} off={"90"} price={"220,000"} />
                </div>
            </div>

        </section>
      </section>
    </>
  );
};
