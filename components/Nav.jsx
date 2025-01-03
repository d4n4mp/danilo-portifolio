"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from 'react'

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
    name: "Trabalhos",
    path: "/work",
  },

];

const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-mediu hover:text-accent transition-all`}>
            {link.name}
        </Link>
      })}
    </nav>
  )
}

export default Nav
