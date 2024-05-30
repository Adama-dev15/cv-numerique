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
      "     Je crée des interfaces utilisateur attrayantes et réactives en utilisant les technologies les plus modernes. Mon expertise inclut JavaScript et des frameworks comme React Js et Next Js, garantissant des sites web rapides, accessibles et optimisés pour tous les appareils."
  },
  {
    icon: <FaDatabase size={50} />,
    title: "Back End",
    description:
      "    Je construis des systèmes backend robustes et évolutifs, assurant la gestion efficace des données et des processus de votre application. En utilisant des technologies telles que Node.Js, Express Js et des bases de données comme MySQL et MongoDB, je développe des API sécurisées et performantes."
  },
  {
    icon: <FaMobileAlt size={50} />,
    title: "Mobile",
    description:
      " Je développe des applications mobiles intuitives et performantes pour Android  utilisant des technologies comme Dart et Flutter. Mon objectif est de fournir une expérience utilisateur fluide et engageante, tout en assurant une performance optimale sur tous les appareils."
  }
];
