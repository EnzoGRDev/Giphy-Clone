import Gif from "components/Gif/Gif"
import { Helmet } from "react-helmet"

export default function NotFound(){

  return <>
    <Helmet>
      <title>404 no disponible</title>
      <meta name="description" content="La página que estabas buscando no se encuentra disponible"/>
    </Helmet>
    <h3>Oh Oh! La página que solicitaste no existe</h3>
    <Gif id={"yx5onNIhYh7fhxnSu9"} title={"so what good luck GIF by Robert E Blackmon"} image={"https://media2.giphy.com/media/yx5onNIhYh7fhxnSu9/giphy-preview.webp?cid=1a480db6f550297b2a43ca07c2e3ae068a6bf7634c3aad4e&rid=giphy-preview.webp&ct=g"}/>
  </>
}