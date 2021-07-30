import Gif from "../Gif/Gif";
import 'components/ListOfGifs/ListOfGifs.css'
export default function ListOfGifs({ gifs, name }) {
  return (
    <section className="section-list-gifs">
      {name !== undefined ? (
        <h2 className="title-list"> Búsqueda : {decodeURI(name)}</h2>
      ) : null}
      <article className="list-gifs">
        {gifs
          ? gifs.map(({ id, title, image }) => (
              <Gif id={id} key={id} title={title} image={image} />
            ))
          : "cargando..."}
      </article>
    </section>
  );
}
