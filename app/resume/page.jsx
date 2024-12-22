"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDocker,
} from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiTailwindcss, SiNextdotjs, SiSpring, SiStrapi } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const about = {
  title: "Sobre mim",
  description:
    "Me chamo Danilo Almeida Maletta, sou pesquisador e desenvolvedor de software com experiência em todas as camadas de atuação. Nesta plataforma, apresento todo o trabalho que desenvolvi ao longo da minha carreira. Fico à disposição para contato e futuras colaborações.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Danilo Almeida Maletta",
    },
    {
      fieldName: "Telefone",
      fieldValue: "(+55) 61 9 8133 5258",
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Years",
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro",
    },
    {
      fieldName: "Email",
      fieldValue: "danilo.amp7@gmail.com",
    },
    {
      fieldName: "Lenguages",
      fieldValue: "Português / Inglês",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Minha experiência",
  description:
    "Construí minha carreira em um instituto de pesquisa e desenvolvimento, onde tive a oportunidade única de trabalhar em projetos de diversas áreas tecnológicas e com diferentes soluções. Esse ambiente multidisciplinar me permitiu explorar, na prática, todos os campos de atuação de uma solução tecnológica: desde o desenvolvimento de dispositivos com software de baixo nível, passando por aplicações high-end com interfaces gráficas fluidas, até a gestão completa de projetos. Essa experiência diversificada ampliou minha visão sistêmica e aprofundou minha expertise em todo o ciclo de desenvolvimento de tecnologias.",
  items: [
    {
      company: "Grupo ICTS - Cemig GT",
      position: "Gestão de Projeto & Firmware Dev.",
      duration: "2022 - 2024",
    },
    {
      company: "Grupo ICTS",
      position: "Full Stack Dev.",
      duration: "2021 - 2022",
    },
    {
      company: "Grupo ICTS - Jabil",
      position: "Gestão de Projeto & Full Stack Dev.",
      duration: "2020 - 2021",
    },
    {
      company: "ICTS - LG Electronics",
      position: "Gestão de Projeto & Firmware Dev.",
      duration: "2019 - 2020",
    },
    {
      company: "Grupo ICTS - Flex",
      position: "Full Stack Dev.",
      duration: "2018 - 2019",
    },
    {
      company: "Grupo ICTS - Trópico",
      position: "Full Stack Dev.",
      duration: "2018 - 2018",
    },
    {
      company: "Grupo ICTS - NCR",
      position: "Firmware-API Dev.",
      duration: "2017 - 2018",
    },
    {
      company: "Grupo ICTS - Sicoob",
      position: "Firmware-API Dev.",
      duration: "2015 - 2017",
    },
    {
      company: "Grupo ICTS - Grupo Digicon",
      position: "Full stack Dev.",
      duration: "2014 - 2015",
    },
    {
      company: "ICTS - Banco do Brasil",
      position: "Firmware-API Dev.",
      duration: "2012 - 2014",
    },
  ],
};

//skills data
const skills = {
  title: "Minhas Habilidades",
  description:
    "Experiência em desenvolvimento de software em um conjunto robusto de tecnologias atuais que me permitem construir aplicações eficientes, responsivas e escaláveis. Meu foco é desenvolver interfaces de usuário intuitivas, sistemas back-end performáticos e soluções integradas de hardwares.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaDocker />,
      name: "docker",
    },
    {
      icon: <TbBrandCpp />,
      name: "c++",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <SiSpring />,
      name: "spring",
    },
    {
      icon: <SiStrapi />,
      name: "strapi",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      inicial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 1, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex pt-2"
    >
      <div className="container mx-auto">
        <AnimatePresence mode="wait">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px] "
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experiência</TabsTrigger>
              {/*<TabsTrigger value="education">Education</TabsTrigger>*/}
              <TabsTrigger value="publication">Publicação</TabsTrigger>
              <TabsTrigger value="skills">Habilidades</TabsTrigger>
              <TabsTrigger value="about">Sobre mim</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh] w-full pb-10">
              {/* experience */}
              <TabsContent
                value="experience"
                className="w-full"
              >
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="flex flex-col gap-[30px] text-center xl:text-left"
                >
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="w-full text-white/60 mx-auto xl:mx-0 text-justify text-[15px]">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[480px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 roundex-xl flex flex-col justify-center items-center lg:item-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="flex text-xl max-w-[260px] min-h-[60px] text-center justify-center items-center leading-tight">
                              {item.position}
                            </h3>

                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </motion.div>
              </TabsContent>

              {/* publicação */}
              <TabsContent
                value="publication"
                className="w-full"
              >
                <motion.div
                  key="publication"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                   className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-3xl font-bold text-justify">
                    Drone teleguiado para instalação de esfera de sinalização /
                    Esfera robótica
                  </h3>
                  <p className="w-full text-white/60 mx-auto xl:mx-0 text-justify tet-[15px]">
                    {`Este artigo científico aborda o desenvolvimento de um sistema inovador utilizando um drone teleguiado para a instalação de esferas de sinalização em linhas de transmissão, integrando também o uso de uma esfera robótica. O projeto destaca a aplicação de tecnologias avançadas para aumentar a eficiência e segurança desse processo.
                    Atuei como líder técnico do projeto, sendo responsável pela arquitetura do projeto, coordenação de atividades da equipe e pelo desenvolvimento de firmware dos diversos equipamentos embarcados que compõem a solução, garantindo precisão e integração entre os sistemas envolvidos.`}
                  </p>
                  <div className="flex flex-col w-full ">
                    <div className="relative border border-accent rounded-lg p-1">
                      <Image
                        src="/assets/capa-pub.png"
                        priority
                        quality={100}
                        layout="responsive" // Ocupa a largura total da div pai e ajusta o height proporcionalmente
                        width={400} // Define uma largura base
                        height={300} // Define uma altura base (proporcional, não fixa)
                        alt="Capa da Publicação"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col xl:flex-row justify-end items-center pt-6">
                      <a
                        href="/808_paper_CIGRECanada2024_v9_240715_195320.pdf" // Caminho do arquivo dentro da pasta public
                        download="/public/808_paper_CIGRECanada2024_v9_240715_195320" // Nome do arquivo ao fazer o download
                        className="w-[230px]" // Define a largura do link
                      >
                        <Button
                          variant="outline"
                          size="lg"
                          className="justify-around uppercase flex w-[230px] items-center text-accent hover:text-primary transition-all duration-700"
                        >
                          <span>Download Pub</span>
                          <FiDownload className="text-xl" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>

              {/* skills */}
              <TabsContent
                value="skills"
                className="w-full"
              >
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="w-full text-white/60 mx-auto xl:mx-0 text-justify text-[15px]">
                      {skills.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              </TabsContent>

              {/* about */}
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="w-full text-white/60 mx-auto xl:mx-0 text-justify text-[15px]">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">
                            {item.fieldName}
                          </span>
                          <span className="text-base">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Resume;
