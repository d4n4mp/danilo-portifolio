"use client";

import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
  {
    name: "início",
    path: "/",
  },
  {
    name: "serviços",
    path: "/services",
  },
  {
    name: "currículo",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contato",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar abertura do menu

  const closeMenu = () => {
    setIsOpen(false); // Fecha o menu
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="flex justify-center items-center"
        onClick={() => setIsOpen(true)}
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex justify-center items-center h-11">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Danilo M<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
              onClick={closeMenu} // Fecha o menu ao clicar no link
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
