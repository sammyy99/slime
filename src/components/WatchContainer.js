import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { sidebarhide } from "../Redux/headerSlice";
import { GoogleApiKey } from "../constants/urls";
import CommentIcon from "@mui/icons-material/Comment";
import CommentsContainer from "./CommentsContainer";
import Chat from "./Chat";
import ChatContainer from "./ChatContainer";

const WatchContainer = () => {
  const [details, setDetails] = useState(null);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  //console.log(videoId)

  const videoDetail = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${GoogleApiKey}`
    );
    const json = await data.json();
    //console.log(json.items[0])
    setDetails(json.items[0]);
  };

  useEffect(() => {
    dispatch(sidebarhide());
    videoDetail();
  }, []);

  return (
    <div className="grid grid-cols-12 mx-12">
      <div className="col-span-8">
        <div className=" py-2 ">
          <iframe
            className="rounded-2xl w-full min-w-96 h-[40rem] min-h-32"

            src={`https://www.youtube.com/embed/${videoId}?si=kLaDHMtaFGeNYxfU`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {!details ? (
          "null"
        ) : (
          <div className="text-white">
            <h1 className="text-xl font-bold">
              {details.snippet?.localized?.title}
            </h1>
          </div>
        )}

        <div className="text-white py-2">
          <h1 className="text-lg">
            Comments: <CommentIcon />
          </h1>
          <div>
            <CommentsContainer />
          </div>
        </div>
      </div>

      <div className=" col-span-3 text-white">
        <ChatContainer/>
      </div>
    </div>
  );
};

export default WatchContainer;
