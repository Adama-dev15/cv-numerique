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
    title: "Bondoukou_Mag",
    description:
      "J'ai conçu le site vitrine de Bkou-Mag, une entreprise spécialisée en communication et événementiel. Ce projet met en avant leurs services de manière claire et attrayante, reflétant leur expertise et leur créativité dans le domaine.",
    link: "https://adama-dev15.github.io/BONDOUKOU_MAG/",
    image: image_1,
    stack: "HTML, CSS, JAVASCRIPT"
  },
  {
    title: "Commande de nourriture en ligne",
    description:
      "J'ai développé le site de Délices Culinaires, une plateforme de commande en ligne pour les amateurs de bonne cuisine. Ce projet présente une interface conviviale et efficace, facilitant l'exploration des menus et la commande de délicieux plats directement à domicile.",
    link: "https://newfood.vercel.app/",
    image: image_2,
    stack: "JAVASCRIPT, TYPESCRIPT, NEXT JS, SHADCN/UI, TAILWIND CSS"
  },
  {
    title: "portfolio",
    description:
      "J'ai élaboré un template de portfolio sophistiqué, alliant élégance et fonctionnalité pour mettre en valeur vos réalisations. Ce projet reflète mon expertise en design web, offrant une interface intuitive et esthétique pour présenter votre travail de manière professionnelle et captivante.",
    link: "https://my-portfolio-beta-drab-41.vercel.app/",
    image: image_3,
    stack: "JAVASCRIPT, TYPESCRIPT, NEXT JS, SHADCN/UI, TAILWIND CSS"
  },
  {
    title: "Planification de mariage",
    description:
      "J'ai orchestré la création d'un site de planification de mariage intuitif, offrant une expérience en ligne fluide pour les couples. Ce projet combine fonctionnalités pratiques et design romantique pour une planification de mariage sans tracas et mémorable.",
    link: "https://mariage-nextjs.vercel.app/",
    image: image_12,
    stack: "JAVASCRIPT, TYPESCRIPT, NEXT JS, CSS"
  },

  {
    title: "Web site Restaurant",
    description:
      "création de sites web de commande et de réservation de nourriture en ligne, offrant une expérience utilisateur fluide et conviviale. Ces projets ont nécessité une conception minutieuse, intégrant des fonctionnalités de commande intuitive et de gestion des réservations pour améliorer l'accessibilité et l'efficacité des services alimentaires.",
    link: "https://adama-dev15.github.io/WEB-SITE-RESTAURANT/",
    image: image_5,
    stack: "HTML, CSS, JAVASCRIPT"
  },

  {
    title: "modal-image",
    description:
      "J'ai créé des modèles d'images modales interactives pour une expérience visuelle immersive et fluide sur les sites web. Ces conceptions visent à captiver les utilisateurs tout en maintenant une navigation intuitive.",
    link: "https://modal-image-eight.vercel.app/",
    image: image_7,
    stack: "HTML, SCSS, JAVASCRIPT"
  }
];
