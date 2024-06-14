"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  return (
    <>
      <Burger opened={opened} toggle={() => setOpened((v: boolean) => !v)} />
      <nav className="flex-row gap-4 text-sm justify-center hidden sm:flex">
        <Link href="/#about" className="text-lg font-bold">
          A propos
        </Link>
        <Link href="/#projects" className="text-lg font-bold">
          Projets
        </Link>
        <Link href="/#contact" className="text-lg font-bold">
          Contact
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
