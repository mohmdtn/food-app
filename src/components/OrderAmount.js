import React from "react";

export const OrderAmount = ({tax, amount}) => {
  return (
    <section className="cost px-4 pb-3">
      <section className="tax mb-1">
        <h6>مالیات:</h6>
        <p>{tax} <span>تومان</span></p>
      </section>
      <section className="amount">
        <h5>مجموع:</h5>
        <p>
          {amount}
          <span>تومان</span>
        </p>
        <button className="button">ادامه</button>
      </section>
    </section>
  );
};
