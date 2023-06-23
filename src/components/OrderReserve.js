import React from "react";
import { OrderFoodInfo, OrderAmount } from "../components";
import { MoreContext } from "../contexts/more_context";
import userAddIcon from "../pictures/icons/profileAddIcon.svg";

import {
    Picker,
    format,
    newDate,
    currentDateObject,
  } from '@persian-tools/persian-mobile-datepicker';

export const OrderReserve = () => {
  const { showOrderPage, order_page } = React.useContext(MoreContext);
  const config =  {
    year: {
      caption: {
        text: 'سال',
      },
    },
    month: {
      caption: {
        text: 'ماه',
      },
    },
    day: {
      caption: {
        text: 'روز',
      },
    },
    hour: {
      caption: {
        text: "ساعت"
      },
    },
    minute: {
      caption: {
        text: "دقیقه"
      },
    }
  };

  const [showPicker, setShowPicker] = React.useState(false);
  const [selectedDateValue, setSelectedDateValue] = React.useState();
  // eslint-disable-next-line
  const [selectedDateEvents, setSelectedDateEvents] = React.useState([]);

  function handleSubmit(selectedDate) {
    console.log(selectedDate);
    const date = `${selectedDate.object.hour + ":" + selectedDate.object.minute + " " + format(selectedDate.date, "d MMMM yyyy")}`;
    
    const events = selectedDate.events;

    setSelectedDateValue(date);
    setSelectedDateEvents(events);
  }
  

  return (
    <section className={`flex-grow-1 flex-column ${order_page.page === "reserve" ? "d-flex" : "d-none"}`}>

      {/* change sub page buttons */}
      <section className="buttons px-4 pb-3">
        <button className={`${order_page.sub === "time" && "active"}`} onClick={() => showOrderPage("reserve", "time")}>زمان رزرو</button>
        <button className={`${order_page.sub === "invate" && "active"}`} onClick={() => showOrderPage("reserve", "invate")}>دعوت از دوستان</button>
      </section>
      {/* change sub page buttons */}

      <section className="d-flex flex-grow-1 justify-content-between flex-column">
        {/* time */}
        <section className={`px-4 pt-4 justify-content-between flex-column ${order_page.sub === "time" ? "d-flex" : "d-none"}`}>
          <div className="form-input-holder mb-4" onClick={() => setShowPicker(true)}>
            <input type="text" className="center" value={selectedDateValue} readOnly />
            <label>تاریخ رزرو</label>
          </div>

          <div className="form-input-holder mb-4">
            <input type="text" />
            <label>شماره میز</label>
          </div>

          <Picker
            isOpen={showPicker}
            config={config}
            minDate={newDate({ year: currentDateObject().year, month: currentDateObject().month, day: currentDateObject().day, hour: currentDateObject().hour, minute: currentDateObject().minute })}
            maxDate={newDate({ year: currentDateObject().year, month: currentDateObject().month, day: currentDateObject().day + 30 })}
            onSubmit={handleSubmit}
            onChange={handleSubmit}
            onClose={() => setShowPicker(false)}
            highlightWeekends
          /> 
        </section>

        {/* invate friends */}
        <section className={`justify-content-between flex-column flex-grow-1 me ${order_page.sub === "invate" ? "d-flex" : "d-none"}`}>
        <section className="order-food-wrapper mb-4">
          <OrderFoodInfo id={1} name={"محمد تقی نسب"} number={"09116916763"} />
          <OrderFoodInfo id={4} name={"آرشام جعفریان"} number={"09111111211"} />
        </section>
          <button className="button button-md add-button">
            <img src={userAddIcon} alt="" />
          </button>
        </section>

        {/* amount */}
        <section>
          <p className="reserve-text px-4">مبلغ 350،000 ریال به عنوان بیعانه از شما گرفته میشود که در صورت <span className="color-green">تکمیل</span> سفارش از قیمت نهایی کسر شده و در صورت <span className="color-red">لغو</span> <span className="fw-bold">هیچ مبلغی</span> باز گردانده نمیشود.</p>
          <OrderAmount tax={"12,000"} amount={"1,500,000"} />
        </section>
        {/* amount */}
        
      </section>

    </section>
  );
};
