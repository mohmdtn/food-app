import React from "react";
import listWhiteIcon from "../../pictures/icons/listWhiteIcon.svg";
import leaveIcon from "../../pictures/icons/leaveicon.svg";
import userAddIcon from "../../pictures/icons/profileAddIcon.svg";
import { OrderFoodInfo } from "../../components";

export const Order = () => {
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
            <button className="active">بیرون بر</button>
            <button className="">رزرو میز</button>
            <button className="">میل در محل</button>
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

          {/* cost informations */}
          <section className="cost px-4 pb-3">
            <section className="tax mb-1">
              <h6>مالیات:</h6>
              <p>12,000 <span>تومان</span></p>
            </section>
            <section className="amount">
              <h5>مجموع:</h5>
              <p>
                1,500,00
                <span>تومان</span>
              </p>
              <button className="button">ادامه</button>
            </section>
          </section>
          {/* cost informations */}
          
        </section>
      </section>
    </main>
  );
};
