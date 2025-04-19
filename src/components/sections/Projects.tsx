"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projectsData } from "@/lib/constants/projects";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
  Chip,
  Divider,
} from "@heroui/react";

const Projects = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.3 });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 z-[-20]" />
      
      {/* Декоративные градиентные круги */}
      <motion.div 
        className="absolute top-40 right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-700/10 blur-3xl z-[-10]" 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      <motion.div 
        className="absolute bottom-40 left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-purple-500/10 to-primary/20 blur-3xl z-[-10]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      />

      {/* Фоновый паттерн */}
      <div className="absolute inset-0 z-[-15] opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-5">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "120px" } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-primary rounded-full mx-auto"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Наши проекты
            </span>
          </h2>
          <p className="text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
            Мы гордимся каждым реализованным проектом. Вот некоторые из наших недавних работ
            по сохранению объектов культурного наследия
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ 
                y: -15, 
                transition: { duration: 0.3 } 
              }}
            >
              <Card 
                isHoverable 
                isPressable
                className="h-full overflow-hidden border-none shadow-xl"
                style={{ borderRadius: "16px" }}
              >
                <CardHeader className="p-0 overflow-hidden h-64 relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-white">
                    <span className="text-white/70 text-lg">Изображение проекта</span>
                  </div>
                  <div className="absolute top-3 left-3 z-10">
                    <Chip
                      color="primary"
                      variant="shadow"
                      radius="sm"
                      size="sm"
                      className="p-2 rounded-full"
                    >
                      {project.category}
                    </Chip>
                  </div>
                </CardHeader>
                <CardBody className="p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </CardBody>
                <CardFooter className="justify-between bg-white">
                  <Link
                    href={project.href}
                    color="primary"
                    showAnchorIcon
                    className="font-medium text-base"
                  >
                    Подробнее
                  </Link>
                  <span className="text-sm text-gray-500">{project.year || ""}</span>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            as={Link}
            href="/projects"
            color="primary"
            size="lg"
            className="font-medium px-8 py-6 rounded-xl shadow-lg shadow-primary/25 bg-gradient-to-r from-primary to-primary-dark hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Все проекты
          </Button>
        </motion.div>
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

export default Projects; 