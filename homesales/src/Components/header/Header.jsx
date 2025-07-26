"use client" ;
import Link from "next/link";
import Navbar from '../../Components/header/Navbar'
import { FaRegGem } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
    const Amlak = ["لیست املاک", "املاک مرتبط","ملک تکی","برای اجاره"," برای فروش"];
    const Representatives =["لیست نمایندگان","صفحه نمایندگان"];
    const News = [ " اخبارما", "وبلاگ"];
    const [showAmlakList, setShowAmlakList] = useState(false);
    const [showRepresentatives, setShowRepresentatives] = useState(false);
    const [showNews, setShowNews] = useState(false);
  return (
    <div>
      <Navbar />
      <header className=" flex flex-row-reverse mt-2 w-[95%] justify-around">
        <h1 className="flex  text-3xl">
          <FaRegGem className="text-blue-500 text-4xl" /> TheGem
        </h1>
        <ul className="flex flex-row-reverse gap-4 text-xl font-bold">
          <li className="hover:text-blue-400 hover:bg-gray-50 hover:rounded-full  p-1.5">
            خانه
          </li>
          <li
            className="hover:text-blue-400 hover:bg-gray-50 hover:rounded-full  p-1.5 relative"
            onMouseEnter={() => setShowAmlakList(true)}
            onMouseLeave={() => setShowAmlakList(false)}
          >
            {" "}
            املاک
            {showAmlakList && (
              <ul className="absolute right-0 top-10 bg-white shadow-lg rounded-xl p-5 w-40 z-50 text-right">
                {Amlak.map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-blue-500 py-1 px-3 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="hover:text-blue-400 hover:bg-gray-50 hover:rounded-full  p-1.5 relative"
          onMouseEnter={()=> setShowRepresentatives(true)}
          onMouseLeave={()=> setShowRepresentatives(false)}>
            {" "}
            نمایندگان
            {showRepresentatives && (
              <ul className="absolute right-0 top-10 bg-white shadow-lg rounded-xl p-5 w-45 z-50 text-right">
                {Representatives.map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-blue-500 py-1 px-3 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="hover:text-blue-400 hover:bg-gray-50 hover:rounded-full  p-1.5">
            درباره ما
          </li>
          <li className="hover:text-blue-400 hover:bg-gray-50 hover:rounded-full  p-1.5">
            سوالات متداول
          </li>
          <li className="hover:text-blue-400 hover:bg-gray-50 hover:rounded-full  p-1.5 relative"
           onMouseEnter={() => setShowNews(true)}
            onMouseLeave={() => setShowNews(false)}>
            اخبار
{
    showNews && (
          <ul className="absolute right-0 top-10 bg-white shadow-lg rounded-xl p-5 w-45 z-50 text-right">
            {News.map((item, index) => (
              <li
                key={index}
                className="hover:text-blue-500 py-1 px-3 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
)}  
          </li>
          <li className="hover:text-blue-400 hover:bg-gray-50 hover:rounded-full  p-1.5">
            ارتباط باما
          </li>
        </ul>
        <Link href="/">
          <p className="bg-blue-500 text-white font-bold px-4 py-2 rounded-full">
            تماس با ما
          </p>
        </Link>
      </header>
    </div>
  );
}
