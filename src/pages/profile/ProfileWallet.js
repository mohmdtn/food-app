import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { LuArrowRightLeft } from "react-icons/lu";
import { Link } from "react-router-dom";
import { WalletItem } from "../../components";

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
        <section className="content flex-grow-1 py-4">
          <section className="wallet-history">
            <WalletItem name={"کافه دنج نشین"} time={"29 خرداد 1379 - 16:12"} price={4100} status={"plus"} />
            <WalletItem name={"رستوران سنتی دنج نشین"} time={"28 تیر 1379 - 16:12"} price={9300} status={"minus"} />
            <WalletItem name={"کافه قدیم"} time={"1 تیر 1402 - 18:18"} price={14300} status={"minus"} />
            <WalletItem name={"کافه رستوران ارگ"} time={"31 خرداد 1402 - 20:04"} price={14300} status={"plus"} />
          </section>
        </section>
      </section>
    </main>
  );
};
