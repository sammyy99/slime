import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { sidebarhide } from "../Redux/headerSlice";

const WatchContainer = () => {

  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const videoId = searchParams.get('v')
  console.log(videoId)

  useEffect(()=>{
   dispatch(sidebarhide()) 
  },[])

  return (
    <div className="px-4">
      <div className=" w-fit py-2">
      <iframe
        className="rounded-2xl"
        width="1080"
        height="610"
        src={`https://www.youtube.com/embed/${videoId}?si=kLaDHMtaFGeNYxfU`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      </div>
    </div>
  );
};

export default WatchContainer;
