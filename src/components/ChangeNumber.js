import React from "react";
import change from "../pictures/icons/exchangeBigIcon.svg";
import logoutIcon from "../pictures/icons/logout2Icon.svg";
import { MoreContext } from "../contexts/more_context";

export const ChangeNumber = () => {
  const { logout, showLogout } = React.useContext(MoreContext);

  return (
    <section className="logout pt-5 pb-3 px-3">
    {/* yes or cancel */}
    <section className={`${logout.sub === "change" ? "d-flex" : "d-none"} justify-content-between flex-grow-1 flex-column align-items-center`}>
      <div className="px-4">
        <h5>آیا از انتقال حساب کاربری خود اطمینان دارید؟</h5>
        <p>با انتقال حساب تمامی اطلاعات، سفارشات، کیف پول و ... شما پاک شده و به حساب جدید انتقال میابد.</p>
        <img src={change} alt="" />
      </div>
      <section className="d-flex justify-content-between">
        <button className="button1" onClick={() => showLogout("change", "change-number")}>بله <img className="me-2" src={logoutIcon} alt="" /></button>
        <button className="button2">خیر</button>
      </section>
    </section>

    {/* old and new number */}
    <section className={`${logout.sub === "change-number" ? "d-flex" : "d-none"} justify-content-between flex-grow-1 flex-column align-items-center`}>
      <div className="px-4 w-100">
        <div>
          <h5>شماره تلفن سابق را وارد کنید</h5>
          <input className="form-control form-input number" type="text" placeholder="09119111111" />
        </div>
        <div className="pt-4">
          <h5>شماره تلفن جدید را وارد کنید</h5>
          <input className="form-control form-input number" type="text" placeholder="09119111111" />
        </div>
      </div>
      <section className="d-flex justify-content-between">
        <button className="button1" onClick={() => showLogout("change", "change-code")}>تایید</button>
        <button className="button2" onClick={() => showLogout("change", "change")}>انصراف</button>
      </section>
    </section>

    {/* confirm with code */}
    <section className={`${logout.sub === "change-code" ? "d-flex" : "d-none"} justify-content-between flex-grow-1 flex-column align-items-center`}>
      <div className="px-4 w-100">
        <h5>کد ارسال شده را وارد کنید</h5>
        <input className="form-control form-input number" type="text" />
      </div>
      <section className="d-flex justify-content-between">
        <button className="button1">تایید</button>
        <button className="button2" onClick={() => showLogout("change", "change")}>انصراف</button>
      </section>
    </section>

  </section>
  )
}
