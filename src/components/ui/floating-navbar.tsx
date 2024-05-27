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
          "  flex w-full  fixed top-0 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2]  dark:bg-black bg-neutral-950 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-5 md:px-8 lg:px-14 py-2  items-center justify-between space-x-4",
          className
        )}
      >
        <div className="logo">
          {" "}
          <h1 className="scroll-m-20 text-white text-2xl font-extrabold tracking-tight lg:text-4xl">
            <Link href="/">
              ADAMA<span className="text-green-600">Dev.</span>
            </Link>
          </h1>
        </div>
        <div className="flex items-center justify-center gap-4 md:gap-5 lg:gap-10">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative  items-center flex space-x-1 text-white  "
              )}
            >
              <span className="block sm:hidden hover:text-green-600 hover:shadow-md hover:shadow-green-600 duration-200">
                {navItem.icon}
              </span>
              <span className="hidden sm:block text-sm hover:text-green-600 hover:shadow-sm hover:shadow-green-600 duration-200">
                {navItem.name}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
