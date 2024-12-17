"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const MatrixEffect = () => {
  const [matrixData, setMatrixData] = useState([]);
  const [showImage, setShowImage] = useState(false);

  // Gera os valores apenas no cliente após montagem
  useEffect(() => {
    const data = Array.from({ length: 100 }, () => ({
      char: Math.random() > 0.5 ? "0" : "1",
      delay: Math.random() * 2, // Delays aleatórios
    }));
    setMatrixData(data);

    // Timer para mostrar a imagem após 3 segundos
    const timer = setTimeout(() => setShowImage(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex justify-center items-center h-screen bg-black overflow-hidden">
      {/* Camada do Efeito Matrix */}
      <motion.div
        className="absolute inset-0 flex flex-wrap text-green-500 text-xs md:text-sm lg:text-base leading-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 8 }} // Fade-out após 2 segundos
      >
        {matrixData.map((item, index) => (
          <span
            key={index}
            className="animate-matrix"
            style={{
              animationDelay: `${item.delay}s`,
            }}
          >
            {item.char}
          </span>
        ))}
      </motion.div>

      {/* Camada da Imagem com Fade-In */}
      {showImage && (
        <motion.div
          className="relative w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <Image
            src="/assets/photo.png"
            alt="Minha Foto"
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
        </motion.div>
      )}
    </div>
  );
};

export default MatrixEffect;
