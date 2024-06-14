"use client";

import Link from "next/link";
import { useState } from "react";

import Navbar from "./Navbar";

const Header = () => {
  const [opened, setOpened] = useState(false);
  return (
    <header className="flex flex-col w-screen text-white bg-background fixed top-0 left-0 right-0 px-8 py-2 z-10	">
      <div className="flex flex-row justify-between items-end">
        <Link href="/" className="uppercase text-3xl font-semibold">
          LUMINALL
        </Link>
        <Navbar opened={opened} setOpened={setOpened} />
      </div>
      {opened && (
        <div className="fixed inset-0 z-50 mt-12 flex-1 px-8 bottom-0 left-0 right-0 bg-background flex flex-col items-center justify-center gap-12">
          <Link
            href="/"
            className="uppercase font-bold text-3xl"
            onClick={() => setOpened(false)}
          >
            Accueil
          </Link>
          <Link
            href="/#projects"
            className="uppercase font-bold text-3xl"
            onClick={() => setOpened(false)}
          >
            Projets
          </Link>
          <Link
            href="/#contact"
            className="uppercase font-bold text-3xl"
            onClick={() => setOpened(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;