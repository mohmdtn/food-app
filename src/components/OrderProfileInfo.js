import React from "react";
import coinsIcon from "../pictures/icons/coinsIcon.svg";
import usersIcon from "../pictures/icons/usersIcon.svg";
import { OrderFoodInfo } from "./OrderFoodInfo";

export const OrderProfileInfo = () => {
  const foods = [
    {
      "id": 1,
      "name": "زرشک پلو با مرغ",
      "price": "140,000"
    },
    {
      "id": 2,
      "name": "نوشابه کوکا",
      "price": "14,000"
    },
    {
      "id": 3,
      "name": "ماست موسیر",
      "price": "22,000"
    }
  ];

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
      <section className="page-content order-food-info">
        <OrderFoodInfo id={1} name={"محمد تقی نسب"} number={"09116916763"} paid={true} cost={"225000"} foods={foods} />
        <OrderFoodInfo id={2} number={"09116916763"} cost={"455000"} foods={foods} />
        <OrderFoodInfo id={3} number={"09116912345"} cost={"455000"} foods={foods} />
        <OrderFoodInfo id={4} name={"آرشام جعفریان"} number={"09111111211"} paid={true} cost={"125000"} foods={foods} />
      </section>
    </section>
  );
};
