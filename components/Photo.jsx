"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const MatrixEffect = () => {
  const [matrixData, setMatrixData] = useState([]);
  const [showImage, setShowImage] = useState(false);
  const [cellSize, setCellSize] = useState(500); // Estado para controlar cellWidth e cellHeight

  const rows = 15; // Mais linhas para blocos menores
  const cols = 15; // Mais colunas para blocos menores

  // Detecta largura da tela e ajusta o tamanho das células
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setCellSize(350); // Menor que sm
      } else {
        setCellSize(500); // Maior que sm
      }
    };

    handleResize(); // Chama a função ao carregar
    window.addEventListener("resize", handleResize); // Listener no resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Gera os valores apenas no cliente após montagem
  useEffect(() => {
    const data = Array.from({ length: 120 }, () => ({
      char: Math.random() > 0.5 ? "0" : "1",
      delay: Math.random() * 2, // Delays aleatórios
    }));
    setMatrixData(data);

    const showImageTimer = setTimeout(() => setShowImage(true), 1500);
    return () => {
      clearTimeout(showImageTimer);
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center bg-transparent overflow-hidden">
      {/* Camada do Efeito Matrix */}
      {showImage ? 
      <>
        <motion.div
          className="absolute inset-0 flex flex-wrap text-accent text-xs md:text-sm lg:text-base leading-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }} // Fade-out do Matrix
          transition={{ duration: 3, delay: 3 }} // Fade-out começa após 10s e dura 5s
        >
          {matrixData.map((item, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -50 }} // Começa invisível e deslocado para cima
              animate={{ opacity: 1, y: 0 }} // Fica visível e volta para a posição normal
              transition={{
                duration: 1.5, // Duração do efeito de "queda"
                delay: item.delay, // Delay aleatório individual
                ease: "easeOut",
              }}
              style={{
                animationDelay: `${item.delay}s`,
              }}
              className="animate-matrix"
            >
              {item.char}
            </motion.span>
          ))}
        </motion.div>

        {/* Camada da Imagem com Fade-In */}
        <motion.div
            className="relative grid"
            style={{
              gridTemplateRows: `repeat(${rows}, 1fr)`,
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
            }}
          >
            {Array.from({ length: rows * cols }).map((_, index) => {
              const x = index % cols;
              const y = Math.floor(index / cols);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, filter: "blur(30px)" }} // Estado inicial com blur
                  animate={{ opacity: 1, filter: "blur(0px)" }} // Remove o blur durante a animação
                  transition={{
                    duration: 2,
                    delay: 4.8 + Math.random() * 4, // Delay aleatório para cada bloco
                  }}
                  style={{
                    width: `${cellSize  / cols}px`,
                    height: `${cellSize  / rows}px`,
                    backgroundImage: "url('/assets/photo.png')",
                    backgroundSize: `${cols * 100}% ${rows * 100}%`,
                    backgroundPosition: `${-x * cellSize  / cols}px ${-y * cellSize  / rows}px`,
                  }}
                  className="mix-blend-lighten"
                />
              );
            })}
          </motion.div>
      </> :
      <div className="w-[500px] h-[500px]">
      </div>
      }
    </div>
  );
};

export default MatrixEffect;
