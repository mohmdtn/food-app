import logoWhite from "../pictures/logo-white.svg";

export const Denj = ({ name, bg, rate }) => {
  return (
    <section className="denj" style={{backgroundImage: `url(${bg})`}}>
      <div className="rate">
        +{rate}
        <img src={logoWhite} className="ps-1" alt="" />
      </div>
      <section className="name">{name}</section>
    </section>
  );
};
