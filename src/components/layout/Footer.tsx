import { SOCIAL_MEDIAS } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-62 w-screen p-12 grid grid-cols-1 gap-12 sm:grid-cols-3">
      <div className=" flex flex-row gap-6 justify-center items-center">
        {SOCIAL_MEDIAS.map(({ name, href, icon }) => (
          <Link key={"footer-" + name} href={href} target="_blank">
            <Image src={icon} alt={name} width={20} height={20} />
          </Link>
        ))}
      </div>
      <div className=" flex flex-col gap-2 justify-center items-center">
        <p className="text-xl text-white font-medium">Luminall</p>
      </div>
      <div className=" flex flex-col gap-2 justify-center items-center">
        <p className="text-lg text-[#C9C9C9] text-[16px]">
          @copyright luminall-studio
        </p>
      </div>
    </div>
  );
};

export default Footer;
