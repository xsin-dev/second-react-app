

import { ImageCollection } from "../api/api"
const ImageCollections = () => {
  return (
    <section className="image-collection">
            {
                ImageCollection.map((img) =>(
                    <div className="image-collection__item" key={img.id}>
                        <img src={img.image} alt=""/>
                    </div>
                ))
            }
    </section>
  )
}

export default ImageCollections