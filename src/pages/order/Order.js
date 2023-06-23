import React from "react";
import listWhiteIcon from "../../pictures/icons/listWhiteIcon.svg";
import leaveIcon from "../../pictures/icons/leaveicon.svg";
import { MoreContext } from "../../contexts/more_context";
import { OrderTakeAway, OrderReserve, OrderInPlace } from "../../components";

export const Order = () => {
  const {showOrderPage, order_page} = React.useContext(MoreContext);

  return (
    <main>
      <section className="order">
        <section className="header px-4 py-4">
          {/* page title */}
          <section className="pb-5 px-2 d-flex justify-content-between align-items-center text-center">
            <div><img src={listWhiteIcon} alt="" /></div>
            <h5>تکمیل سفارش</h5>
            <div><img src={leaveIcon} alt="" /></div>
          </section>
          {/* page title */}

          {/* buttons */}
          <section className="d-flex justify-content-between">
            <button className={`${order_page.page === "takeAway" && "active"}`} onClick={() => showOrderPage("takeAway", "all")}>بیرون بر</button>
            <button className={`${order_page.page === "reserve" && "active"}`} onClick={() => showOrderPage("reserve", "time")}>رزرو میز</button>
            <button className={`${order_page.page === "inPlace" && "active"}`} onClick={() => showOrderPage("inPlace", "all")}>میل در محل</button>
          </section>
          {/* buttons */}
        </section>

        <section className="content pt-4">
          <OrderTakeAway />
          <OrderReserve />
          <OrderInPlace />
        </section>
      </section>
    </main>
  );
};
