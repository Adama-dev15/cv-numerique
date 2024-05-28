"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className={cn(
          "  flex w-full z-[99999]  fixed top-0 inset-x-0 mx-auto border border-transparent text-white dark:border-white/[0.2]  dark:bg-black    px-5 md:px-8 lg:px-20 py-3 bg-neutral-900 bg-opacity-80  items-center justify-between space-x-4 shadow-sm shadow-gray-700",
          className
        )}
      >
        <div className="logo">
          {" "}
          <h1 className="scroll-m-20 text-white  text-2xl font-extrabold tracking-tight lg:text-4xl">
            <Link href="/">
              ADAMA
              <span className="relative z-10  text-2xl lg:text-4xl   bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600   font-sans font-bold">
                Dev.
              </span>
            </Link>
          </h1>
        </div>
        <div className="flex items-center justify-center gap-4 md:gap-5 lg:gap-10">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn("relative  items-center flex space-x-1    ")}
            >
              <span className="block sm:hidden  hover:text-neutral-500 hover:shadow-md hover:shadow-neutral-500 duration-200">
                {navItem.icon}
              </span>
              <span className="hidden sm:block text-lg  hover:border-b hover:text-neutral-500   duration-200">
                {navItem.name}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
