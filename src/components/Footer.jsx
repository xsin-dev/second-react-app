import FooterImage from "../assets/images/png/footer.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__nav">
          <div className="footer__column">
            <h4 className="footer__title">About</h4>
            <ul className="footer__list">
              <li className="footer__item">About Us</li>
              <li className="footer__item">Design</li>
              <li className="footer__item">Sustainability</li>
              <li className="footer__item">We plant trees</li>
              <li className="footer__item">Our Story</li>
              <li className="footer__item">Awards</li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">What we do</h4>
            <ul className="footer__list">
              <li className="footer__item">Finance Teams</li>
              <li className="footer__item">Tax</li>
              <li className="footer__item">R&D Tax Credits</li>
              <li className="footer__item">A platform for success</li>
              <li className="footer__item">Software Integrations</li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">help</h4>
            <ul className="footer__list">
              <li className="footer__item">Startups</li>
              <li className="footer__item">Small Business</li>
              <li className="footer__item">Medium Business</li>
              <li className="footer__item">CFO & Head of Finance</li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">More</h4>
            <ul className="footer__list">
              <li className="footer__item">Case Studies</li>
              <li className="footer__item">Blogs</li>
              <li className="footer__item">Guides</li>
              <li className="footer__item">Podcasts</li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">Company</h4>
            <ul className="footer__list">
              <li className="footer__item">About Us</li>
              <li className="footer__item">Careers</li>
              <li className="footer__item">Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <img src={FooterImage} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
