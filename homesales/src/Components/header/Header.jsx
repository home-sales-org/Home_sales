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
import { FaChevronLeft, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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

  const slideVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 120 },
    },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };

  const fadeVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.2 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <div>
      <Navbar />
      <header className="w-full px-4 py-2 flex justify-between items-center bg-white shadow-md relative flex-row-reverse">
        <h1 className="flex items-center text-2xl md:text-3xl">
          <FaRegGem className="text-blue-500 text-4xl mr-2" /> TheGem
        </h1>
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/*  Desktop Menu  */}
        <ul className="hidden md:flex flex-row-reverse gap-4 text-lg font-bold">
          <li className="hover:text-blue-400 p-1.5">خانه</li>

          <li
            className="relative hover:text-blue-400 p-1.5"
            onMouseEnter={() => setShowAmlakList(true)}
            onMouseLeave={() => setShowAmlakList(false)}
          >
            املاک
            <AnimatePresence>
              {showAmlakList && (
                <motion.ul
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute right-0 top-10 bg-white text-black shadow-lg rounded-xl p-3 z-50 text-right w-40"
                >
                  {Amlak.map((item, index) => (
                    <li
                      key={index}
                      className="text-black hover:bg-blue-500 hover:text-white py-1 px-3 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li
            className="relative hover:text-blue-400 p-1.5"
            onMouseEnter={() => setShowRepresentatives(true)}
            onMouseLeave={() => setShowRepresentatives(false)}
          >
            نمایندگان
            <AnimatePresence>
              {showRepresentatives && (
                <motion.ul
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute right-0 top-10 bg-white text-black shadow-lg rounded-xl p-3 z-50 text-right w-40"
                >
                  {Representatives.map((item, index) => (
                    <li
                      key={index}
                      className="text-black hover:bg-blue-500 hover:text-white py-1 px-3 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li className="hover:text-blue-400 p-1.5">درباره ما</li>
          <li className="hover:text-blue-400 p-1.5">سوالات متداول</li>

          <li
            className="relative hover:text-blue-400 p-1.5"
            onMouseEnter={() => setShowNews(true)}
            onMouseLeave={() => setShowNews(false)}
          >
            اخبار
            <AnimatePresence>
              {showNews && (
                <motion.ul
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute right-0 top-10 bg-white text-black shadow-lg rounded-xl p-3 z-50 text-right w-40"
                >
                  {News.map((item, index) => (
                    <li
                      key={index}
                      className="text-black hover:bg-blue-500 hover:text-white py-1 px-3 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li className="hover:bg-blue-400 p-1.5">ارتباط باما</li>
        </ul>

        <Link href="/" className="hidden lg:block">
          <p className="bg-blue-500 text-white font-bold px-4 py-2 rounded-full">
            تماس با ما
          </p>
        </Link>

        {/* ===== Mobile Menu ===== */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-[70px] left-0 w-[70%] bg-white shadow-lg h-screen rounded-md flex flex-col items-end p-4 text-right z-50 font-bold md:hidden"
            >
              <li className="flex py-2 border-2 border-black h-10 mb-2 w-full">
                <CiSearch className="mt-1 ml-2" />
                <input
                  className="w-full outline-none pr-2"
                  type="text"
                  placeholder="...جستجو"
                />
              </li>

              <li className="py-2">
                <Link href="">خانه</Link>
              </li>

              <li className="py-2 flex justify-between w-full">
                <div onClick={() => setShowAmlakList((prev) => !prev)}>
                  {showAmlakList ? (
                    <FaChevronDown className="absolute left-5" />
                  ) : (
                    <FaChevronLeft className="absolute left-5" />
                  )}
                </div>
                <Link href="">املاک</Link>
              </li>
              <AnimatePresence>
                {showAmlakList && (
                  <motion.ul
                    variants={fadeVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full text-right mt-2 pr-4 space-y-1"
                  >
                    {Amlak.map((item, index) => (
                      <li key={index} className="font-normal text-black">
                        <Link href="/">{item}</Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              <li className="py-2 flex justify-between w-full">
                <div onClick={() => setShowRepresentatives((prev) => !prev)}>
                  {showRepresentatives ? (
                    <FaChevronDown className="absolute left-5" />
                  ) : (
                    <FaChevronLeft className="absolute left-5" />
                  )}
                </div>
                <Link href="">نمایندگان</Link>
              </li>
              <AnimatePresence>
                {showRepresentatives && (
                  <motion.ul
                    variants={fadeVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full text-right mt-2 pr-4 space-y-1"
                  >
                    {Representatives.map((item, index) => (
                      <li key={index} className="font-normal text-black">
                        <Link href="/">{item}</Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              <li className="py-2">
                <Link href="">درباره ما</Link>
              </li>
              <li className="py-2">
                <Link href="">سوالات متداول</Link>
              </li>

              <li className="py-2 flex justify-between w-full">
                <div onClick={() => setShowNews((prev) => !prev)}>
                  {showNews ? (
                    <FaChevronDown className="absolute left-5" />
                  ) : (
                    <FaChevronLeft className="absolute left-5" />
                  )}
                </div>
                <Link href="">اخبار</Link>
              </li>
              <AnimatePresence>
                {showNews && (
                  <motion.ul
                    variants={fadeVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full text-right mt-2 pr-4 space-y-1"
                  >
                    {News.map((item, index) => (
                      <li key={index} className="font-normal text-black">
                        <Link href="/">{item}</Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              <li className="py-2">
                <Link href="">وبلاگ</Link>
              </li>
              <li className="py-2">
                <Link href="">ارتباط با ما</Link>
              </li>
              <li className="py-2">
                <div className="flex justify-around gap-2 items-center w-full">
                  <Link href="">
                    <FaTelegramPlane className="hover:text-blue-400 text-xl" />
                  </Link>
                  <Link href="">
                    <TiSocialTumbler className="hover:text-blue-400 text-xl" />
                  </Link>
                  <Link href="">
                    <FaPinterestP className="hover:text-blue-400 text-xl" />
                  </Link>
                  <Link href="">
                    <FaXTwitter className="hover:text-blue-400 text-xl" />
                  </Link>
                  <Link href="">
                    <FaFacebookF className="hover:text-blue-400 text-xl" />
                  </Link>
                </div>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
