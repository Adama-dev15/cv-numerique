import Apropos from "@/components/Apropos/Apropos";
import Contact from "@/components/Contact/Contact";
import { AuroraBackgroundDemo } from "@/components/Hero/Hero";
import { Protfolio } from "@/components/Portfolio/Protfolio";
import { Services } from "@/components/Services/Services";
// import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <>
      <AuroraBackgroundDemo />
      <Apropos />
      <Services />
      <Protfolio />
      <Contact />
    </>
  );
}
