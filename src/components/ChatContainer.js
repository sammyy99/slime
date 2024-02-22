import React, { useEffect, useRef } from "react";
import Chat from "./Chat";
import { generateName } from "../constants/helperUtility";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Redux/chatSlice";
import SendIcon from '@mui/icons-material/Send';

const ChatContainer = () => {

  const addChat = useRef("")  
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => {
    return store.chat?.message;
  });

  const handleAddChat = ()=>{
    dispatch(addMessage({ name: 'SAM', message: addChat.current.value }))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Api Polling");
      dispatch(addMessage({ name: generateName(), message: "Random Comment" }));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  console.log(chatMessages);

  return (
    <div className="">
      <div className="border border-gray-700 m-2 ml-4 w-full min-w-80 h-[40rem] rounded-2xl ">
        <div className="border-b border-gray-700 py-3 px-4 text-lg">
          Live Chat
        </div>
        <div className="h-[33.5rem] overflow-y-scroll flex flex-col-reverse custom-scrollbar bg-gray-900">
          {!chatMessages
            ? "null"
            : chatMessages.map((m, i) => {
                return <Chat key={i} name={m.name} message={m.message} />;
              })}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddChat();
          }}
          className="border-t border-gray-700  px-4 text-md flex justify-center"
        >
          <div>
            <input ref={addChat}  className="bg-gray-900 outline-none text-white py-1 mt-2 px-4 rounded-full" type="text"  placeholder="Chat.."></input>
          </div>
          <div className="flex flex-col justify-center"> 
            <button  className="mt-1 mx-3 p-1 hover:bg-gray-700 rounded-full"><SendIcon/></button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default ChatContainer;
