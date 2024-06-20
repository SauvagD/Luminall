import About from "@/components/about/About";
import ContactForm from "@/components/contact/Contact.form";
import HomeGallery from "@/components/home/HomeGallery";
import HomeProjectList from "@/components/project/home-grid/HomeProject.list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luminall",
  description: "Mettre le à propos ici",
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
