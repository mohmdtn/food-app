import React from "react";
import listWhiteIcon from "../../pictures/icons/listWhiteIcon.svg";
import leaveIcon from "../../pictures/icons/leaveicon.svg";
import userAddIcon from "../../pictures/icons/profileAddIcon.svg";
import { OrderFoodInfo, OrderAmount } from "../../components";
import { MoreContext } from "../../contexts/more_context";

export const Order = () => {
  const {showOrderPage, order_page} = React.useContext(MoreContext);
  const foods = [
    {
      id: 1,
      name: "زرشک پلو با مرغ",
      price: "140,000",
    },
    {
      id: 2,
      name: "نوشابه کوکا",
      price: "14,000",
    },
    {
      id: 3,
      name: "ماست موسیر",
      price: "22,000",
    },
  ];

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
            <button className={`${order_page.page === "reserve" && "active"}`} onClick={() => showOrderPage("reserve", "all")}>رزرو میز</button>
            <button className={`${order_page.page === "inPlace" && "active"}`} onClick={() => showOrderPage("inPlace", "all")}>میل در محل</button>
          </section>
          {/* buttons */}
        </section>

        <section className="content pt-4">

          <section className="buttons px-4">
            <button className="active">سبد خرید</button>
            <button>سهم من</button>
          </section>

          {/* foods info */}
          <section className="order-food-wrapper my-4">
            <OrderFoodInfo id={1} name={"محمد تقی نسب"} number={"09116916763"} paid={true} cost={"225000"} foods={foods} />
            <OrderFoodInfo id={2} number={"0308208973"} cost={"455000"} foods={foods} />
            <OrderFoodInfo id={3} number={"09116912345"} cost={"55000"} foods={foods} />
            <OrderFoodInfo id={4} name={"آرشام جعفریان"} number={"09111111211"} paid={true} cost={"125000"} foods={foods} />
          </section>
          {/* foods info */}

          <button className="button button-md add-button">
            <img src={userAddIcon} alt="" />
          </button>

          {/* amount */}
          <OrderAmount tax={"12,000"} amount={"1,500,000"} />
          {/* amount */}

        </section>
      </section>
    </main>
  );
};
