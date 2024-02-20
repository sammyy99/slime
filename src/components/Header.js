import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { sidebarToggle } from "../Redux/headerSlice";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import Face5Icon from "@mui/icons-material/Face5";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { youtubeSearchApi } from "../constants/urls";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false)

  const search = useRef(null);
  const dispatch = useDispatch();

  const handleSidebarToggle = () => {
    dispatch(sidebarToggle());
  };

  const handleSearch = () => {
    setSearchQuery(search.current.value);
  };

  const youtubeSuggestion = async (squery) => {
    const data = await fetch(youtubeSearchApi + squery);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    console.log("API called for"+searchQuery)
  };

  useEffect(() => {
   const timer = setTimeout(()=>youtubeSuggestion(searchQuery),200) 
   return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="grid grid-cols-12 shadow-lg py-1 bg-black text-white">
      <div className="h-12 flex col-span-2 px-2">
        <div
          onClick={handleSidebarToggle}
          className="rounded-full mx-4 px-2 mt-2 pt-1 hover:bg-gray-800 hover:cursor-pointer"
        >
          <MenuIcon fontSize="medium" />
        </div>

        <Link to={"/"}>
          <div className="flex hover:cursor-pointer">
            <div className="text-red-600 mt-2 mx-1">
              <YouTubeIcon fontSize="large" />
            </div>
            <div className="mt-3 text-xl font-semibold">Slime</div>
          </div>
        </Link>
      </div>

      <div className="relative col-start-5 col-end-9 py-1 px-2 rounded-full">
        <div className="grid grid-cols-8">
          <input
            ref={search}
            onChange={() => {
              handleSearch();
            }}
            className="px-4 py-2 w-full rounded-tl-full rounded-bl-full border border-gray-800 bg-black col-span-7"
            type="text"
            placeholder="Search here"
            onFocus={()=>setShowSearchResults(true)}
            onBlur={()=>setShowSearchResults(false)}
          ></input>
          <button className="px-4 rounded-tr-full rounded-br-full border border-gray-800 border-l-0 bg-gray-800 text-white col-span-1">
            <SearchIcon />
          </button>
        </div>

        {showSearchResults &&
        <div className="text-white bg-gray-800 rounded-xl absolute mt-1 w-[85%]">
          <ul className="">
            {!searchSuggestions
              ? "null"
              : searchSuggestions.map((result) => {
                  return (
                    <li key={result} className="flex px-4 py-1 my-1 hover:bg-gray-600 hover:cursor-pointer">
                      <div>
                        <SearchIcon fontSize="small" />
                      </div>
                      <div className="pl-2">{result}</div>
                    </li>
                  );
                })}
          </ul>
        </div>}
      </div>

      <div className="flex justify-end mt-1 col-start-12 px-4 hover:cursor-pointer">
        <Face5Icon fontSize="large" />
      </div>
    </div>
  );
};

export default Header;
