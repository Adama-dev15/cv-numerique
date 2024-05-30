import { HoverEffect } from "../ui/card-hover-effect";

import image_1 from "@/images/portfolio/BKOU_MAG.png";
import image_2 from "@/images/portfolio/food.png";
import image_3 from "@/images/portfolio/monport.png";
import image_4 from "@/images/portfolio/SMS_SCHOOL.png";
import image_5 from "@/images/portfolio/Restaurant.png";
import image_6 from "@/images/portfolio/anacard.png";
import image_7 from "@/images/portfolio/modal.png";
import image_8 from "@/images/portfolio/biwalogo_agence.png";
import image_9 from "@/images/portfolio/pexelsImages.png";
import image_10 from "@/images/portfolio/CV.png";
import image_11 from "@/images/portfolio/JD.png";
import image_12 from "@/images/portfolio/mariage.png";

export function VoirPlusPortfolio() {
  return (
    <div
      className=" px-5 md:px-8 lg:px-20 text-white flex flex-col py-20 bg-neutral-900"
      id="portfolio"
    >
      <div className="title text-center  font-bold text-[25px] md:text-3xl">
        Mes <span className="uppercase text-neutral-600">Portfolio</span>
      </div>
      <div>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Bondoukou_Mag",
    description:
      "J'ai conçu le site vitrine de Bkou-Mag, une entreprise spécialisée en communication et événementiel. Ce projet met en avant leurs services de manière claire et attrayante, reflétant leur expertise et leur créativité dans le domaine.",
    link: "https://adama-dev15.github.io/BONDOUKOU_MAG/",
    image: image_1,
    stack: "HTML, CSS, JAVASCRIPT"
  },
  {
    title: "FoodFlow",
    description:
      "J'ai développé le site de FoodFlow, une plateforme de commande en ligne pour les amateurs de bonne cuisine. Ce projet présente une interface conviviale et efficace, facilitant l'exploration des menus et la commande de délicieux plats directement à domicile.",
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
    title: "Portfolio",
    description:
      "J'ai élaboré un template de portfolio sophistiqué, alliant élégance et fonctionnalité pour mettre en valeur vos réalisations. Ce projet reflète mon expertise en design web, offrant une interface intuitive et esthétique pour présenter votre travail de manière professionnelle et captivante.",
    link: "https://projet-portfolio-ten.vercel.app/",
    image: image_11,
    stack: "JAVASCRIPT, TYPESCRIPT, NEXT JS, SCSS"
  },
  {
    title: "SMS-School",
    description:
      "SMS-School, un site vitrine facilitant la communication entre les parents et les établissements éducatifs. Ce projet offre une interface conviviale et interactive pour renforcer l'engagement et simplifier la gestion scolaire, améliorant ainsi l'expérience des utilisateurs.",
    link: "https://sms-school.vercel.app/",
    image: image_4,
    stack: "HTML, CSS"
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
    title: "AnacarderShip",
    description:
      "J'ai développé un site web pour la transformation des anacarde, offrant une plateforme intuitive et informative pour les acteurs de l'industrie. Cette création vise à favoriser l'efficacité et la croissance dans ce secteur en plein essor.",
    link: "https://adama-dev15.github.io/AnacarderShip/",
    image: image_6,
    stack: "HTML, CSS"
  },
  {
    title: "modal-image",
    description:
      "J'ai créé des modèles d'images modales interactives pour une expérience visuelle immersive et fluide sur les sites web. Ces conceptions visent à captiver les utilisateurs tout en maintenant une navigation intuitive.",
    link: "https://modal-image-eight.vercel.app/",
    image: image_7,
    stack: "HTML, SCSS, JAVASCRIPT"
  },
  {
    title: "Biwalogo",
    description:
      "J'ai revampé la page d'accueil de Biwalogo pour me perfectionner, fusionnant créativité et compétences en design web. Cette expérience m'a permis d'affiner mes compétences en conception et de relever avec succès le défi de moderniser une interface existante.",
    link: "https://adama-dev15.github.io/BIWALOGO/",
    image: image_8,
    stack: "HTML, CSS"
  },
  {
    title: "Beautiful-photos",
    description:
      "J'ai optimisé la réactivité d'un site de téléchargement d'images, assurant une expérience fluide sur tous les appareils. Cette initiative a renforcé mes compétences en développement web, en garantissant une accessibilité optimale pour les utilisateurs sur différentes plateformes.",
    link: "https://adama-dev15.github.io/Beautiful-photos/",
    image: image_9,
    stack: "HTML, CSS"
  },
  {
    title: "CV Numérique",
    description:
      "J'ai conçu un CV numérique innovant, combinant design moderne et contenu dynamique pour une présentation professionnelle et impactante. Cette création témoigne de ma capacité à mettre en valeur les compétences et l'expérience de manière interactive, offrant une expérience unique aux recruteurs.",
    link: "https://adama-dev15.github.io/cv_html_css/",
    image: image_10,
    stack: "HTML, SCSS"
  }
];
