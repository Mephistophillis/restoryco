"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@heroui/react";
import { FiArrowRight, FiCheckCircle, FiAward, FiBook, FiCamera, FiFileText, FiTarget } from "react-icons/fi";
import Image from "next/image";

const Hero = () => {
  // Улучшенный параллакс эффект при скролле
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Обработчик движения мыши для 3D эффекта
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };

    const handleMouseLeave = () => {
      // Reset position when mouse leaves the container
      setMousePosition({ x: 0, y: 0 });
    };

    const ref = heroRef.current;
    if (ref) {
      ref.addEventListener("mousemove", handleMouseMove);
      ref.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (ref) {
        ref.removeEventListener("mousemove", handleMouseMove);
        ref.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Трансформации для элементов, зависящих от скролла
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const backgroundOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const titleY = useTransform(scrollY, [0, 300], [0, -50]);
  const circleScale = useTransform(scrollY, [0, 300], [1, 1.2]);

  // Анимация для текста заголовка
  const titleWords = "Сохраняем историческое наследие для будущих поколений".split(" ");
  
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-36 pb-20 md:pt-40 md:pb-24">
      {/* Улучшенный фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 z-[-20]" />
      
      {/* Фоновые интерактивные элементы */}
      <motion.div
        className="absolute inset-0 z-[-15]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          y: backgroundY,
          opacity: backgroundOpacity
        }}
      />
      
      {/* Фоновые градиентные круги с параллакс-эффектом */}
      <motion.div 
        className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-700/10 blur-3xl z-[-10]" 
        style={{ 
          scale: circleScale,
          x: useTransform(scrollY, [0, 300], [0, 50]),
          y: useTransform(scrollY, [0, 300], [0, -30])
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-500/10 to-primary/20 blur-3xl z-[-10]"
        style={{ 
          scale: circleScale,
          x: useTransform(scrollY, [0, 300], [0, -50]),
          y: useTransform(scrollY, [0, 300], [0, 30])
        }}
      />

      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
            style={{ y: titleY }}
          >
            <div className="mb-6 overflow-hidden">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                {titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.1 + i * 0.1,
                      ease: [0.33, 1, 0.68, 1]
                    }}
                    className="inline-block mr-2 mb-2"
                  >
                    {word === "историческое" ? (
                      <span className="text-primary">{word}</span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Профессиональная разработка проектной документации для сохранения объектов культурного наследия 
              и объектов, находящихся в зонах охраны ОКН.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <Button 
                  color="primary" 
                  size="lg" 
                  className="px-8 py-7 font-medium rounded-xl shadow-lg shadow-primary/25 text-base"
                >
                  Наши услуги
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <Button 
                  variant="bordered" 
                  color="default" 
                  size="lg" 
                  className="px-8 py-7 font-medium border-white text-white rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all text-base"
                >
                  Связаться с нами
                  <FiArrowRight className="ml-2" />
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex flex-col md:flex-row gap-6 items-center justify-center lg:justify-start mt-8 text-base"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full"
              >
                <FiCheckCircle className="text-primary text-lg" />
                <span>Лицензия Министерства культуры РФ</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full"
              >
                <FiAward className="text-primary text-lg" />
                <span>Более 100 успешных проектов</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block perspective"
            style={{ 
              y: useTransform(scrollY, [0, 300], [0, 30]),
              perspectiveOrigin: `${50 + mousePosition.x * 50}% ${50 + mousePosition.y * 50}%`
            }}
          >
            <div className="relative h-[600px] w-full">
              {/* Основное изображение исторического здания */}
              <motion.div 
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transform-gpu preserve-3d cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                style={{ 
                  y: useTransform(scrollY, [0, 300], [0, -20]),
                  rotateY: 0,
                  rotateX: 0,
                  z: 0
                }}
                whileHover={{
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" style={{ opacity: 0.7 }} />
                <motion.div 
                  className="w-full h-full bg-gray-700 transition-all duration-500"
                >
                  <Image src="/images/hero/hero.png" alt="История" fill className="object-cover" />
                </motion.div>
                
                {/* Эффект при наведении */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-primary/40 to-blue-900/40 z-20 opacity-0 hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>
              
              {/* Первый информационный блок - верхний левый */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                style={{ 
                  y: useTransform(scrollY, [0, 300], [0, -40]),
                  x: useTransform(scrollY, [0, 300], [0, 100]),
                  rotateY: 0,
                  rotateX: 0
                }}
                whileHover={{ 
                  rotateX: 15,
                  scale: 1.05,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="absolute top-0 -left-16 p-6 bg-white text-gray-900 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-20 max-w-[270px] backdrop-blur-sm transform-gpu preserve-3d"
              >
                <div className="text-xl font-bold mb-2 flex items-center">
                  <div className="p-2 inline-block bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <FiCamera className="text-lg text-primary" />
                  </div>
                  <span>Трехмерное сканирование</span>
                </div>
                <p className="text-sm text-gray-600">
                  Высокоточное лазерное сканирование исторических объектов для создания детальных 3D-моделей
                </p>
              </motion.div>
              
              {/* Второй информационный блок - нижний правый */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                style={{ 
                  y: useTransform(scrollY, [0, 300], [100, -30]),
                  x: useTransform(scrollY, [0, 300], [-120, -200]),
                  rotateY: 0,
                  rotateX: 0
                }}
                whileHover={{ 
                  rotateX: -15,
                  scale: 1.05,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="absolute bottom-0 -right-16 p-6 bg-white text-gray-900 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-20 max-w-[270px] backdrop-blur-sm transform-gpu preserve-3d"
              >
                <div className="text-xl font-bold mb-2 flex items-center">
                  <div className="p-2 inline-block bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <FiFileText className="text-lg text-primary" />
                  </div>
                  <span>Проектная документация</span>
                </div>
                <p className="text-sm text-gray-600">
                  Полный комплекс услуг по разработке проектной документации для реставрации и сохранения ОКН
                </p>
              </motion.div>
              
              {/* Третий информационный блок - верхний правый */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                style={{ 
                  y: useTransform(scrollY, [0, 300], [0, -20]),
                  x: useTransform(scrollY, [0, 300], [0, -90]),
                  rotateY: 0,
                  rotateX: 0
                }}
                whileHover={{ 
                  rotateX: 15, 
                  scale: 1.05,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="absolute top-[20%] -right-16 p-6 bg-white text-gray-900 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-20 max-w-[270px] backdrop-blur-sm transform-gpu preserve-3d"
              >
                <div className="text-xl font-bold mb-2 flex items-center">
                  <div className="p-2 inline-block bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <FiBook className="text-lg text-primary" />
                  </div>
                  <span>Исторические исследования</span>
                </div>
                <p className="text-sm text-gray-600">
                  Комплексные научные и исторические исследования объектов с подготовкой подробной документации
                </p>
              </motion.div>
              
              {/* Четвертый информационный блок - нижний левый */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                style={{ 
                  y: useTransform(scrollY, [0, 300], [0, -35]),
                  x: useTransform(scrollY, [0, 300], [0, -10]),
                  rotateY: 0,
                  rotateX: 0
                }}
                whileHover={{ 
                  rotateX: -15,
                  scale: 1.05,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="absolute bottom-[30%] -left-16 p-6 bg-white text-gray-900 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-20 max-w-[270px] backdrop-blur-sm transform-gpu preserve-3d"
              >
                <div className="text-xl font-bold mb-2 flex items-center">
                  <div className="p-2 inline-block bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <FiTarget className="text-lg text-primary" />
                  </div>
                  <span>Авторский надзор</span>
                </div>
                <p className="text-sm text-gray-600">
                  Профессиональный контроль за реализацией проектных решений на всех этапах сохранения ОКН
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Декоративная волна внизу секции */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10 h-16">
        <svg className="absolute bottom-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 