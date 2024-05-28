"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { AuroraBackground } from "../ui/aurora-background";
import Typed from "typed.js";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa";
import Image from "next/image";
import image_profil from "@/images/about-removebg-preview.png";
import Link from "next/link";

const typedStrings =
  "Web Designer, Développeur Web, Développeur Front-End, Designer d&apos;Applications, Développeur d&apos;Applications, Développeur Back-End, Designer UI/UX";

export function AuroraBackgroundDemo() {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const typedTextElement = typedTextRef.current;

    if (typedTextElement) {
      const options = {
        strings: typedStrings.split(", "),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true
      };

      const typed = new Typed(typedTextElement, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut"
        }}
        className=" container  px-5 md:px-8 lg:px-20 lg:h-[100vh] bg-neutral-950 text-white pb-10 md:pb-20 lg:pb-0"
      >
        <div className="content grid grid-cols-1 lg:grid-cols-2 relative">
          {/* left */}
          <div className="left w-full pt-96 md:pt-[500px] lg:pt-40 flex flex-col gap-8">
            <div className="info-user font-bold text-[20px] md:text-[1.7rem] flex flex-col gap-3">
              <p className="text-center lg:text-left">
                Bonjour, c&apos;est Moi
              </p>
              <h1 className="relative z-10 text-[25px] md:text-5xl text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600   font-sans font-bold">
                TRAORE ADAMA
              </h1>
              <p className="text-center lg:text-left">
                Et je suis un{" "}
                <span
                  ref={typedTextRef}
                  className="typed-text-output  relative z-10   bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600   font-sans font-bold "
                ></span>
              </p>
            </div>

            <div className="reseau flex items-center justify-center lg:items-start lg:justify-start gap-5 relative">
              <div className="icon border cursor-pointer border-neutral-600 rounded-full w-8 h-8 flex items-center justify-center text-neutral-600 hover:bg-neutral-600 hover:text-white  duration-200  hover:shadow-lg hover:shadow-neutral-600">
                <Link href="https://web.facebook.com/profile.php?id=100069607812200">
                  <FaFacebookF />
                </Link>
              </div>
              <div className="icon border cursor-pointer border-neutral-600 rounded-full w-8 h-8 flex items-center justify-center text-neutral-600 hover:bg-neutral-600 hover:text-white  duration-200  hover:shadow-lg hover:shadow-neutral-600">
                <Link href="https://www.linkedin.com/in/adamo-traore-b36335225/">
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className="icon border cursor-pointer border-neutral-600 rounded-full w-8 h-8 flex items-center justify-center text-neutral-600 hover:bg-neutral-600 hover:text-white  duration-200  hover:shadow-lg hover:shadow-neutral-600">
                <Link href="https://www.tiktok.com/@adamotraore437?lang=fr">
                  <FaTiktok />
                </Link>
              </div>
              <div className="icon border cursor-pointer border-neutral-600 rounded-full w-8 h-8 flex items-center justify-center text-neutral-600 hover:bg-neutral-600 hover:text-white  duration-200  hover:shadow-lg hover:shadow-neutral-600">
                <Link href="https://wa.me/2250585589812">
                  <FaWhatsapp />
                </Link>
              </div>
            </div>

            <div className="down flex items-center justify-center lg:items-start lg:justify-start">
              <button className="font-bold text-white w-max bg-neutral-600 rounded-full py-2 px-4  hover:bg-neutral-500 hover:shadow-lg hover:shadow-neutral-600 duration-200">
                <a href="/traore_adama_cv.pdf" download className="text-white">
                  Télécharger CV
                </a>
              </button>
            </div>
          </div>
          {/* left end*/}

          {/* right */}
          <div className="right w-full pt-20 lg:pt-28 flex items-center justify-center lg:justify-end">
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
          {/* right end*/}
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
