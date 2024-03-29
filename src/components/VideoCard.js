import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
    const SidebarDetailed = useSelector((store)=>{return store.header?.sidebar})
    const { snippet, statistics } = info;

  const formatViews = (count) => {
    // formating views to millions format
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M";
    } else if (count >= 100000 && count <= 1000000) {
      return (count / 1000).toFixed(0) + "K";
    } else if (count >= 10000 && count <= 100000) {
      return (count / 1000).toFixed(0) + "K";
    } else if (count >= 1000 && count <= 10000) {
      return (count / 1000).toFixed(0) + "k";
    }
  };

  return (
    <div className={`${SidebarDetailed?'w-[19rem] hover:w-[20rem]':'w-[21rem] hover:w-[22rem]'} min-w-[16rem] mr-4 mt-5 mb-4 hover:cursor-pointer  transition-all duration-300>`}>
      <div className="mb-2">
        <img className="rounded-lg" alt="" src={snippet.thumbnails?.maxres?.url}></img>
      </div>
      <div className="">{snippet.title}</div>
      <div className="text-gray-400 text-sm">{snippet.channelTitle}</div>
      <div className="text-gray-400 text-sm">
        {formatViews(statistics?.viewCount) + " Views"}
      </div>
    </div>
  );
};

export default VideoCard;
