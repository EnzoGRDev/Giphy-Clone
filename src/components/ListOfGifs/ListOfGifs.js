import Gif from "../Gif/Gif";
import 'components/ListOfGifs/ListOfGifs.css'
export default function ListOfGifs({ gifs = [], name = "" } = {}) {
  return (
    <section className="section-list-gifs">
      {name 
        ? <h2 className="subtitle title-list"> Búsqueda: {name} </h2> 
        : null
      }
      <article className="list-gifs">
        {gifs.length > 0
          ? gifs.map(({ id, title, image, imageHigh }) => (
              <Gif id={id} key={id} title={title} image={image} imageHigh={imageHigh} />
            ))
          : null
        }
      </article>
    </section>
  );
}
