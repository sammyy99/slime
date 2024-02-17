import React from "react";

const SidebarDetailed = () => {
  return (
    <div className=" bg-black w-64  text-white">
      <div className="px-3 py-5 border-b-[1px] border-gray-700">
        <ul>
          <li className="py-1 pl-8 hover:bg-gray-800 rounded-md hover:cursor-pointer"> Home</li>
          <li className="py-1 pl-8 hover:bg-gray-700 rounded-md hover:cursor-pointer">Shorts</li>
          <li className="py-1 pl-8 hover:bg-gray-700 rounded-md hover:cursor-pointer">Subscriptions</li>
          <li className="pt-1 pl-8 hover:bg-gray-700 rounded-md hover:cursor-pointer">Youtube Music</li>
        </ul>
      </div>

      <div className="pt-4">
        <h1 className="font-semibold pl-8 hover:bg-gray-700 rounded-md hover:cursor-pointer px-3 py-2">{'You >'}</h1>
        <ul className=" pb-5 pt-3 border-b-[1px] border-gray-700 px-3">
          <li className="py-1 pl-8 hover:bg-gray-700 rounded-md hover:cursor-pointer">Your channer</li>
          <li className="py-1 pl-8 hover:bg-gray-700 rounded-md hover:cursor-pointer">History</li>
          <li className="py-1 pl-8 hover:bg-gray-700 rounded-md hover:cursor-pointer">Your videos</li>
          <li className="py-1 pl-8 hover:bg-gray-700 rounded-md hover:cursor-pointer">Watch later</li>
          <li className="py-1 pl-8 hover:bg-gray-700 rounded-md hover:cursor-pointer">Downloads</li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarDetailed;
