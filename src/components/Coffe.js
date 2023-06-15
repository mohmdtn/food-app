import React from "react";
import { FilterButtonSlider } from "./FilterButtonSlider";
import { CoffeFood } from "./CoffeFood";
import logo from "../pictures/logo-dark.svg";
import deliveryIcon from "../pictures/icons/deliveryIcon.svg";
import profileAddIcon from "../pictures/icons/profileAddIcon.svg";
import mapIcon from "../pictures/icons/mapIcon.svg";
import { AiFillHeart } from "react-icons/ai";

export const Coffe = () => {
  return (
    <section className="coffe">
      <section className="bg">
        <div className="logo"><img src={logo} alt="" /></div>
        <div className="rate"><AiFillHeart className="ms-1" />2</div>
      </section>
      <section className="info mt-5 px-4">
        <div className="py-2">
            <h5>کافه رستوران دنج نشین</h5>
            <img src={deliveryIcon} alt="" />
        </div>
        <div className="py-2">
            <p>مازندران/ بابل/روبه روی دانشگاه نوشیروانی ساختمان پولونیوم...</p>
            <img src={mapIcon} alt="" />
        </div>
        <div className="pt-2 pb-3">
            <h6>شما با دنجنشین کردن این کافه از تخفیف 10% در رسید خود برخوردار میشوید</h6>
            <div><img src={logo} alt="" /></div>
        </div>
        <button className="button"><img src={profileAddIcon} alt="" /></button>
      </section>

      {/* filter buttons */}
      <section className="pe-4 pt-3">
        <FilterButtonSlider />
      </section>
      {/* filter buttons */}

      {/* foods section */}
      <section className="foods px-4 pt-5">
        <h5 className="category-title">غذای دریایی</h5>
        <CoffeFood />
      </section>
      {/* foods section */}

    </section>
  );
};
