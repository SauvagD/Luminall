import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex flex-row justify-between items-end w-screen text-white bg-background fixed top-0 left-0 right-0 px-8 py-2 z-10	">
      <Link href="/" className="uppercase text-3xl font-semibold	">
        LUMINALL
      </Link>
      <nav className="flex flex-row gap-4 text-sm justify-center ">
        <Link href="/about" className="text-lg">
          Projets
        </Link>
        <Link href="/porfolio" className="text-lg">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
