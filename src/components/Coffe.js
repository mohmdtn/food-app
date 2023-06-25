import React from "react";
import { FilterButtonSlider } from "./FilterButtonSlider";
import { CoffeFood } from "./CoffeFood";
import logo from "../pictures/logo-dark.svg";
import warningIcon from "../pictures/icons/warningIcon.svg";
import profileAddIcon from "../pictures/icons/profileAddIcon.svg";
import mapIcon from "../pictures/icons/mapIcon.svg";
// eslint-disable-next-line
import listIcon from "../pictures/icons/listWhiteIcon.svg"
import { AiFillHeart } from "react-icons/ai";
import { TfiAngleUp } from "react-icons/tfi"
import { MoreContext } from "../contexts/more_context";
import { CancelReserveModal } from "./CancelReserveModal";
import { AddUserModal } from "./AddUserModal";
import { Badge } from "@mui/material";

export const Coffe = () => {
  const { coffe_info, coffeInfo, cancelReserveModal, addUserModal } = React.useContext(MoreContext);

  return (
    <section className="coffe">
      {/* coffe information */}
      <section className="bg">
        <div className="logo"><img src={logo} alt="" /></div>
        <div className="rate"><AiFillHeart className="ms-1" />2</div>
      </section>
      <section className="info mt-5 px-4">
        <div className="wrapper py-2">
          <h5>کافه رستوران دنج نشین</h5>
          <section className={`${coffe_info === "432px" && "d-none"}`} onClick={() => coffeInfo("432px")}>
            <img className="more-info" src={warningIcon} alt="" />
            <p>اطلاعات بیشتر</p>
          </section>
        </div>
        <div className="wrapper py-2">
          <p>مازندران/ بابل/روبه روی دانشگاه نوشیروانی ساختمان پولونیوم...</p>
          <section>
            <img src={mapIcon} alt="" />
            <p>نمایش روی نقشه</p>
          </section>
        </div>

        {/* more info section */}
        <section className="more-info-section" style={{height: coffe_info}}>
          <div className="numbers">
            <h5>شماره های تماس:</h5>
            <div>
              <h5>021 - 322 444 56</h5>
              <h5>021 - 322 444 56</h5>
              <h5>0921 - 421 29 49</h5>
            </div>
          </div>
          <div className="work-hour">
            <h5>شیفت کاری:</h5>
            <div><p>شنبه</p><p>8 صبح تا 12 شب</p></div>
            <div><p>یک شنبه</p><p>8 صبح تا 12 شب</p></div>
            <div><p>دو شنبه</p><p>8 صبح تا 12 شب</p></div>
            <div><p>سه شنبه</p><p>8 صبح تا 12 شب</p></div>
            <div><p>چهار شنبه</p><p>8 صبح تا 12 شب</p></div>
            <div><p>پنج شنبه</p><p>8 صبح تا 12 شب</p></div>
            <div><p>جمعه</p><p>8 صبح تا 12 شب</p></div>
          </div>
          <div className="show-less mt-4" onClick={() => coffeInfo("0px")}>
            <TfiAngleUp />
            <p>نمایش کمتر</p>
          </div>
        </section>
        {/* more info section */}

        <div className="wrapper pt-2 pb-3">
          <h6>شما با دنجنشین کردن این کافه از تخفیف 10% در رسید خود برخوردار میشوید</h6>
          <div><img src={logo} alt="" /></div>
        </div>

        <section className="coffe-profile-buttons">
          <section className="row m-0">
            <section className="col p-0">
              <button className="button" onClick={() => addUserModal(true)}><img src={profileAddIcon} alt="" /></button>
              <AddUserModal />
            </section>
            {/* <section className="col-4 p-0 pe-2">
              <button className="button-3 button-red">3 نفر<img className="me-1" src={listIcon} alt="" /></button>
            </section> */}
          </section>
          <section className="row m-0 mt-2">
            <section className="col p-0">
              <button className="button">رزرو میز</button>
            </section>
            <section className="col-4 p-0 pe-2">
              <button className="button-3 button-red" onClick={() => cancelReserveModal(true)}>لغو رزرو</button>
              <CancelReserveModal />
            </section>
          </section>
        </section>

      </section>
      {/* coffe information */}

      {/* sticky head */}
      <section className="sticky-header px-4 py-3 d-none">
        <div className="logo"><img src={logo} alt="" /></div>
        <h5>کافه رستوران دنج نشین</h5>
        <Badge badgeContent={2} color="secondary" sx={{ "& .MuiBadge-badge": { backgroundColor: "#f54749" } }} anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
          <div className="cart"><img src={profileAddIcon} alt="" /></div>
        </Badge>
      </section>
      {/* sticky head */}

      {/* filter buttons */}
      <section className="pe-4 pt-3">
        <FilterButtonSlider />
      </section>
      {/* filter buttons */}

      {/* foods section */}
      <section className="foods row m-0 px-4">
        <h5 className="category-title">غذای دریایی</h5>
        <CoffeFood />
        <CoffeFood />
        <CoffeFood />
        <h5 className="category-title">سنتی</h5>
        <CoffeFood />
        <CoffeFood />
      </section>
      {/* foods section */}

    </section>
  );
};
