import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Logout, DeleteAccount, ChangeNumber } from "../../components";
import { MoreContext } from "../../contexts/more_context";

export const ProfileExit = () => {
  const { logout, showLogout } = React.useContext(MoreContext);
  React.useEffect(() => {
    showLogout("exit", "");
    // eslint-disable-next-line
  }, [])

  return (
    <main>
      <section className="profile profile-dark d-flex flex-column">
        <section className="header pb-3 px-3">
          <div className="position-relative d-flex justify-content-center align-items-center">
            <h5 className="page-title page-title-light py-5">خروج</h5>
            <Link to="/profile" className="back back-light">
              <HiArrowLeft />
            </Link>
          </div>
          {/* buttons */}
          <section>
            <button className={`button-gold mb-3 ${ logout.original === "exit" && "button-gold-active" }`} onClick={() => showLogout("exit", "")}>خروج از حساب کاربری</button>
            <button className={`button-gold mb-3 ${ logout.original === "delete" && "button-gold-active" }`} onClick={() => showLogout("delete", "delete")}>حذف حساب کاربری</button>
            <button className={`button-gold ${ logout.original === "change" && "button-gold-active" }`} onClick={() => showLogout("change", "change")}>تغییر مالکیت سیمکارت</button>
          </section>
          {/* buttons */}
        </section>

        <section className="content d-flex flex-grow-1">

          {/* logout section */}
          <section className={`w-100 ${logout.original === "exit" ? "d-flex" : "d-none"}`}>
            <Logout />
          </section>
          {/* logout section */}


          {/* delete account section */}
          <section className={`w-100 ${logout.original === "delete" ? "d-flex" : "d-none"}`}>
            <DeleteAccount />
          </section>
          {/* delete account section */}


          {/* change number section */}
          <section className={`w-100 ${logout.original === "change" ? "d-flex" : "d-none"}`}>
            <ChangeNumber />
          </section>
          {/* change number section */}
          
        </section>
      </section>
    </main>
  );
};
