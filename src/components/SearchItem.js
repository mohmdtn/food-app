import logo from "../pictures/logo-gold.svg";
import deliveryIcon from "../pictures/icons/deliveryIcon.svg";
import notDeliveryIcon from "../pictures/icons/nonGpsIcon.svg";
import { AiFillHeart } from "react-icons/ai";

export const SearchItem = ({ bg, rate, name, foods, address, delivery }) => {
  return (
    <section className="search-item mt-4">
        <section className="bg"  style={{backgroundImage: `url(${bg})`}}>
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="rate">
                <AiFillHeart className="ms-1" />
                {rate}
            </div>
        </section>
        <section className="info">
            <section>
                <h5>{name}</h5>
                <h6>{foods}</h6>
                <p>{foods}</p>
            </section>
            <section className="delivery text-center ps-4">
                <div className={`${delivery ? 'd-block' : 'd-none'}`}>
                    <img src={deliveryIcon} alt="" />
                    <p className="mb-1">قیمت پیک</p>
                    <p className="mb-1">{delivery} تومان</p>
                </div>
                <div className={`${delivery ? 'd-none' : 'd-block'}`}>
                    <img src={notDeliveryIcon} alt="" />
                    <p className="mb-1">فقط حضوری</p>
                </div>
            </section>
        </section>
    </section>
  )
}
