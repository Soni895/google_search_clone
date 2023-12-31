import React, { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Context } from "../utils/ContextApi";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
    const { setSearchQuery,
        searchQuery,
        query}=useContext(Context);

    
    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if (event?.key === "Enter" && searchQuery?.length > 0) {
            navigate(`/${searchQuery}/${1}`);
        }
    };
    return (
        <div
            id="searchBox"
            className="  h-12   bg-white w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0"
        >
            <AiOutlineSearch size={30} className=" text-gray-500" />
            <input
                type="text"
                onChange={(e) =>(setSearchQuery(e.target.value),
                console.log(searchQuery)
                )
                }
                onKeyUp={searchQueryHandler}
                value={searchQuery}
                autoFocus
                className="grow outline-0  text-xl  text-black/[0.87]"
            />
            <div className="flex items-center gap-5 mr-4">
                {searchQuery && (
                    <IoMdClose
                        size={30}
                        
                        className="cursor-pointer  text-gray-500" 
                        onClick={() => setSearchQuery("")}
                    />
                )}
                <img className=" h-10 w-6 cursor-pointer" src={MicIcon} alt="" />
                <img
                    className="h-6 w-6 cursor-pointer"
                    src={ImageIcon}
                    alt=""
                />
            </div>
        </div>
    );
};

export default SearchInput;
