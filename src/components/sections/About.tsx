"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Button,
  Card,
  CardBody,
  Link,
  Chip,
} from "@heroui/react";

const advantages = [
  {
    id: 1,
    title: "Лицензированные специалисты",
    description: "Наша команда состоит из экспертов с лицензиями Министерства культуры РФ на работу с ОКН",
  },
  {
    id: 2,
    title: "Современные технологии",
    description: "Применение передовых методик 3D-сканирования и моделирования для точного воссоздания исторических объектов",
  },
  {
    id: 3,
    title: "Богатый опыт",
    description: "Более 100 успешно реализованных проектов по сохранению объектов культурного наследия разных категорий",
  },
  {
    id: 4,
    title: "Полный комплекс услуг",
    description: "От сбора исходно-разрешительной документации до авторского надзора за проведением работ",
  },
];

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });

  // Для эффекта параллакса при скролле
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Стильный градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10"/>
      
      {/* Декоративные элементы с параллакс-эффектом */}
      <motion.div 
        className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-primary/[0.03] -z-5" 
        style={{ translateY: scrollY * 0.03 }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full bg-primary/[0.03] -z-5"
        style={{ translateY: scrollY * -0.02 }}
      />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Левая колонка с текстом */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              ref={titleRef}
              initial={{ opacity: 0, y: -20 }}
              animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Chip color="primary" className="mb-4 px-4 py-2 text-sm font-medium">О нас</Chip>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary/90">
                Эксперты в сохранении культурного наследия
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mt-6">
                ООО «Ресторико» специализируется на разработке проектной документации по
                сохранению объектов культурного наследия и выполнении проектной документации
                для объектов, находящихся в зонах охраны объектов культурного наследия.
              </p>
              <motion.div
                initial={{ width: 0 }}
                animate={isTitleInView ? { width: "80px" } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-primary rounded-full mt-8 mb-8"
              />
              <p className="text-lg text-gray-700 mb-8">
                Наша команда состоит из высококвалифицированных специалистов: архитекторов, 
                реставраторов, инженеров, историков и искусствоведов. Мы применяем
                индивидуальный подход к каждому объекту, учитывая его историческую и 
                культурную ценность.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {advantages.map((advantage, index) => (
                <motion.div 
                  key={advantage.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="shadow-md border-none rounded-xl h-full">
                    <CardBody className="gap-3 p-6">
                      <div className="flex items-start">
                        <div className="px-2 mr-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">✓</div>
                        <div>
                          <h3 className="font-bold text-lg mb-2 text-primary">{advantage.title}</h3>
                          <p className="text-gray-600">{advantage.description}</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button
                as={Link}
                href="/about"
                color="primary"
                size="lg"
                className="font-medium px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Подробнее о компании
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Правая колонка с изображением */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isImageInView ? { opacity: 1, x: 0 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              initial={{ rotateY: -5 }}
              animate={{ rotateY: isImageInView ? 0 : -5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card 
                className="shadow-xl rounded-2xl overflow-hidden h-[550px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <CardBody className="p-0">
                  {/* Placeholder для изображения исторического здания */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <span className="text-white text-lg">Фотография реставрации исторического здания</span>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
            
            {/* Информационные блоки */}
            <motion.div
              className="absolute -bottom-8 -left-8 bg-white p-5 rounded-xl shadow-lg z-10 max-w-[200px]"
              initial={{ opacity: 0, y: 20, rotateZ: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", 
                transition: { duration: 0.2 } 
              }}
            >
              <div className="text-primary font-bold text-lg mb-1">10+ лет</div>
              <div className="text-gray-700 text-sm">опыта работы с объектами культурного наследия</div>
            </motion.div>
            
            <motion.div
              className="absolute -top-8 -right-8 bg-white p-5 rounded-xl shadow-lg z-10 max-w-[200px]"
              initial={{ opacity: 0, y: -20, rotateZ: 5 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", 
                transition: { duration: 0.2 } 
              }}
            >
              <div className="text-primary font-bold text-lg mb-1">100+</div>
              <div className="text-gray-700 text-sm">успешно реализованных проектов</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 