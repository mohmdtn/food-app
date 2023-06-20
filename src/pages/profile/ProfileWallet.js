import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { LuArrowRightLeft } from "react-icons/lu";
import { Link } from "react-router-dom";
import { WalletItem } from "../../components";
import cardAddIcon from "../../pictures/icons/cardAddIcon.svg";
import cardSuccessIcon from "../../pictures/icons/cardSuccessIcon.svg";
import cardErrorIcon from "../../pictures/icons/cardErrorIcon.svg";

export const ProfileWallet = () => {
  return (
    <main>
      <section className="profile profile-dark d-flex flex-column">
        <section className="header pb-3 px-3">
          <div className="position-relative d-flex justify-content-center align-items-center">
            <h5 className="page-title page-title-light py-5">کیف پول</h5>
            <Link to="/profile" className="back back-light">
              <HiArrowLeft />
            </Link>
          </div>
          <section className="balance">
              <div className="d-inline-flex justify-content-center align-items-center position-relative">
                <h5>
                  <span>تومان</span>
                  4300
                </h5>
                <h6><LuArrowRightLeft /> دریک</h6>
              </div>
              <p>موجودی</p>
              <button className="button-gold button-gold-md">افزایش موجودی <AiOutlinePlus /></button>
          </section>
        </section>
        <section className="content flex-grow-1 d-flex flex-column py-4">

          <section className="wallet-history">
            <WalletItem name={"کافه دنج نشین"} time={"29 خرداد 1379 - 16:12"} price={4100} status={"plus"} />
            <WalletItem name={"رستوران سنتی دنج نشین"} time={"28 تیر 1379 - 16:12"} price={9300} status={"minus"} />
            <WalletItem name={"کافه قدیم"} time={"1 تیر 1402 - 18:18"} price={14300} status={"minus"} />
            <WalletItem name={"کافه رستوران ارگ"} time={"31 خرداد 1402 - 20:04"} price={14300} status={"plus"} />
          </section>

          <section className="wallet-add flex-grow-1 d-flex flex-column justify-content-between px-4 d-none">
            <section className="d-flex align-items-center justify-content-center">
              <input className="form-input form-control w-auto" type="number" /><p className="mb-0 pe-1">تومان<LuArrowRightLeft className="me-1" /></p>
            </section>
            <div>
              <button className="button button-md">رفتن به درگاه بانکی <img className="me-2" src={cardAddIcon} alt="" /></button>
            </div>
          </section>

          <section className="wallet-result d-none pt-4">
            <section className="text-center d-none">
              <img src={cardSuccessIcon} alt="" />
              <p className="color-green fw-bold mt-4">کیف پول شما با موفقیت شارژشد</p>
              <button className="button button-md">بازگشت به تراکنش ها</button>
            </section>

            <section className="text-center">
              <img src={cardErrorIcon} alt="" />
              <p className="color-red fw-bold mt-4">خطا! پرداخت شما با موفقیت انجام نشد</p>
              <div className="d-flex justify-content-center">
                <button className="button button-md mx-1">تلاش مجدد</button>
                <button className="button button-md mx-1">بازگشت به تراکنش ها</button>
              </div>
            </section>
          </section>

        </section>
      </section>
    </main>
  );
};
