import React, { useEffect } from 'react'
import {YoutubeListApi} from '../constants/urls'

const VideoContainer = () => {

  const YouttubeData = async ()=>{
    const data = await fetch(YoutubeListApi);
    const json = await data.json()
    console.log(json);
    return json;
  }

  useEffect(()=>{
   YouttubeData();
  },[])

  return (
    <div className='text-white mx-8 my-4'>
      Video Container
    </div>
  )
}

export default VideoContainer
