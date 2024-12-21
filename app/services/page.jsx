"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Front-end Dev.",
    description: "Crio interfaces modernas, interativas e responsivas, focadas em entregar a melhor experiência ao usuário. Utilizo entre diversas tecnologias, HTML5, CSS3, Java/TypeScript, Next.js, Tailwind.css e FramerMotion, para transformar designs em realidade funcional",
    href: "",
  },
  {
    num: "02",
    title: "Back-end Dev.",
    description: "Possuo experiência no desenvolvimento de sistemas Node.js e Java para criação de servidores e APIs. Tenho expertise na integração de bancos de dados SQL e NoSQL. Conhecimento sólido nos principais frameworks, como Spring no ecossistema Java e Express.js no Node.js.",
    href: "",
  },
  {
    num: "03",
    title: "Firmware Dev.",
    description: "Programo firmwares otimizados para dispositivos embarcados. Experiência com linguagens C/C++ e plataformas ESP32, Arduino e STM32, desenvolvendo soluções para IoT, automação e sistemas de controle.",
    href: "",
  },
  {
    num: "04",
    title: "Gestão de Projetos",
    description: "Atuo na liderança e organização de projetos com metodologias ágeis. Coordeno equipes multidisciplinares, garantindo prazos, qualidade e comunicação eficaz entre todas as partes envolvidas, com foco na entrega de resultados.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          inicial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-between gap-6 group"
              >
                {/* top */}
                <div className="">
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {services.num}
                    </div>
                    <Link
                      href={services.href}
                      className="w-[65px] h-[65px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                  {/* title */}
                  <h2 className="text-[38px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 pt-2">{services.title}</h2>
                </div>
                {/* description */}
                <p className="text-shite/60 text-[15px]">{services.description}</p>
                
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
