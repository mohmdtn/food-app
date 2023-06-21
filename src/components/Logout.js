import React from "react";
import logout from "../pictures/icons/logout2BigIcon.svg";
import logoutIcon from "../pictures/icons/logout2Icon.svg";

export const Logout = () => {
  return (
    <section className="logout pt-5 pb-3 px-3">
      <section className="d-flex justify-content-between flex-grow-1 flex-column align-items-center">
        <div className="px-4">
          <h5>آیا از خروج حساب کاربری خود اطمینان دارید؟</h5>
          <p>با خروج حساب کاربری شما با وارد کردن شماره تلفن و تایید کد ارسال شده قابلیت ورود دوباره را خواهید داشت.</p>
          <img src={logout} alt="" />
        </div>
        <section className="d-flex justify-content-between">
          <button className="button1">بله <img className="me-2" src={logoutIcon} alt="" /></button>
          <button className="button2">خیر</button>
        </section>
      </section>
    </section>
  );
};
