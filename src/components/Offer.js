export const Offer = ({ bg, off, name, price }) => {
  return (
    <section className="offer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="off">{off}%</div>
      <section className="name">
        <h6>{name}</h6>
        <p>{price} ریال</p>
      </section>
    </section>
  );
};
