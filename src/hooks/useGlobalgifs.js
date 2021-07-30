import { useContext } from "react";
import {GifsContext} from "../context/GifsContext";

export default function useGlobalgifs(){
    const {gifs} = useContext(GifsContext)
    return gifs
}