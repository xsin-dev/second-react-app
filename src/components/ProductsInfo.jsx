import { Products } from "../api/api";

const ProductsInfo = () => {
  return (
    <section className="products">
      {Products.map((product, index) => (
        <div
          className={`products__box ${index % 2 !== 0 ? "reverse" : ""}`}
          key={product.id}
        >
          <div className="products__info">
            <h3 className="products__title">{product.title}</h3>
            <p className="products__price">{product.price}</p>
            <p className="products__text">{product.text}</p>
            <a href="#" className="products__link">
              Shop now →
            </a>
          </div>

          <div className="products__image">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductsInfo;
