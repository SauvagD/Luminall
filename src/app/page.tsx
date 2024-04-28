import Image from "next/image";
import testImg from "../../public/images/full-shot-ninja-wearing-equipment_23-2150961100.jpg";

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
          <h2 className="shadow uppercase text-5xl text-white drop-shadow-2xl">
            Last Work
          </h2>
          <div className="grid grid-rows-2 grid-cols-2 gap-6">
            <div className="hover:shadow-2xl col-span-1 rounded overflow-hidden aspect-image">
              <Image src={testImg} alt="" />
            </div>
            <div className=" col-span-1 rounded">
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
        <div className="flex">
          <button className="text-color-blue mx-auto">see more</button>
        </div>
        {/*         <div>
          <h2 className="shadow uppercase text-5xl text-white drop-shadow-2xl">
            Last Work
          </h2>
        </div> */}
      </div>
    </div>
  );
}
