import About from "@/components/about/About";
import ContactForm from "@/components/contact/Contact.form";
import HomeGallery from "@/components/home/HomeGallery";
import HomeProjectList from "@/components/project/home-grid/HomeProject.list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luminall",
  description:
    "Luminall est un studio dévoué à vos idées, notre but ? Transformez votre vision en réalité",
  keywords: [
    "VFX",
    "Effets Visuels",
    "Digital",
    "Trucage",
    "3D",
    "Cinéma",
    "Série",
    "Publicité",
    "Advertising",
    "Animaux",
    "Digidouble",
    "Character",
    "Character Design",
    "Groom",
    "Fur",
    "Skin",
    "Lighting",
    "Compositing",
    "Compo",
    "Shading",
    "Modeling",
    "Texturing",
    "Layout",
    "Rendering",
    "Agence",
    "Post-Production",
    "Animation",
    "Houdini",
    "RedShift",
    "Arnold",
    "Maya",
    "Mari",
    "Nuke",
    "Zbrush",
    "Substance Painter",
  ],
};

export default async function Home() {
  return (
    <div className="flex flex-col flex-1 gap-16">
      <HomeGallery />
      <div className="sm:max-w-[75vw]  xl:container mx-auto flex flex-col gap-16">
        <About />
        <HomeProjectList />
        <ContactForm />
      </div>
    </div>
  );
}
