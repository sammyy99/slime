import React, { useEffect } from "react";
import Chat from "./Chat";
import { generateName } from "../constants/helperUtility";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Redux/chatSlice";

const ChatContainer = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => {
    return store.chat?.message;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Api Polling");
      dispatch(addMessage({ name: generateName(), message: "Random Comment" }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  console.log(chatMessages)

  return (
    <div className="">
      <div className="border border-gray-700 m-2 ml-4 w-full min-w-80 h-[40rem] rounded-2xl ">
        <div className="border-b border-gray-700 py-3 px-4 text-lg">
          Live Chat
        </div>
        <div className="h-[33.5rem] overflow-y-scroll flex flex-col-reverse custom-scrollbar">
        {!chatMessages ? "null" :
         chatMessages.map((m,i)=>{
            return <Chat key={i} name={m.name} />
         })}
         </div>
         <div className="border-t border-gray-700 pt-3 px-4 text-md ">Add chat here</div>
      </div>
      
    </div>
  );
};

export default ChatContainer;
