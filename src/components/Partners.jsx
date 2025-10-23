import PartnersImages from "../assets/images/png/partners-images.png"

const Partners = () => {
  return (
    <section className="partners">
        <div className="partners__wrapper">
            <h2 className="partners__title">Those who are talking about us...</h2>
            <div className="partners__images">
                <img src={PartnersImages} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Partners