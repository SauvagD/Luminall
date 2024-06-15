"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Burger = ({ toggle, opened }: any) => {
  const renderContent = () => {
    if (opened) {
      return <Image src={"/icons/close.svg"} width={30} height={30} alt="" />;
    }
    return <Image src={"/icons/burger.svg"} width={30} height={30} alt="" />;
  };
  return (
    <div className="block sm:hidden" onClick={() => toggle()}>
      {renderContent()}
    </div>
  );
};

const Navbar = ({ setOpened, opened }: any) => {
  const router = useRouter();
  useEffect(() => {
    const handleScroll = (event: any) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("data-to");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      } else {
        router.push(`/#${targetId}`);
      }
    };

    const links = document.querySelectorAll(".link");
    links.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, [router]);

  return (
    <>
      <Burger opened={opened} toggle={() => setOpened((v: boolean) => !v)} />
      <nav className="flex-row gap-8 text-sm justify-center hidden sm:flex">
        <div data-to="about" className="link text-lg font-bold cursor-pointer">
          A propos
        </div>
        <div
          data-to="projects"
          className="link text-lg font-bold cursor-pointer"
        >
          Projets
        </div>
        <div
          data-to="contact"
          className="link text-lg font-bold cursor-pointer"
        >
          Contact
        </div>
      </nav>
    </>
  );
};

export default Navbar;
