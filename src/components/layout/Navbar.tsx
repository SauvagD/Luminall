import Link from "next/link";

const Navbar = () => {
  return (
    <header className="grid grid-cols-3 text-white bg-background fixed top-0 left-0 px-16 py-2 w-full z-10	">
      <nav className="flex flex-row gap-4 text-sm">
        <Link href="/about">About</Link>
        <Link href="/porfolio">Portfolio</Link>
      </nav>
      <Link href="/" className="uppercase text-center text-xl font-semibold	">
        LUMINALL
      </Link>
      <nav className="ml-auto flex flex-row gap-4">
        <Link href="/">Twitter</Link>
      </nav>
    </header>
  );
};

export default Navbar;
