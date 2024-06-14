import ContactForm from "@/components/contact/Contact.form";
import HomeProjectList from "@/components/project/home-grid/HomeProject.list";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex flex-col flex-1 gap-16">
      <div className="video-container w-full h-screen overflow-hidden flex justify-center items-center">
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
      </div>

      <div className="container mx-auto flex flex-col gap-16">
        <HomeProjectList />
        <ContactForm />
        {/* <div className="flex justify-center">
          <Link href="/projects">
            <button className="transition ease-in-out duration-300 text-yellow-300 mx-auto font-medium text-xl uppercase w-80 h-20 border border-2 border-yellow-300 hover:bg-yellow-300 hover:text-black ">
              see more
            </button>
          </Link>
        </div> */}
        {/* <ContactForm /> */}
      </div>
    </div>
  );
}
