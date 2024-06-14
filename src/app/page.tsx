import About from "@/components/about/About";
import ContactForm from "@/components/contact/Contact.form";
import HomeGallery from "@/components/home/HomeGallery";
import HomeProjectList from "@/components/project/home-grid/HomeProject.list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luminal studio",
  description: "Mettre le à propos ici",
};

export default async function Home() {
  return (
    <div className="flex flex-col flex-1 gap-16">
      {/* <div className="video-container w-full h-screen overflow-hidden flex justify-center items-center">
        <video
          className="video absolute top-0 left-1/2 transform -translate-x-1/2 h-full"
          muted
          autoPlay
        >
          <source
            src="/videos/istockphoto-1481238254-640_adpp_is.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className="bg-background w-16 h-16 rounded-full flex justify-center items-center cursor-pointer text-white"
          style={{
            position: "absolute",
            bottom: 20,
          }}
        >
          <Image src="/icons/chevron-down.svg" alt="" width="50" height={50} />
        </div>
      </div> */}

      <HomeGallery />

      <div className="container mx-auto flex flex-col gap-16">
        <About />
        <HomeProjectList />
        <ContactForm />
      </div>
    </div>
  );
}
