import React from "react";
import image_profil from "@/images/profil-removebg-preview.png";
import Image from "next/image";

const Apropos = () => {
  return (
    <div
      className=" container px-5 md:px-8 lg:px-20 lg:h-[100vh] bg-neutral-900 text-white pt-[350px] md:pt-[500px]  lg:py-20"
      id="apropos"
    >
      <div className="content flex flex-col-reverse gap-10 lg:gap-0 lg:grid lg:grid-cols-2 w-full">
        <div className="left w-full flex items-center justify-center lg:justify-start pb-10 lg:pb-0">
          <div className="image flex items-center justify-center bg-neutral-600 rounded-full   w-[300px] h-[300px] md:w-[400px]   md:h-[400px]">
            <Image
              src={image_profil}
              width={1000}
              height={400}
              alt="profi"
              className=" max-w-[300px] max-h-[300px] md:max-w-[400px]   md:max-h-[400px] rounded-full object-cover"
            />
          </div>
        </div>
        <div className="right w-full flex items-center justify-center lg:justify-start">
          <div className=" flex flex-col items-center justify-center lg:items-start lg:justify-start gap-4">
            <div className="title text-center md:text-left font-bold text-[25px] md:text-3xl">
              À propos de{" "}
              <span className="uppercase text-neutral-600">moi</span>
            </div>
            <div>
              <p className="  text-justify  ">
                Je suis{" "}
                <span className="text-neutral-600 font-bold ">
                  Traoré Adama
                </span>{" "}
                , développeur front-end passionné avec une expertise pointue en
                JavaScript, React.js, Next.js, NestJS et Tailwind CSS. Je crée
                des interfaces utilisateur élégantes et performantes pour le web
                et le mobile, garantissant une expérience utilisateur fluide et
                réactive. Bien que mon expertise se concentre sur le front-end,
                je suis également compétent en back-end, notamment avec Node.js,
                Express.js, et MongoDB, me permettant de comprendre et
                d&apos;intégrer les besoins complets d&apos;une application. Mon
                approche méticuleuse et mon enthousiasme pour les nouvelles
                technologies me motivent à toujours apprendre et à
                m&apos;améliorer. Je suis convaincu que mon savoir-faire et ma
                passion pour le développement front-end feront de moi un atout
                précieux pour votre équipe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
