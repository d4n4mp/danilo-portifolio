import Link from "next/link"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
            <h1 className="text-4xl font-semibold">
                Danilo M<span className="text-accent">.</span>
            </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="contact">
            <Button className="text-primary border border-primary hover:text-accent hover:bg-primary hover:border-accent transition-all duration-700">
                    Contato
              </Button>
            </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
            <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
