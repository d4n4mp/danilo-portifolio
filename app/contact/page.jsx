"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContainer,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+55) 61 9 8133 5258",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "danilo.amp7@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "DF, Brasília",
  },
];

const Contact = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
    }}
    className="py-2"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl text-accent">Vamos trabalhar juntos</h3>
              <p className="text-white/60">Entre em contato</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="FirstName"/>
                <Input type="lastname" placeholder="LastName"/>
                <Input type="email" placeholder="Email address"/>
                <Input type="phone" placeholder="Phone number"/>
              </div>

              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Front/Back Dev</SelectItem>
                    <SelectItem value="cst">Firmware Dev.</SelectItem>
                    <SelectItem value="mst">Pesquisa & Desenvolvomento</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea className="h-[200px]" placeholder="Type your message here" />

              <Button size="md" className="max-w-40 text-primary border border-primary hover:text-accent hover:bg-primary hover:border-accent transition-all duration-700">Send message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Contact;
