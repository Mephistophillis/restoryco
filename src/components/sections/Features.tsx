"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardBody, Badge } from "@heroui/react";
import { 
  FiFileText, 
  FiSearch, 
  FiGrid, 
  FiLayers, 
  FiClipboard, 
  FiShield 
} from "react-icons/fi";

const features = [
  {
    icon: <FiFileText className="w-6 h-6" />,
    title: "Разработка проектной документации",
    description: "Полный комплекс услуг по разработке проектной документации для сохранения объектов культурного наследия.",
    color: "blue"
  },
  {
    icon: <FiSearch className="w-6 h-6" />,
    title: "Инженерные обследования",
    description: "Проведение инженерно-технического обследования конструкций объекта и лабораторных исследований.",
    color: "purple"
  },
  {
    icon: <FiGrid className="w-6 h-6" />,
    title: "3D сканирование и моделирование",
    description: "Трехмерное лазерное сканирование объектов и создание детальных 3D-моделей исторических зданий.",
    color: "green"
  },
  {
    icon: <FiLayers className="w-6 h-6" />,
    title: "Историко-культурные исследования",
    description: "Сбор и анализ архивных данных, выполнение исторических справок, определение предмета охраны ОКН.",
    color: "orange"
  },
  {
    icon: <FiClipboard className="w-6 h-6" />,
    title: "Сопровождение согласований",
    description: "Помощь в получении разрешений, согласование документации в органах охраны культурного наследия.",
    color: "red"
  },
  {
    icon: <FiShield className="w-6 h-6" />,
    title: "Авторский надзор",
    description: "Контроль за соблюдением проектных решений на всех этапах выполнения работ по сохранению ОКН.",
    color: "teal"
  }
];

const Features = () => {
  // Референсы для анимации при скролле
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });
  
  // Стили для градиентного фона
  const gradientBg = {
    background: "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(249,250,251,1) 100%)"
  };
  
  return (
    <section id="features" className="py-20 relative overflow-hidden" style={gradientBg}>
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.03] -z-10 
        transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] -z-10
        transform -translate-x-1/4 translate-y-1/4"></div>
        
      <div className="container mx-auto px-4">
        <motion.div
          ref={headingRef}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Badge color="primary" className="mb-4">Направления деятельности</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary/90">
              Сохранение объектов культурного наследия
            </h2>
            <p className="text-lg text-gray-700">
              Компания «Ресторико» предоставляет полный комплекс услуг для разработки проектной документации 
              по сохранению объектов культурного наследия и объектов, находящихся в зонах охраны
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card 
                className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                style={{ borderRadius: "16px" }}
              >
                <div className={`absolute w-32 h-32 rounded-full bg-${feature.color}-100/40 -top-10 -right-10 -z-0`}></div>
                <CardBody className="p-6 md:p-8 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.1 + index * 0.05 
                    }}
                    className={`w-14 h-14 rounded-xl bg-${feature.color}-100 flex items-center justify-center mb-5`}
                  >
                    <span className={`text-${feature.color}-600 text-xl`}>{feature.icon}</span>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  
                  <motion.div 
                    className="mt-5"
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "30%" }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.3 + index * 0.1 
                    }}
                  >
                    <div className={`h-0.5 bg-${feature.color}-400 rounded-full`}></div>
                  </motion.div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Card 
            className="bg-gradient-to-r from-primary/5 to-primary/10 mx-auto max-w-4xl border-none shadow-lg relative overflow-hidden"
            style={{ borderRadius: "16px" }}
          >
            <div className="absolute w-32 h-32 rounded-full bg-white/30 top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2"></div>
            <div className="absolute w-24 h-24 rounded-full bg-white/20 bottom-0 left-10 transform translate-y-1/2"></div>
            
            <CardBody className="p-8 md:p-10 relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left mb-6 md:mb-0">
                  <motion.h3 
                    className="text-2xl font-bold mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    Нужна консультация?
                  </motion.h3>
                  <motion.p 
                    className="text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Свяжитесь с нами для получения профессиональной консультации по вопросам сохранения объектов культурного наследия
                  </motion.p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Связаться с нами
                  </a>
                </motion.div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 