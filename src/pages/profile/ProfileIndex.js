import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { Avatar, Badge } from "@mui/material";
import { Link } from "react-router-dom";

import userIcon from "../../pictures/icons/userIcon.svg";
import walletIcon from "../../pictures/icons/walletIcon.svg";
import receiptIcon from "../../pictures/icons/receiptIcon.svg";
import denjneshinIcon from "../../pictures/icons/denjneshinIcon.svg";
import messagesIcon from "../../pictures/icons/messagesIcon.svg";
import logoutIcon from "../../pictures/icons/logoutIcon.svg";

// test images
import user from "../../pictures/test/user.png";

export const ProfileIndex = () => {
  return (
    <main>
      <section className="profile px-3">
        <section className="head">
          <Link to=''>
            <div className="back">
                <HiArrowLeft />
            </div>
          </Link>
        </section>
        <section className="info">
          <div>
            <Avatar
              sx={{ width: "80px", height: "80px" }}
              alt="محمد تقی نسب"
              src={user}
            />
          </div>
          <div className="d-flex justify-content-center flex-column pe-3">
            <h5>محمد تقی نسب</h5>
            <h6>+98-911-691-6763</h6>
          </div>
        </section>
        <section className="profile-menu pt-4 pe-3">
          <div className="item">
            <Link to="/profile/info">
              <div>
                <Badge badgeContent={0} color="secondary" sx={{ "& .MuiBadge-badge": { backgroundColor: "#f54749" } }} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                  <img src={userIcon} alt="icon" />
                </Badge>
              </div>
              <p>پروفایل</p>
            </Link>
          </div>

          <div className="item">
            <Link to="/profile/wallet">
              <div>
                <Badge badgeContent={1} color="secondary" sx={{ "& .MuiBadge-badge": { backgroundColor: "#f54749" } }} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                    <img src={walletIcon} alt="icon" />
                </Badge>
              </div>
              <p>کیف پول</p>
            </Link>
          </div>

          <div className="item">
            <Link to="/profile/orders">
              <div>
                <Badge badgeContent={3} color="secondary" sx={{ "& .MuiBadge-badge": { backgroundColor: "#f54749" } }} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                  <img src={receiptIcon} alt="icon" />
                </Badge>
              </div>
              <p>سفارشات</p>
            </Link>
          </div>

          <div className="item">
            <Link to="/">
              <div>
                <Badge badgeContent={1} color="secondary" sx={{ "& .MuiBadge-badge": { backgroundColor: "#f54749" } }} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                  <img src={denjneshinIcon} alt="icon" />
                </Badge>
              </div>
              <p>دنج نشین ها</p>
            </Link>
          </div>

          <div className="item">
            <Link to="/profile/contact-us">
              <div>
                <Badge badgeContent={2} color="secondary" sx={{ "& .MuiBadge-badge": { backgroundColor: "#f54749" } }} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                  <img src={messagesIcon} alt="icon" />
                </Badge>
              </div>
              <p>پشتیبانی</p>
            </Link>
          </div>

          <div className="item">
            <Link to="/profile/logout">
              <div>
                <img src={logoutIcon} alt="icon" />
              </div>
              <p className="color-red">خروج</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
};
