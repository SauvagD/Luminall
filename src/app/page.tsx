import Image from "next/image";
import testImg from "../../public/images/full-shot-ninja-wearing-equipment_23-2150961100.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 gap-16">
      <div className="video-container">
        <video className="video" muted autoPlay>
          <source
            src="/videos/istockphoto-1481238254-640_adpp_is.mp4"
            type="video/mp4"
          />
        </video>
        <Image
          src="/icons/chevron-down.svg"
          alt=""
          width="80"
          height={80}
          style={{
            position: "absolute",
            left: "calc(50% - 40px)",
            bottom: 20,
          }}
        />
      </div>
      <div className="custom-shadow"></div>
      <div className="container mx-auto">
        <div>
          <h2 className="shadow uppercase text-5xl text-yellow-300 drop-shadow-2xl">
            Last Work
          </h2>
          <div className="grid grid-rows-2 grid-cols-2 gap-6">
            <Link
              href="/projects/test"
              className="hover:shadow-2xl cursor-pointer col-span-1 rounded overflow-hidden aspect-image"
            >
              <Image src={testImg} alt="" />
            </Link>
            <div className="col-span-1 rounded">
              <Image src={testImg} alt="" />
            </div>
            <div className="col-span-2 rounded overflow-hidden h-80">
              <Image
                src={testImg}
                alt=""
                className="object-cover"
                style={{
                  minWidth: "100%",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center	">
          <Link href="/projects">
            <button className="transition ease-in-out duration-300 text-yellow-300 mx-auto font-medium text-xl uppercase w-80 h-20 border border-2 border-yellow-300 hover:bg-yellow-300 hover:text-black ">
              see more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
