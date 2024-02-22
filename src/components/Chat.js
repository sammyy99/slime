import React from "react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const Chat = ({name}) => {
  return (
    <div className="text-white flex px-3 py-2">
      <div className="mr-1">
        <SentimentSatisfiedAltIcon />
      </div>
      <div className="">
        <span className="font-semibold mr-2 text-sm text-gray-400">{name}</span>
        <span className="text-sm">This is Slime</span>
      </div>
    </div>
  );
};

export default Chat;
