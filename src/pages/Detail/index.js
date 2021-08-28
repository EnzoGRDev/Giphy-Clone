import Gif from "components/Gif/Gif";
import useSingleGif from "hooks/useSingleGif";
import Spinner from "components/Spinner/Spinner";
import useLocation from "wouter/use-location";
import { useEffect } from "react";

export default function Detail({params}){
  const {gif, isLoading, isError} = useSingleGif(params.id)
  const [, setLocation] = useLocation()

  useEffect(()=>{
    window.scrollTo(0, 0)
    return null
  },[])

  if (isError) setLocation("/404")
  if (isLoading || !gif ) return <> <Spinner/> </>
  return <div className="gif-detail">
      <Gif id={params.id} key={params.id} title={gif.title} image={gif.image} />
    </div>
}