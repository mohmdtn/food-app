import { AiFillHeart } from "react-icons/ai";

export const CoffeFood = () => {
  return (
    <section className="col-lg-4 col-md-6 col-12 p-md-2 p-0">
      <section className="food">
        <section className="add-food">
          {/* <p>اتمام موجودی</p> */}
          <p className="initial-add">+</p>
          <div className="d-none">
            <div>
              <label htmlFor="">+</label>
              <input type="hidden" />
            </div>
            <h6 className="mb-0"><input type="text" value={'1'} readOnly /></h6>
            <div>
              <label htmlFor=""> - </label>
              <input type="hidden" />
            </div>
          </div>
        </section>
        <section className="food-info pt-2 pe-1">
          <h5 className="mb-1">بشقاب ماهی 3 نفره</h5>
          <p>سه عدد ماهی قزل آلا ، نوشابه خانواده ، دور چین ، لیمو</p>
          <div className="d-flex justify-content-between align-items-center">
            <h6>220,000 ريال</h6>
            <p>420,000 ريال</p>
          </div>
        </section>
        <section className="food-pic">
          <div className="rate">
            <AiFillHeart className="ms-1" />2
          </div>
        </section>
      </section>
    </section>
  );
};
