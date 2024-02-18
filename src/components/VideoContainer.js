import React, { useEffect, useState } from 'react'
//import {YoutubeListApi} from '../constants/urls'
import VideoCard from './VideoCard'
import {videosApiData} from '../constants/datafile'

const VideoContainer = () => {

  const [videosData, setVideosdata] = useState()

  const YouttubeData = async ()=>{
    //const data = await fetch(YoutubeListApi);
    //const json = await data.json()
    //console.log(json.items);
    //setVideosdata(json.items)
    setVideosdata(videosApiData)
  }

  useEffect(()=>{
   YouttubeData();
  },[])

  if(!videosData) return;

  return (
    <div className='text-white mx-4 ` my-4 flex'>
      {videosData.map((video)=>{
        return <VideoCard key={video.id} info = {video}/>
      })}
    </div>
  )
}

export default VideoContainer
