import LogoImg from "../assets/images/svg/logo.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">wooden furniture</li>
              <li className="nav__item">about</li>
              <li className="nav__item">stories</li>
            </ul>
          </nav>
          <div className="logo">
            <img src={LogoImg} alt="logo" className="logo-img" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
