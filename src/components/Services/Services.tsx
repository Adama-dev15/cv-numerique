import React from "react";
import { FaDatabase, FaMobileAlt } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";
import { HoverEffect } from "../ui/card-hover-service";

export function Services() {
  return (
    <div
      className=" px-5 md:px-8 lg:px-20 text-white flex flex-col py-20 bg-neutral-950"
      id="services"
    >
      <div className="title text-center  font-bold text-[25px] md:text-3xl">
        Mes
        <span className="uppercase text-neutral-600"> services</span>
      </div>
      <div>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
export const projects = [
  {
    icon: <IoCodeSlashSharp size={50} />,
    title: "Front End",
    description:
      "     Explorez mes compétences en développement BackEnd : des solutions robustes et sécurisées qui alimentent les fonctionnalités de vos applications web."
  },
  {
    icon: <FaDatabase size={50} />,
    title: "Back End",
    description:
      "     Explorez mes compétences en développement BackEnd : des solutions robustes et sécurisées qui alimentent les fonctionnalités de vos applications web."
  },
  {
    icon: <FaMobileAlt size={50} />,
    title: "Mobile",
    description:
      "  Explorez mon savoir-faire en développement d'applications :des solutions mobiles innovantes et conviviales conçues pour répondre aux besoins de vos utilisateurs."
  }
];
