import React from "react";
import { OrderFoodInfo, OrderAmount } from "../components";
import { MoreContext } from "../contexts/more_context";
import userAddIcon from "../pictures/icons/profileAddIcon.svg";

export const OrderInPlace = () => {
  const { showOrderPage, order_page, invateModal } = React.useContext(MoreContext);
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
    <section className={`flex-cstm ${order_page.page === "inPlace" ? "d-flex" : "d-none"}`}>
      {/* change sub page buttons */}
      <section className="buttons px-4 pb-3">
        <button className={`${order_page.sub === "all" && "active"}`} onClick={() => showOrderPage("inPlace", "all")}>سبد خرید</button>
        <button className={`${order_page.sub === "me" && "active"}`} onClick={() => showOrderPage("inPlace", "me")}>سهم من</button>
      </section>
      {/* change sub page buttons */}

      {/* all */}
      <section className={`justify-content-between flex-column flex-grow-1 ${order_page.sub === "all" ? "d-flex" : "d-none"}`}>
        {/* foods info */}
        <section className="order-food-wrapper mb-4">
          <OrderFoodInfo id={1} name={"محمد تقی نسب"} number={"09116916763"} paid={true} cost={"225000"} foods={foods} />
          <OrderFoodInfo id={4} name={"آرشام جعفریان"} number={"09111111211"} paid={true} cost={"125000"} foods={foods} />
        </section>
        {/* foods info */}

        <button className="button button-md add-button" onClick={() => invateModal(true)}>
          <img src={userAddIcon} alt="" />
        </button>

        {/* amount */}
        <OrderAmount tax={"12,000"} amount={"1,500,000"} />
        {/* amount */}
      </section>

      {/* me */}
      <section className={`justify-content-between flex-column flex-grow-1 me ${order_page.sub === "me" ? "d-flex" : "d-none"}`}>
        {/* foods info */}
        <section className="sub-item px-3">
          {foods.map((food) => {
            return (
              <div key={food.id}>
                <h5>{food.name}</h5>
                <h6>{food.price} <span>تومان</span></h6>
              </div>
            );
          })}
        </section>
        {/* foods info */}

        {/* amount */}
        <OrderAmount tax={"8,000"} amount={"430,000"} />
        {/* amount */}
      </section>
    </section>
  );
};
