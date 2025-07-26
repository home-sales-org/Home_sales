"use client";
import Link from "next/link";
import Navbar from "../../Components/header/Navbar";
import { FaRegGem } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { FaFacebookF, FaTelegramPlane, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialTumbler } from "react-icons/ti";


export default function Header() {
  const Amlak = [
    "لیست املاک",
    "املاک مرتبط",
    "ملک تکی",
    "برای اجاره",
    "برای فروش",
  ];
  const Representatives = ["لیست نمایندگان", "صفحه نمایندگان"];
  const News = ["اخبار ما", "وبلاگ"];

  const [showAmlakList, setShowAmlakList] = useState(false);
  const [showRepresentatives, setShowRepresentatives] = useState(false);
  const [showNews, setShowNews] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <header className="w-full px-4 py-2 flex justify-between items-center bg-white shadow-md relative flex-row-reverse">
        <h1 className="flex items-center text-2xl md:text-3xl">
          <FaRegGem className="text-blue-500 text-4xl mr-2" /> TheGem
        </h1>
        <button
          className="md:hidden text-3xl "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <ul className="hidden md:flex flex-row-reverse gap-4 text-lg font-bold">
          <li className="hover:text-blue-400 p-1.5">خانه</li>
          <li
            className="relative hover:text-blue-400 p-1.5"
            onMouseEnter={() => setShowAmlakList(true)}
            onMouseLeave={() => setShowAmlakList(false)}
          >
            املاک
            {showAmlakList && (
              <ul className="absolute right-0 top-10 bg-white shadow-lg rounded-xl p-3 z-50 text-right w-40">
                {Amlak.map((item, index) => (
                  <li
                    key={index}
                    className="hover:bg-blue-500 hover:text-white py-1 px-3 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li
            className="relative hover:text-blue-400 p-1.5"
            onMouseEnter={() => setShowRepresentatives(true)}
            onMouseLeave={() => setShowRepresentatives(false)}
          >
            نمایندگان
            {showRepresentatives && (
              <ul className="absolute right-0 top-10 bg-white shadow-lg rounded-xl p-3 z-50 text-right w-40">
                {Representatives.map((item, index) => (
                  <li
                    key={index}
                    className="hover:bg-blue-500 hover:text-white py-1 px-3 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="hover:text-blue-400 p-1.5">درباره ما</li>
          <li className="hover:text-blue-400 p-1.5">سوالات متداول</li>
          <li
            className="relative hover:text-blue-400 p-1.5"
            onMouseEnter={() => setShowNews(true)}
            onMouseLeave={() => setShowNews(false)}
          >
            اخبار
            {showNews && (
              <ul className="absolute right-0 top-10 bg-white shadow-lg rounded-xl p-3 z-50 text-right w-40">
                {News.map((item, index) => (
                  <li
                    key={index}
                    className="hover:bg-blue-500 hover:text-white py-1 px-3 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="hover:text-blue-400 p-1.5">ارتباط باما</li>
        </ul>
        <Link href="/" className="hidden lg:block">
          <p className="bg-blue-500 text-white font-bold px-4 py-2 rounded-full">
            تماس با ما
          </p>
        </Link>
        {menuOpen && (
          <ul className="absolute top-[70px] left-0 w-[50%] bg-white shadow-lg  h-screen  rounded-md flex flex-col items-end p-4 text-right z-50 font-bold  md:hidden">
            <li className=" flex py-2 border-2 border-black  h-10 mb-2">
              <CiSearch onClick={() => 2} />
              <input
                type="text"
                placeholder="                                  ...جستجو"
              />
            </li>
            <li className="py-2">
              <Link href={""}>خانه</Link>
            </li>
            <li className="py-2">
              <Link href={""}>املاک</Link>
            </li>
            <li className="py-2">
              <Link href={""}>نمایندگان</Link>
            </li>
            <li className="py-2">
              <Link href={""}>درباره ما</Link>
            </li>
            <li className="py-2">
              <Link href={""}>سوالات متداول</Link>
            </li>
            <li className="py-2">
              <Link href={""}>اخبار</Link>
            </li>
            <li className="py-2">
              <Link href={""}>وبلاگ</Link>
            </li>
            <li className="py-2">
              <Link href={""}>ارتباط با ما</Link>
            </li>
            <li className="py-2">
              <div className="flex justify-around gap-2 items-center ">
                <Link href={""}>
                  <FaTelegramPlane className="hover:text-blue-400 text-xl " />
                </Link>
                <Link href={""}>
                  <TiSocialTumbler className="hover:text-blue-400 text-xl " />
                </Link>
                <Link href={""}>
                  <FaPinterestP className="hover:text-blue-400 text-xl " />
                </Link>
                <Link href={""}>
                  <FaXTwitter className="hover:text-blue-400 text-xl " />
                </Link>
                <Link href={""}>
                  <FaFacebookF className="hover:text-blue-400 text-xl " />
                </Link>
              </div>
            </li>
          </ul>
        )}
      </header>
    </div>
  );
}
