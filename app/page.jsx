import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full flex flex-col justify-around">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-md xl:text-xl">Desenvolvedor de Software</span>
            <h1 className="h1 mb-6">Oi, me chamo <br /> <span className="text-accent">Danilo Maletta</span></h1>
            <p className="max-w-[600px] mb-9 text-white/80">Sou excelente em criar experiências digitais elegantes e sou proficiente em várias linguagens de programação e tecnologias.</p>

            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row justify-center items-center gap-8">
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex w-[50%] min-w-[220px] items-center gap-2 text-accent hover:text-primary transition-all duration-700"
            >
              <a
                href="/Curriculum_Vitae___Danilo_Maletta.pdf"
                download="Curriculum_Vitae___Danilo_Maletta.pdf"
                className="flex w-full justify-center items-center"
              >
                <span className="pr-4">Download CV</span>
                <FiDownload className="text-xl" />
              </a>
            </Button>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <div>
          <Stats />
        </div>
      </div>
      
    </section>
  )
}

export default Home
