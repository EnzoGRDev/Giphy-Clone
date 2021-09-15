import React from 'react'
import Gif from "../Gif/Gif";

export default function GifDetail ({gif}){
  const {id, title, image} = gif
    
  return <Gif id={id} title={title} key={id} image={image} />
}