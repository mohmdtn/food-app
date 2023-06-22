import React from "react";
import coinsIcon from "../pictures/icons/coinsIcon.svg";
import usersIcon from "../pictures/icons/usersIcon.svg";
import { MoreContext } from "../contexts/more_context";

export const OrderProfileInfo = () => {
  const {order_info, showOrderInfo} = React.useContext(MoreContext);

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

        <div className={`item ${order_info === 1 && "active"}`} onClick={() => showOrderInfo(1)}>
          <section>
            <div>
              <h5>محمد تقی نسب</h5>
              <p>09116916763</p>
            </div>
            <h6>225000 <span>تومان</span></h6>
          </section>
          <section className="sub-item">
            <div>
              <h5>زرشک پلو با مرغ</h5>
              <h6>225000 <span>تومان</span></h6>
            </div>
            <div>
              <h5>نوشابه</h5>
              <h6>225000 <span>تومان</span></h6>
            </div>
            <div>
              <h5>ماست</h5>
              <h6>225000 <span>تومان</span></h6>
            </div>
          </section>
        </div>


        <div className={`item ${order_info === 2 && "active"}`} onClick={() => showOrderInfo(2)}>
          <section>
            <div>
              <h5>محمد تقی نسب</h5>
              <p>09116916763</p>
            </div>
            <h6>225000 <span>تومان</span></h6>
          </section>
          <section className="sub-item">
            <div>
              <h5>زرشک پلو با مرغ</h5>
              <h6>225000 <span>تومان</span></h6>
            </div>
            <div>
              <h5>نوشابه</h5>
              <h6>225000 <span>تومان</span></h6>
            </div>
            <div>
              <h5>ماست</h5>
              <h6>225000 <span>تومان</span></h6>
            </div>
          </section>
        </div>

        
        <div className={`item ${order_info === 3 && "active"}`} onClick={() => showOrderInfo(3)}>
          <section>
            <div>
              <h5>محمد تقی نسب</h5>
              <p>09116916763</p>
            </div>
            <h6>225000 <span>تومان</span></h6>
          </section>
          <section className="sub-item">
            <div>
              <h5>زرشک پلو با مرغ</h5>
              <h6>225000 <span>تومان</span></h6>
            </div>
            <div>
              <h5>نوشابه</h5>
              <h6>225000 <span>تومان</span></h6>
            </div>
            <div>
              <h5>ماست</h5>
              <h6>225000 <span>تومان</span></h6>
            </div>
          </section>
        </div>
        
      </section>
    </section>
  );
};
