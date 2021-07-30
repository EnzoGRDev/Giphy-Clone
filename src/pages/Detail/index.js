import Gif from "components/Gif/Gif";
import useGlobalgifs from "hooks/useGlobalgifs";

export default function Detail({params}){
    const id = params.id
    const gifs  = useGlobalgifs()
    const gif = gifs.find( Singlegif => Singlegif.id === id)
    
    gif && localStorage.setItem("GifInfo",JSON.stringify(gif))
    
    const gifToUse = gif || JSON.parse(localStorage.getItem("GifInfo"))

    console.log(gifToUse)

    const {title, image} = gifToUse


    return( 
        <div className="gif-detail"> { 
            gifToUse
            ? <Gif id = { id } key ={ id } title={ title } image={ image } />
            : <p> {id} </p> 
        }
        </div>
    )
    
}