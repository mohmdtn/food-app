import React from "react";
import times from "../pictures/icons/timesBigIcon.svg";
import logoutIcon from "../pictures/icons/logout2Icon.svg";
import { MoreContext } from "../contexts/more_context";

export const DeleteAccount = () => {
  const { logout, showLogout } = React.useContext(MoreContext);

  return (
    <section className="logout pt-5 pb-3 px-3">
      {/* yes or cancel */}
      <section className={`${logout.sub === "delete" ? "d-flex" : "d-none"} justify-content-between flex-grow-1 flex-column align-items-center`}>
        <div className="px-4">
          <h5>آیا از حذف حساب کاربری خود اطمینان دارید؟</h5>
          <p>با حذف حساب کاربری تمامی اطلاعات شما پاک شده و دیگر دسترسی به آنها برای شما مقدور نمیباشد.</p>
          <img src={times} alt="" />
        </div>
        <section className="row m-0 w-100">
          <div className="col-6 p-0 ps-1"><button className="button1" onClick={() => showLogout("delete", "delete-confirm")}>بله <img className="me-2" src={logoutIcon} alt="" /></button></div>
          <div className="col-6 p-0 pe-1"><button className="button2">خیر</button></div>
        </section>
      </section>

      {/* confirm with data */}
      <section className={`${logout.sub === "delete-confirm" ? "d-flex" : "d-none"} justify-content-between flex-grow-1 flex-column align-items-center`}>
        <div>
          <div>
            <h5>اگر از حذف حساب کاربری خود اطمینان دارید عبارت حذف را تایپ کنید.</h5>
            <input className="form-control form-input delete" type="text" placeholder="ح ذ ف" />
          </div>
          <div className="pt-4">
            <h5>شماره تلفن خود را وارد کنید</h5>
            <input className="form-control form-input number" type="text" placeholder="09119111111" />
          </div>
        </div>
        <section className="row m-0 w-100">
          <div className="col-6 p-0 ps-1"><button className="button1" onClick={() => showLogout("delete", "delete-code")}>تایید</button></div>
          <div className="col-6 p-0 pe-1"><button className="button2" onClick={() => showLogout("delete", "delete")}>انصراف</button></div>
        </section>
      </section>

      {/* confirm with code */}
      <section className={`${logout.sub === "delete-code" ? "d-flex" : "d-none"} justify-content-between flex-grow-1 flex-column align-items-center`}>
        <div className="w-100">
          <h5>کد ارسال شده را وارد کنید</h5>
          <input className="form-control form-input number" type="text" />
        </div>
        <section className="row m-0 w-100">
          <div className="col-6 p-0 ps-1"><button className="button1">تایید</button></div>
          <div className="col-6 p-0 pe-1"><button className="button2" onClick={() => showLogout("delete", "delete")}>انصراف</button></div>
        </section>
      </section>

    </section>
  )
}
