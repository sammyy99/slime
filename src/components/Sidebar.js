import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import DownloadIcon from "@mui/icons-material/Download";

const Sidebar = () => {
  return (
    <div className="w-24 bg-black text-white flex justify-center">
      <ul>
        <li className="py-4 px-2 my-2 hover:bg-gray-800 rounded-lg hover:cursor-pointer">
          <div className="flex justify-center">
            <HomeIcon />
          </div>
          <div className="flex justify-center text-sm">Home</div>
        </li>
        <li className="py-4 my-2 hover:bg-gray-800 rounded-lg hover:cursor-pointer">
          <div className="flex justify-center">
            <VideoLibraryIcon />
          </div>
          <div className="flex justify-center text-sm">Shorts</div>
        </li>
        <li className="py-4 my-2 hover:bg-gray-800 rounded-lg hover:cursor-pointer">
          <div className="flex justify-center">
            <SubscriptionsIcon />
          </div>
          <div className="flex justify-center text-sm">Subscriptions</div>
        </li>
        <li className="py-4 my-2 hover:bg-gray-800 rounded-lg hover:cursor-pointer">
          <div className="flex justify-center">
            <LibraryMusicIcon />
          </div>
          <div className="flex justify-center text-sm">Music</div>
        </li>
        <li className="py-4 my-2 hover:bg-gray-800 rounded-lg hover:cursor-pointer">
          <div className="flex justify-center">
            <SelfImprovementIcon />
          </div>
          <div className="flex justify-center text-sm">You</div>
        </li>
        <li className="py-4 my-2 hover:bg-gray-800 rounded-lg hover:cursor-pointer">
          <div className="flex justify-center">
            <DownloadIcon />
          </div>
          <div className="flex justify-center text-sm">Downloads</div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
