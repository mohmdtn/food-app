import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import addPictureIcon from "../../pictures/icons/addpictureIcon.svg";
import { Link } from "react-router-dom";
import {
  Picker,
  format,
  newDate,
} from '@persian-tools/persian-mobile-datepicker';

export const ProfileInfo = () => {
  const config =  {
    year: {
      caption: {
        text: 'سال',
      },
    },
    month: {
      caption: {
        text: 'ماه',
      },
    },
    day: {
      caption: {
        text: 'روز',
      },
    },
  };

  const [showPicker, setShowPicker] = React.useState(false);
  const [selectedDateValue, setSelectedDateValue] = React.useState();
  // eslint-disable-next-line
  const [selectedDateEvents, setSelectedDateEvents] = React.useState([]);

  function handleSubmit(selectedDate) {
    const date = format(selectedDate.date, "d MMMM yyyy");
    const events = selectedDate.events;

    setSelectedDateValue(date);
    setSelectedDateEvents(events);
  }

  return (
    <main>
      <section className="profile profile-dark d-flex flex-column">
        <section className="header pb-3 px-3">
          <div className="position-relative d-flex justify-content-center align-items-center">
            <h5 className="page-title page-title-light py-5">پروفایل</h5>
            <Link to="/profile" className="back back-light"><HiArrowLeft /></Link>
          </div>

          <section className="header-info d-flex">
            <div className="profile-pic">
              <input className="d-none" id="profile-pic" type="file" />
              <label htmlFor="profile-pic"><img src={addPictureIcon} alt="" /></label>
            </div>
            <div className="d-flex justify-content-center flex-column pe-3">
              <h5>محمد تقی نسب</h5>
              <h6>+98-911-691-6763</h6>
            </div>
          </section>
        </section>
        <section className="content d-flex flex-column justify-content-between flex-grow-1 p-4">

          <section>
            <div className="form-input-holder mb-4">
              <input type="text" />
              <label>نام و نام خانوادگی</label>
            </div>

            <div className="form-input-holder mb-4">
              <input type="text" className="left" />
              <label>کد ملی</label>
            </div>

            <div className="form-input-holder mb-4" onClick={() => setShowPicker(true)}>
              <input type="text" className="center" value={selectedDateValue} readOnly />
              <label>تاریخ تولد</label>
            </div>
            
            <div className="form-input-holder mb-4">
              <input type="text" className="left" />
              <label>ایمیل</label>
            </div>

            <Picker
              isOpen={showPicker}
              config={config}
              minDate={newDate({ year: 1300, month: 1, day: 1 })}
              maxDate={newDate({ year: 1404, month: 1, day: 1 })}
              onSubmit={handleSubmit}
              onChange={handleSubmit}
              onClose={() => setShowPicker(false)}
              highlightWeekends
            />
          </section>

          <button className="button">ثبت تغییرات</button>
        </section>
      </section>
    </main>
  );
};
