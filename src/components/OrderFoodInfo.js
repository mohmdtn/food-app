import React from "react";
import { MoreContext } from "../contexts/more_context";
import { BsCheckCircle } from "react-icons/bs";
import userOctagonicon from "../pictures/icons/userOctagonicon.svg";

export const OrderFoodInfo = ({id, name, number, paid, cost, foods}) => {
  const {order_info, showOrderInfo} = React.useContext(MoreContext);

  return (
    <section className="order-food-info">
      <div className={`item ${order_info === id && "active"}`} onClick={() => showOrderInfo(id)}>
        {/* user info */}
        <section>
          <div>
            <h5>{name ? name : <img src={userOctagonicon} alt="" />}</h5>
            <p>{number}</p>
          </div>
          <h6>{cost} {cost && <span>تومان</span>}<BsCheckCircle className={`${paid ? "visible" : "invisible"}`} /></h6>
        </section>
        {/* user info */}

        {/* foods */}
        <section className="sub-item">
          {foods && foods.map((food) => {
            return (
              <div key={food.id}>
                <h5>{food.name}</h5>
                <h6>{food.price} <span>تومان</span></h6>
              </div>
            );
          })}
        </section>
        {/* foods */}
      </div>
    </section>
  );
};
