import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageCollections from "./components/ImageCollections";
import Partners from "./components/Partners";
import Pieces from "./components/Pieces";
import ProductsInfo from "./components/ProductsInfo";
import Specification from "./components/Specification";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Details />
      <ImageCollections />
      <ProductsInfo />
      <Pieces />
      <Testimonials />
      <Specification />
      <Partners />
      <Footer />
    </div>
  );
};

export default App;
