import React from "react";
import { MoreContext } from "../contexts/more_context";

export const OrderProfileItem = ({ title, coffe, date, error }) => {
  const { showMore } = React.useContext(MoreContext);

  return (
    <section className={`item ${error && 'error'}`} onClick={() => showMore("80vh")}>
      <div className="title">
        <h5>{title}</h5>
        <h6>{coffe}</h6>
      </div>
      <div className="time">
        <h5>{date.day}</h5>
        <p>{date.month}</p>
        <p>{date.year}</p>
      </div>
    </section>
  );
};
