"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MatrixEffect = () => {
  const [matrixData, setMatrixData] = useState([]);
  const [showImage, setShowImage] = useState(false);
  const [cellSize, setCellSize] = useState(null); // Inicializa com null para detectar no cliente

  useEffect(() => {
    // Ajusta o tamanho inicial com base na largura da tela
    const calculateCellSize = () => {
      const screenWidth = window.innerWidth;
      return screenWidth > 500 ? 500 : screenWidth > 400 ? 400 : screenWidth - 40;
    };

    const initialCellSize = calculateCellSize();
    setCellSize(initialCellSize);

    // Listener para redimensionar
    const handleResize = () => {
      const newCellSize = calculateCellSize();
      setCellSize(newCellSize);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup do listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rows = 15; // Mais linhas para blocos menores
  const cols = 15; // Mais colunas para blocos menores
  const columns = 30 // Número de colunas (ajustável)
  
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      // Ajuste o cellSize dinamicamente com base na largura da tela
      const newSize = screenWidth > 500 ? 500 : screenWidth > 400 ? 400 : screenWidth - 40;
      setCellSize(newSize);
    };

    handleResize(); // Chame no início
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  // Detecta largura da tela e ajusta o tamanho das células
  useEffect(() => {
    const generateMatrixData = () => {
      return Array.from({ length: columns }, () => {
        return {
          chars: Array.from({ length: rows }, () => getRandomChar()),
          delay: Math.random() * 2,
        };
      });
    };

    setMatrixData(generateMatrixData());
    const showImageTimer = setTimeout(() => setShowImage(true), 1500);
    return () => {
      clearTimeout(showImageTimer);
    };
  }, []);

  // Função para gerar caracteres aleatórios
  const getRandomChar = () => {
    const chars = "ウエオ01";
    return chars[Math.floor(Math.random() * chars.length)];
  };

  // Renderiza apenas se cellSize tiver sido definido
  if (cellSize === null) {
    return null; // Ou um spinner/placeholder para evitar renderização inconsistente
  }
  
  return (
    <div className="relative flex justify-center items-center bg-transparent overflow-hidden h-full xl:mb-8">
      {/* Camada do Efeito Matrix */}
      {showImage ? (
        <>
          <motion.div
            className="absolute inset-0 flex flex-wrap text-accent leading-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }} // Fade-out do Matrix
            transition={{ duration: 2.5, delay: 2.5 }} // Fade-out começa após 10s e dura 5s
          >
            {matrixData.map((column, columnIndex) => (
              <motion.div
                key={columnIndex}
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: Math.random() * 5 + 1.5, // Duração aleatória
                  //repeatDelay: 1, // Permite overlap nas repetições
                  ease: "linear",
                }}
                style={{
                  left: `${(columnIndex / columns) * 100}%`,
                  width: `${100 / columns}%`,
                }}
                className="absolute top-0 h-full"
              >
                {column.chars.map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="block text-accent font-mono text-lg"
                    style={{
                      opacity: Math.random(),
                      animationDelay: `${Math.random() * 6 + 1}s`,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
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
                    delay: 3.8 + Math.random() * 3.5, // Delay aleatório para cada bloco
                  }}
                  style={{
                    width: `${cellSize / cols}px`,
                    height: `${cellSize / rows}px`,
                    backgroundImage: "url('/assets/photo.png')",
                    backgroundSize: `${cols * 100}% ${rows * 100}%`,
                    backgroundPosition: `${-x * cellSize / cols}px ${-y * cellSize / rows}px`,
                  }}
                  className="mix-blend-lighten"
                />
              );
            })}
          </motion.div>
        </>
      ) : (
        <div className="w-[500px] h-[500px]"></div>
      )}
    </div>
  );
};

export default MatrixEffect;
