import styled from "styled-components";
import HeroImg from "../assets/images/png/hero-img.png";

const HeroStyled = styled.section`
  background-image: url(${HeroImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const Hero = () => {
  return (
    <HeroStyled className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <h2 className="hero__title">
            Furniture designed to live in harmony, creating distinctive and
            timeless spaces
          </h2>
          <button className="hero__button">Discover now</button>
        </div>
      </div>
    </HeroStyled>
  );
};

export default Hero;
