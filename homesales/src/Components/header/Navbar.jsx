import React from "react";
import { CiMail, CiClock2, CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaTelegramPlane, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialTumbler } from "react-icons/ti";
import { BiSupport } from "react-icons/bi";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="hidden md:flex flex-row-reverse flex-wrap  justify-around ">
      <div className=" flex flex-wrap  justify-between  flex-row-reverse gap-1.5   w-[90%]">
        <Link href={"/"}>
          <p className="text-bold flex items-center hover:text-blue-400">
            info@realstate.com
            <CiMail className="text-4xl text-blue-500 " />
          </p>
        </Link>
        <p className="text-bold flex items-center">
          شنبه تا چهارشنبه: 9:00 صبح تا 6:00 بعد از ظهر
          <CiClock2 className="text-4xl text-blue-500 " />
        </p>
        <p className="text-bold flex items-center">
          ایران، تهران، خیابان ولیعصر
          <CiLocationOn className="text-4xl text-blue-500 " />
        </p>
        <p className="text-bold flex items-center hover:text-blue-400">
          09123456789
          <BiSupport className="text-3xl text-blue-500"/>
        </p>
         <div className="flex justify-around gap-2 items-center ">
        <FaTelegramPlane className="hover:text-blue-400 text-xl " />
        <TiSocialTumbler className="hover:text-blue-400 text-xl "  />
        <FaPinterestP className="hover:text-blue-400 text-xl "  />
        <FaXTwitter className="hover:text-blue-400 text-xl "  />
        <FaFacebookF className="hover:text-blue-400 text-xl "  />
      </div>
      </div>
     
    </div>
  );
}
