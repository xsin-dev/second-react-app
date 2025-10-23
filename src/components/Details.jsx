import { Detail } from "../api/api";

Detail

const Details = () => {
  return (
    <section className="details">
      <div className="details__wrapper">
        {
            Detail.map((item)=>(
                <div className="details__item">
                    <img className="details__item-img" src={item.image} alt="" />
                    <p className="details__item-text">{item.text}</p>
                </div>
            ))
        }
      </div>
    </section>
  );
};

export default Details;
