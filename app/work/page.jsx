"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Automação",
    title: "Drone Teleguiado para instalação de esferas de sinalização",
    description:
      "Automatizei o processo de instalação de esferas, garantindo estabilidade durante o voo, com a implementação de um protocolo multi-dispositivos para controle remoto operacional do UAV. Coordenei o desenvolvimento do simulador de voo integrado com todas as tecnologias do drone real, incluindo Redes Neurais Multimodais para identificação de torres e esferas de sinalização.",
    stack: [
      { name: "C/C++" },
      { name: "Qt" },
      { name: "Gazebo" },
      { name: "ROS" },
    ],
    image: "/assets/work/thumb1.png",
    video: "/assets/work/DroneClipchamp.mp4",
    extra: [
      {
        link: "https://drive.google.com/file/d/1KWT53NEz428c6cVesMCga-S8JzmBf-ce/preview",
      },
      {
        link: "https://drive.google.com/file/d/1BpZhDrmWJkdHFkYCwKerwFKWl3Bi_2OH/preview",
      },
    ],
    live: "https://drive.google.com/file/d/1L05NQ952Cq06TEuDZHmfO1M329Jlpvyn/view?usp=drive_link",
    github: "",
  },
  {
    num: "02",
    category: "Automação",
    title: "Esféra robótica de sinalização",
    description:
      "Pesquisa e desenvolvimento para solução de esfera de sinalização automatizada para redes de alta tensão; Desenvolvimento de firmware de automação e controle para movimento automatizado com multi-sensoriamento para identificação de todos os estágios de operação até a fixação da esfera;",
    stack: [{ name: "C/C++" }],
    image: "/assets/work/thumb4.gif",
    extra: [
      {
        link: "https://drive.google.com/file/d/1ah8mjXfjzuXKOYp0I7mv6TOA8-x1xYgu/preview",
      },
    ],
    live: "https://drive.google.com/file/d/1L05NQ952Cq06TEuDZHmfO1M329Jlpvyn/view?usp=drive_link",
    github: "",
  },
  {
    num: "03",
    category: "Full stack - Automação",
    title: "Projeto de Eficiência Energética - LG",
    description:
      "Desenvolvi o firmware para um dispositivo medidor de grandezas elétricas integrado ao sistema de controle, implementando protocolo de comunicação LoRa. Estruturei um serviço de mensageria para gerenciar eventos de 400 dispositivos em tempo real e projetei uma arquitetura multisserviço para garantir escalabilidade e eficiência operacional. Coordenando o desenvolvimento front e back end da solução.",
    stack: [
      { name: "Javascript" },
      { name: "Node.js" },
      { name: "React.js" },
      { name: "Css" },
      { name: "C/C++" },
      { name: "Express.js" },
      { name: "Socket.io" },
      { name: "Redis" },
      { name: "MySQL" },
      { name: "NGINX" },
      { name: "Docker" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://docs.google.com/document/d/1BRfMVq0zpBsHX15wkh_Ic6RvIyKJq6NM/edit?usp=sharing&ouid=104540612671802151961&rtpof=true&sd=true",
    github: "",
  },
  {
    num: "04",
    category: "Full stack - Automação",
    title: "Projeto de Eficiência Energética - Flex",
    description:
      "Desenvolvi o firmware para um dispositivo medidor de grandezas elétricas integrado ao sistema de controle, implementando um protocolo de comunicação MQTT. Também criei uma interface gráfica utilizando React e integrei os serviços de backend com Node.js e RestAPI.",
    stack: [
      { name: "Javascript" },
      { name: "Node.js" },
      { name: "React.js" },
      { name: "Css" },
      { name: "C/C++" },
      { name: "Express.js" },
      { name: "Socket.io" },
      { name: "Redis" },
      { name: "MySQL" },
      { name: "NGINX" },
      { name: "Docker" },
    ],
    image: "/assets/work/thumb-flex.png",
    live: "https://docs.google.com/document/d/1TCrwpGDrHDT6GEooKhzazWWv9FKFqr-Q/edit?usp=sharing&ouid=104540612671802151961&rtpof=true&sd=true",
    github: "",
  },
  {
    num: "05",
    category: "Full stack",
    title: "Centro de Controle de Processos CCPIA",
    description:
      "Desenvolvi uma aplicação Full Stack para controle de processos, integrando diversos servidores e sistemas internos da Jabil. Implementei soluções para o tratamento de dados de produção, gerando gráficos e informações essenciais em tempo real para otimizar a eficiência da linha de produção.",
    stack: [
      { name: "Javascript" },
      { name: "Node.js" },
      { name: "React.js" },
      { name: "Css" },
      { name: "Express.js" },
      { name: "SQL" },
      { name: "Docker" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://docs.google.com/document/d/1QcPkQWZKM7SUHjE8PuAaZVKE8-W3y10v/edit?usp=sharing&ouid=104540612671802151961&rtpof=true&sd=true",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-full flex flex-col justify-center py-2 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:gap-[30px] ">
          <div className="w-full flex justify-center">
            <div className="w-full xl:w-[100%]">
              <div className="flex flex-row items-end pb-6">
                <div className="text-[22px] md:text-4xl lg:text-6xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                {/* project category */}
                <h2 className="text-[18px] md:text-3xl lg:text-5xl font-bold leading-none text-white group:hover:text-accent transition-all duration-500 capitalize whitespace-pre">
                  {` - ${project.category}`}
                </h2>
              </div>
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[460px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      className="w-full"
                    >
                      <div className="h-[300px] md:h-[460px] relative group flex justify-center items-center bg-primary">
                        {/* overlay */}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-transparent z-10"></div>
                        {/* image */}
                        <div className="relative w-full h-full max-w-[740px]">
                          {project.video ? (
                            <video
                              className="w-full h-full object-cover"
                              autoPlay
                              loop
                              muted
                              playsInline
                            >
                              <source
                                src={project.video}
                                type="video/mp4"
                              />
                              Seu navegador não suporta vídeos.
                            </video>
                          ) : (
                            <Image
                              src={project.image}
                              fill
                              className="object-center"
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* slider buttons */}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 w-full justify-between"
                  btnStyles="bg-primary border border-rounded border-accent hover:bg-accent-hover hover:text-primary text-accent text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500"
                />
              </Swiper>
            </div>
          </div>
          <div className="w-full flex flex-col xl:justify-between order-2 xl:order-none pb-6">
            <div className="flex flex-col xl:flex-row gap-[30px]">
              {/* project description */}
              <p className="text-white/60 text-justify text-[14px] w-full xl:w-[60%]">
                {project.description}
              </p>
              <div className="flex flex-col xl:flex-row w-full xl:w-[40%]">
                {/* border */}
                <div className="border border-white/20 mr-4"></div>
                <div className="flex flex-row w-full justify-between items-start">
                  <ul className="flex flex-wrap gap-4 pt-4 xl:pt-0 pr-2">
                    {project.stack.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="text-sm md:text-base text-accent text-justify"
                        >
                          {item.name}
                          {index !== project.stack.length - 1 && ","}
                        </li>
                      );
                    })}
                  </ul>

                  {/* buttons */}
                  <div className="flex justify-end items-center gap-4 pt-4 xl:pt-0 w-[70px]">
                    {/* live project button */}
                    <Link
                      target="_blank"
                      href={project.live}
                      rel="noopener noreferrer"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsArrowUpRight />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Documentação</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                    {/* github project button 
                    <Link href={project.github}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github repositoryt</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Material extra */}
        <div>
          {project.extra && project.extra.length > 0 && (
            <div className="pt-16">
              <p className="pb-4">Videos</p>
              <div className="relative w-[full] h-[300px] md:h-[460px] bg-black">
                {project.extra.map((item, index) => (
                  <iframe
                    key={index}
                    src={item.link}
                    width="100%"
                    height="100%"
                    allow="autoplay"
                    className="object-cover mb-4" // Adiciona espaço entre os iframes
                  ></iframe>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
