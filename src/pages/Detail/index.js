import Gif from "components/Gif/Gif";
import useSingleGif from "hooks/useSingleGif";
import Spinner from "components/Spinner/Spinner";
import useLocation from "wouter/use-location";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Detail({params}){
  const {gif, isLoading, isError} = useSingleGif(params.id)
  const [, setLocation] = useLocation()

  useEffect(()=>{
    window.scrollTo(0, 0)
    return null
  },[])

  if (isError) setLocation("/404")
  if (isLoading || !gif ) return(
    <>
      <Helmet title="Loading..."/>       
      <Spinner/> 
    </>
  ) 
  
  return(
  <div className="gif-detail">
      <Helmet>
        <title>{`Gif de ${gif.title}`}</title>
        <meta name="description" content={` Gif de ${gif.title}`}/>
      </Helmet>
      <Gif id={params.id} key={params.id} title={gif.title} image={gif.image} detail={true} />
    </div>
  ) 
}