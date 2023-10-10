import React from "react";

import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
    return (
        <footer className=" text-white">
            <div className="flex py-[15px] px-[15px] md:px-[30px] border-b border-[#dadce0]">
                <span className=" text-[18px] leading-none">
                    India
                </span>
            </div>

            <div className="flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px] border-b border-[#dadce0]">
                <div className="flex justify-center">
                    {quickLinks.map((menu, index) => (
                        <span
                            key={index}
                            className=" cursor-pointer text-[18px] md:text-[14px] leading-none p-[10px] md:p-[15px]"
                        >
                            {menu}
                        </span>
                    ))}
                </div>

                <div className="flex justify-center">
                    {settingMenu.map((menu, index) => (
                        <span
                            key={index}
                            className=" text-[18px] cursor-pointer md:text-[14px] leading-none p-[10px] md:p-[15px]"
                        >
                            {menu}
                        </span>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
