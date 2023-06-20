import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { OrderProfileItem, Drawer, OrderProfileInfo } from "../../components";

export const ProfileOrders = () => {
  return (
    <main>
      <section className="profile profile-dark d-flex flex-column">
        <section className="header px-3">
          <div className="position-relative d-flex justify-content-center align-items-center">
            <h5 className="page-title page-title-light py-5">سفارشات</h5>
            <Link to="/profile" className="back back-light">
              <HiArrowLeft />
            </Link>
          </div>
        </section>
        <section className="orders px-3">
            <OrderProfileItem title={"تولد محمد"} coffe={"کافه قدیم"} date={{month: "خرداد", year : "1402", day: "29"}} />
            <OrderProfileItem title={"سور آرشام"} coffe={"کافه صدر اعظم"} date={{month: "خرداد", year : "1402", day: "31"}} />
            <OrderProfileItem title={"برنامه دوستانه"} coffe={"کافه ارگ"} date={{month: "تیر", year : "1402", day: "01"}} error />
            <OrderProfileItem title={"دور همی"} coffe={"کافه قدیم"} date={{month: "خرداد", year : "1402", day: "24"}} />
            <OrderProfileItem title={"قرار کاری"} coffe={"کافه مات"} date={{month: "شهریور", year : "1402", day: "01"}} />
        </section>
        <Drawer><OrderProfileInfo /></Drawer>
      </section>
    </main>
  );
};
