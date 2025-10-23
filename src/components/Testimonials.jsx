import Dots from "../assets/images/svg/dots.svg"
const Testimonials = () => {
  return (
    <section className="testimonials">
        <div className="testimonials__wrapper">
            <p className="testimonials__text">"The team from Woodendot has displayed utmost professionalism from order to deliver and customer support. We placed an order to the UK and would definitely recommend friends to order from Woodendot!"</p>
            <p className="testimonials__user">R. Aoun, United Kingdom</p>
            <img className="testimonials__dots" src={Dots} alt="" />
        </div>
    </section>
  )
}

export default Testimonials