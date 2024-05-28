import { HoverEffect } from "../ui/card-hover-effect";

import image_1 from "@/images/portfolio/BKOU_MAG.png";
import image_2 from "@/images/portfolio/food.png";
import image_3 from "@/images/portfolio/monport.png";
import image_5 from "@/images/portfolio/Restaurant.png";
import image_7 from "@/images/portfolio/modal.png";
import image_12 from "@/images/portfolio/mariage.png";
import Link from "next/link";

export function Protfolio() {
  return (
    <div
      className=" px-5 md:px-8 lg:px-20 text-white flex flex-col py-20 bg-neutral-900"
      id="portfolio"
    >
      <div className="title text-center  font-bold text-[25px] md:text-3xl">
        Mes <span className="uppercase text-neutral-600">Portfolio</span>
      </div>
      <div>
        <HoverEffect items={project} />
      </div>

      <div className="down flex items-center justify-center ">
        <button className="font-bold text-white w-max bg-neutral-600 rounded-full py-2 px-4  hover:bg-neutral-500 hover:shadow-lg hover:shadow-neutral-600 duration-200">
          <Link href="/portfolio" className="text-white">
            Voir plus
          </Link>
        </button>
      </div>
    </div>
  );
}

export const project = [
  {
    title: "BONDOUKOU_MAG",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://adama-dev15.github.io/BONDOUKOU_MAG/",
    image: image_1
  },
  {
    title: "Commande de nourriture en ligne",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://newfood.vercel.app/",
    image: image_2
  },
  {
    title: "portfolio",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://my-portfolio-beta-drab-41.vercel.app/",
    image: image_3
  },
  {
    title: "Planification de mariage",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://mariage-nextjs.vercel.app/",
    image: image_12
  },

  {
    title: "WEB SITE RESTAURANT",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://adama-dev15.github.io/WEB-SITE-RESTAURANT/",
    image: image_5
  },

  {
    title: "modal-image",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://modal-image-eight.vercel.app/",
    image: image_7
  }
];
