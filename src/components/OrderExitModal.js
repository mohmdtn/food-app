import React from "react";
import Backdrop from '@mui/material/Backdrop';
import { MoreContext } from "../contexts/more_context";

export const OrderExitModal = () => {
  const {exitModal, exit_modal} = React.useContext(MoreContext);

  return (
    <Backdrop open={exit_modal} onClick={(() => exitModal(false))}>
      <section className="exit-modal p-3 mx-4">
        <h6 className="mb-3">آیا از خروج این سفارش اطمینان دارید ؟</h6>
        <p>با تایید کردن خروج همه ی سفارت شما پاک میشود </p>
        <section className="row m-0 mt-4">
          <div className="col-8 p-0 ps-1">
            <button className="button-3 button-red">خروج</button>
          </div>
          <div className="col-4 p-0 pe-1">
            <button className="button-3 button-green" onClick={(() => exitModal(false))}>ماندن</button>
          </div>
        </section>
      </section>
    </Backdrop>
  );
};
