import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import WatchContainer from "./WatchContainer"
import { Route, Routes } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="w-full bg-red-800]">
      
      <ButtonList />

        <Routes>
          <Route path="/" element={<VideoContainer/>}/>
          <Route path="/watch" element={<WatchContainer/>}/>
        </Routes>

    </div>
  );
};

export default MainContainer;
