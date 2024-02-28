import React, { useEffect, useState } from 'react'
//import {YoutubeListApi} from '../constants/urls'
import VideoCard from './VideoCard'
import {videosApiData} from '../constants/datafile'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

  const [videosData, setVideosdata] = useState()

  const YouttubeData = async ()=>{
   // const data = await fetch(YoutubeListApi);
   // const json = await data.json()
   // console.log(json.items);
   // setVideosdata(json.items)
    setVideosdata(videosApiData)
  }

  useEffect(()=>{
   YouttubeData();
  },[])

  if(!videosData) return;

  return (
    <div className='text-white px-4 py-4 flex flex-wrap bg-black'>
      {videosData.map((video)=>{
        return <Link key={video.id} to={`/watch?v=${video.id}`}> <VideoCard  info = {video}/> </Link>
      })}
    </div>
  )
}

export default VideoContainer
