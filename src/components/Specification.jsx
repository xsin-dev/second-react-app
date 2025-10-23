import { SpecificationCards } from "../api/api"
const Specification = () => {
  return (
    <section className="specification">
        <div className="specification__wrapper">
            <div className="specification__list">
                {SpecificationCards.map((card, index)=>(
                    <div className={`specification__item ${index % 2 !== 0 ? "bg-grey" : ""}`} key={card.id}>
                        <img className="specification__item-img" src={card.image} alt={card.title} />
                        <h3 className="specification__item-title">{card.title}</h3>
                        <p className="specification__item-text">{card.text}</p>
                        <a className="specification__item-link" href="/">learn more</a>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Specification