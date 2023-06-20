import React from "react";
import coinsIcon from "../pictures/icons/coinsIcon.svg";
import usersIcon from "../pictures/icons/usersIcon.svg";

export const OrderProfileInfo = () => {
  return (
    <section className="order-info">
      <section className="head pt-5 pb-3">
        <div>
          <img src={usersIcon} alt="" />
          <h5>14</h5>
          <p>نفر</p>
        </div>
        <div>
          <img src={coinsIcon} alt="" />
          <h5>1,700,000</h5>
          <p>تومان</p>
        </div>
      </section>
      <section className="page-content">
        <div className="item">
            <div>
                <h5>محمد تقی نسب</h5>
                <p>09116916763</p>
            </div>
            <h6>225000 <span>تومان</span></h6>
        </div>
        <div className="item">
            <div>
                <h5>محمد تقی نسب</h5>
                <p>09116916763</p>
            </div>
            <h6>225000 <span>تومان</span></h6>
        </div>
        <div className="item">
            <div>
                <h5>محمد تقی نسب</h5>
                <p>09116916763</p>
            </div>
            <h6>225000 <span>تومان</span></h6>
        </div>
      </section>
    </section>
  );
};
