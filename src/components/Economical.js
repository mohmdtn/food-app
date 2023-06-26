import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Economical = ({name, image, logo, price, oldPrice, coffe, rate}) => {
  return (
    <Link to="/search">
      <section className="economical">
        <section className="name">
          {logo && <img src={logo} alt="" />}
          {coffe}
        </section>
        <section className="food-preview">
          <section className="px-3">
            <h5>{name}</h5>
            <div className="d-flex justify-content-between">
              <p className="price ps-2">{price} ريال</p>
              {oldPrice && <p className="old-price">{oldPrice} ريال</p>}
            </div>
          </section>
          <section className="food-image" style={{backgroundImage: `url(${image})`}}>
            <div className="rate">
              <AiFillHeart className="ms-1" />
              {rate}
            </div>
          </section>
        </section>
      </section>
    </Link>
  );
};
