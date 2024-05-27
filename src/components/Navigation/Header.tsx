"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import {
  IconBriefcase,
  IconHome,
  IconMessage,
  IconTools,
  IconUser
} from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Accueil",
      link: "/",
      icon: (
        <IconHome className="h-5 w-5 text-white hover:text-green-600 hover:shadow-md hover:shadow-green-600 duration-200" />
      )
    },
    {
      name: "A Propos",
      link: "#apropos",
      icon: (
        <IconUser className="h-5 w-5 text-white hover:text-green-600 hover:shadow-md hover:shadow-green-600 duration-200" />
      )
    },
    {
      name: "Services",
      link: "/services",
      icon: (
        <IconTools className="h-5 w-5 text-white hover:text-green-600 hover:shadow-md hover:shadow-green-600 duration-200" />
      )
    },
    {
      name: "Portfolio",
      link: "/portfolio",
      icon: (
        <IconBriefcase className="h-5 w-5 text-white hover:text-green-600 hover:shadow-md hover:shadow-green-600 duration-200" />
      )
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-5 w-5 text-white hover:text-green-600 hover:shadow-md hover:shadow-green-600 duration-200" />
      )
    }
  ];
  return (
    <div className="w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
