import React from "react";
import Dialog from '@mui/material/Dialog';
import { MoreContext } from "../contexts/more_context";

export const CancelReserveModal = () => {
  const {cancelReserveModal, cancel_reserve_modal} = React.useContext(MoreContext);

  return (
    <Dialog open={cancel_reserve_modal} onClose={(() => cancelReserveModal(false))}>
      <section className="cancel-reserve-modal p-3 mx-4">
        <h6 className="mb-3">شما با لغو کردن این میز رزرو شده مبلغ بیعانه را از دست میدهید. </h6>
        <section className="row m-0 mt-4">
          <div className="col-8 p-0 ps-1">
            <button className="button" onClick={(() => cancelReserveModal(false))}>انصراف</button>
          </div>
          <div className="col-4 p-0 pe-1">
            <button className="button-3 button-red">خروج</button>
          </div>
        </section>
      </section>
    </Dialog>
  );
};
