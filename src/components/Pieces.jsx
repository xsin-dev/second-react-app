import { PiecesImage } from "../api/api";
import InstagramIcon from "../assets/images/svg/instagram.svg";
import Dots from "../assets/images/svg/dots.svg";

const Pieces = () => {
  return (
    <section className="pieces">
      <div className="pieces__wrapper">
        <h2 className="pieces__title">Our pieces inside your home</h2>
        <p className="pieces__text">
          Get inspired by our products in real-life. Tag us and be featured!
        </p>

        <div className="pieces__list">
          {PiecesImage.map((data) => (
            <div className="pieces__item" key={data.id}>
              <img src={data.image} alt="" />
              <div className="pieces__instagram">
                <img
                  className="pieces__instagram-img"
                  src={InstagramIcon}
                  alt=""
                />
                <p className="pieces__instagram-text">{data.instagram}</p>
              </div>
            </div>
          ))}
        </div>
        <img className="pieces__dots" src={Dots} alt="" />
      </div>
    </section>
  );
};

export default Pieces;
