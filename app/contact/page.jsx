"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
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

function ContactForm() {
  const [state, handleSubmit] = useForm("xqaazwrk");

  if (state.succeeded) {
    return (
      <p className="text-center text-green-500">
        Mensagem enviada com sucesso!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
    >
      <h3 className="text-3xl text-accent">Vamos trabalhar juntos</h3>
      <p className="text-white/60">Entre em contato</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nome e Sobrenome */}
        <Input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Nome"
          required
        />
        <Input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Sobrenome"
          required
        />
      </div>

      {/* Email e Telefone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <Input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Telefone"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número
            }}
            required
          />
      </div>

      {/* select */}
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a service" />
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

      {/* Mensagem */}
      <Textarea
        id="message"
        name="message"
        placeholder="Digite sua mensagem aqui"
        className="h-[200px]"
        required
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      {/* Botão de Enviar */}
      <Button
        type="submit"
        size="md"
        className="w-[50%] min-w-[200px] max-w-[300px] text-primary border border-primary hover:text-accent hover:bg-primary hover:border-accent transition-all duration-700"
        disabled={state.submitting}
      >
        Enviar Mensagem
      </Button>
    </form>
  );
}

const Contact = () => {
  return (
    <div className="py-2">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Formulário */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <ContactForm />
          </div>
          {/* Informações */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <FaPhoneAlt className="text-[28px]" />
                </div>
                <div className="flex-1">
                  <p className="text-white/60">Telefone</p>
                  <h3 className="text-xl">(+55) 61 9 8133 5258</h3>
                </div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <FaEnvelope className="text-[28px]" />
                </div>
                <div className="flex-1">
                  <p className="text-white/60">Email</p>
                  <h3 className="text-xl">danilo.amp7@gmail.com</h3>
                </div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <FaMapMarkerAlt className="text-[28px]" />
                </div>
                <div className="flex-1">
                  <p className="text-white/60">Endereço</p>
                  <h3 className="text-xl">DF, Brasília</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
