import React from "react";
import Dialog from '@mui/material/Dialog';
import { MoreContext } from "../contexts/more_context";

export const InvateModal = () => {
  const {invateModal, invate_modal} = React.useContext(MoreContext);

  return (
    <Dialog open={invate_modal} onClose={(() => invateModal(false))}>
      <section className="invate-modal p-3 mx-4">
        <h6 className="mb-1">دوستی از شما دعوت کرده است</h6>
        <p>شما همچنین با اسکن کد روی میز میتوانید به منو اضافه شوید</p>
        <h5 className="my-3">آیا دعوت <span>0930-***-**-73</span> را می پذیرید؟</h5>
        <section className="row m-0 mt-4">
          <div className="col-8 p-0 ps-1">
            <button className="button-3 button-green">تایید</button>
          </div>
          <div className="col-4 p-0 pe-1">
            <button className="button-3 button-red" onClick={(() => invateModal(false))}>رد کردن</button>
          </div>
        </section>
      </section>
    </Dialog>
  );
};
