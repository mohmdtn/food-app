import React from 'react';
import  penWriteIcon from "../pictures/icons/penWriteIcon.svg";
import { Avatar } from "@mui/material";
import { TfiClose } from "react-icons/tfi";
import { FaqItem } from './FaqItem';

export const Faq = () => {
  return (
    <section className='faq flex-column flex-grow-1'>
        {/* faq list */}
        <section className="faq-list flex-grow-1">
              <FaqItem id={1} question={"آیا امکان بازگشت وجه پس از پرداخت وجود دارد ؟"} answer={"با دنج نشین کردن یک جا شما از تخفیفات آنجا برخوردار میشوید ولی باید دقت کنید که فقط یک بار در ماه قادر به نجنشین کردن هستید و پس از انتخاب و یا حذف شما تا 30 روز از انتخاب کردن محرومید."} />
              <FaqItem id={2} question={"چگونه میتوان از سیستم دلیوری برنامه استواده کرد؟"} answer={"با دنج نشین کردن یک جا شما از تخفیفات آنجا برخوردار میشوید ولی باید دقت کنید که فقط یک بار در ماه قادر به نجنشین کردن هستید و پس از انتخاب و یا حذف شما تا 30 روز از انتخاب کردن محرومید."} />
              <FaqItem id={3} question={"مزایای دنج نشین کردن هر جا چیست؟"} answer={"با دنج نشین کردن یک جا شما از تخفیفات آنجا برخوردار میشوید ولی باید دقت کنید که فقط یک بار در ماه قادر به نجنشین کردن هستید و پس از انتخاب و یا حذف شما تا 30 روز از انتخاب کردن محرومید."} />
              <div className="px-4 w-100">
                <button className="button button-md w-100">با ما به اشتراک بگذارید <img className="me-2" src={penWriteIcon} alt="" /></button>
              </div>
            </section>
            {/* faq list */}

            {/* new ticket */}
            <section className="new-ticket px-4 py-4 flex-grow-1 d-flex flex-column justify-content-between d-none">
              <section>
                <section className="user-info">
                    <div className="d-flex align-items-center">
                    <Avatar sx={{ width: "46px", height: "46px" }} alt="محمد تقی نسب" src={""} />
                    <div className="pe-2">
                        <h6>محمد تقی نسب</h6>
                        <p>mohammad@gmail.com</p>
                    </div>
                    </div>
                    <TfiClose className="color-red" />
                </section>
                <textarea className="form-control form-text mt-4" name="" id="" rows="6" placeholder="متن"></textarea>
              </section>
              <section className="d-flex justify-content-between">
                <button className="button button-md">ارسال <img className="me-2" src={penWriteIcon} alt="" /></button>
                <button className="button-gold button-gold-md">پیام های قبل</button>
              </section>
            </section>
            {/* new ticket */}
    </section>
  )
}
