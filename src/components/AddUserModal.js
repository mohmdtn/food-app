import React from "react";
import Backdrop from '@mui/material/Backdrop';
import userAddIcon from "../pictures/icons/profileAddIcon.svg";
import { MoreContext } from "../contexts/more_context";

export const AddUserModal = () => {
  const {addUserModal, add_user_modal} = React.useContext(MoreContext);

  return (
    <Backdrop open={add_user_modal} onClick={(() => addUserModal(false))} >
      <section className="add_user_modal p-3 mx-4">
        <h6>دعوت از دوستان</h6>
        <p>شما همچنین با اسکن کد روی میز میتوانید به منو اضافه شوید</p>
        <input type="text" className="form-input form-control mb-3" placeholder="شماره تلفن" />
        <button className="button button-md w-100"><img src={userAddIcon} alt="" /></button>
      </section>
    </Backdrop>
  );
};
