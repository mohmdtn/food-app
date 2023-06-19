import React from "react";
import logoGold from "../pictures/logo-gold.svg";

export const WalletItem = ({ name, time, price, status }) => {
  return (
    <div className="item">
      <div className="d-flex">
        <div className="logo">
          <img src={logoGold} alt="" />
        </div>
        <div className="pe-3">
          <h5>{name}</h5>
          <h6>{time}</h6>
        </div>
      </div>
      <div className="price">
        {price}
        <span>تومان</span>
        {status === "plus" ? <span className="green"> + </span> : <span className="red"> - </span>}
      </div>
    </div>
  );
};
