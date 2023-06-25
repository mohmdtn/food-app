import React from "react";
import penWriteIcon from "../pictures/icons/penWriteIcon.svg";
import { Avatar } from "@mui/material";
import { TfiClose } from "react-icons/tfi";
import { FaqItem } from "./FaqItem";
import { MoreContext } from "../contexts/more_context";

export const Faq = () => {
  const { contact_us, showContactUs } = React.useContext(MoreContext);

  return (
    <section className="faq d-flex flex-column flex-grow-1">
      {/* faq list */}
      <section className={`faq-list pb-4 flex-column justify-content-between flex-grow-1 ${contact_us.sub === "faq" ? "d-flex" : "d-none"}`}>
        <section>
          <FaqItem id={1} question={"آیا امکان بازگشت وجه پس از پرداخت وجود دارد ؟"} answer={"با دنج نشین کردن یک جا شما از تخفیفات آنجا برخوردار میشوید ولی باید دقت کنید که فقط یک بار در ماه قادر به نجنشین کردن هستید و پس از انتخاب و یا حذف شما تا 30 روز از انتخاب کردن محرومید."} />
          <FaqItem id={2} question={"چگونه میتوان از سیستم دلیوری برنامه استواده کرد؟"} answer={"با دنج نشین کردن یک جا شما از تخفیفات آنجا برخوردار میشوید ولی باید دقت کنید که فقط یک بار در ماه قادر به نجنشین کردن هستید و پس از انتخاب و یا حذف شما تا 30 روز از انتخاب کردن محرومید."} />
          <FaqItem id={3} question={"مزایای دنج نشین کردن هر جا چیست؟"} answer={"با دنج نشین کردن یک جا شما از تخفیفات آنجا برخوردار میشوید ولی باید دقت کنید که فقط یک بار در ماه قادر به نجنشین کردن هستید و پس از انتخاب و یا حذف شما تا 30 روز از انتخاب کردن محرومید."} />
        </section>
        <div className="px-4 w-100">
          <button className="button button-md w-100" onClick={() => showContactUs("faq", "new-ticket")}>با ما به اشتراک بگذارید <img className="me-2" src={penWriteIcon} alt="" /></button>
        </div>
      </section>
      {/* faq list */}

      {/* new ticket */}
      <section className={`new-ticket px-4 py-4 flex-grow-1 d-flex flex-column justify-content-between ${contact_us.sub === "new-ticket" ? "d-block" : "d-none"}`}>
        <section>
          <section className="user-info">
            <div className="d-flex align-items-center">
              <Avatar sx={{ width: "46px", height: "46px" }} alt="محمد تقی نسب" src={""} />
              <div className="pe-2">
                <h6>محمد تقی نسب</h6>
                <p>mohammad@gmail.com</p>
              </div>
            </div>
            <TfiClose className="color-red" onClick={() => showContactUs("faq", "faq")} />
          </section>
          <textarea className="form-control form-text mt-4" name="" id="" rows="6" placeholder="متن" ></textarea>
        </section>
        <section className="d-flex justify-content-between row m-0">
          <div className="col-8 p-0 ps-1"><button className="button button-md">ارسال <img className="me-2" src={penWriteIcon} alt="" /></button></div>
          <div className="col-4 p-0 pe-1"><button className="button-gold button-gold-md me-auto" onClick={() => showContactUs("faq", "old-ticket")}>پیام های قبل</button></div>
        </section>
      </section>
      {/* new ticket */}

      {/* old tickets */}
      <section className={`faq-list pb-4 old-tickets flex-column justify-content-between flex-grow-1 ${contact_us.sub === "old-ticket" ? "d-flex" : "d-none"}`}>
        <section>
          <FaqItem id={1} question={"آیا امکان بازگشت وجه پس از پرداخت وجود دارد ؟"} answer={"با دنج نشین کردن یک جا شما از تخفیفات آنجا برخوردار میشوید ولی باید دقت کنید که فقط یک بار در ماه قادر به نجنشین کردن هستید و پس از انتخاب و یا حذف شما تا 30 روز از انتخاب کردن محرومید."} />
          <FaqItem id={2} question={"چگونه میتوان از سیستم دلیوری برنامه استواده کرد؟"} answer={"با دنج نشین کردن یک جا شما از تخفیفات آنجا برخوردار میشوید ولی باید دقت کنید که فقط یک بار در ماه قادر به نجنشین کردن هستید و پس از انتخاب و یا حذف شما تا 30 روز از انتخاب کردن محرومید."} />
          <FaqItem id={3} question={"مزایای دنج نشین کردن هر جا چیست؟"} answer={"با دنج نشین کردن یک جا شما از تخفیفات آنجا برخوردار میشوید ولی باید دقت کنید که فقط یک بار در ماه قادر به نجنشین کردن هستید و پس از انتخاب و یا حذف شما تا 30 روز از انتخاب کردن محرومید."} />
        </section>
        <section className="d-flex justify-content-between px-4 row m-0">
          <div className="col-8 p-0 ps-1"><button className="button button-md" onClick={() => showContactUs("faq", "new-ticket")}>ارسال جدید <img className="me-2" src={penWriteIcon} alt="" /></button></div>
          <div className="col-4 p-0 pe-1"><button className="button-gold button-gold-md me-auto">حذف پیام</button></div>
        </section>
      </section>
      {/* old tickets */}
    </section>
  );
};
