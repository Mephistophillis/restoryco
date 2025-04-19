"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Card, 
  CardBody, 
  CardFooter, 
  CardHeader, 
  Button, 
  Badge,
  Divider,
  Switch 
} from "@heroui/react";
import { FiCheck } from "react-icons/fi";

const servicesCategories = [
  {
    name: "Проектная документация",
    description: "Разработка полного комплекта проектной документации для сохранения ОКН",
    features: [
      "Архитектурные решения",
      "Конструктивные решения",
      "Инженерные сети",
      "План организации земельного участка",
      "Технологические решения",
      "Мероприятия по обеспечению пожарной безопасности"
    ],
    badge: "Популярное",
    buttonVariant: "solid",
  },
  {
    name: "Исследовательские работы",
    description: "Комплексные научные исследования объектов культурного наследия",
    features: [
      "Историко-архивные исследования",
      "Инженерно-техническое обследование",
      "Химико-технологические исследования",
      "Трехмерное лазерное сканирование",
      "Фотофиксация и обмерные чертежи"
    ],
    badge: "",
    buttonVariant: "bordered",
  },
  {
    name: "Сопровождение проектов",
    description: "Полное сопровождение проектов от начала до завершения",
    features: [
      "Сбор исходно-разрешительной документации",
      "Согласование в органах охраны",
      "Организация экспертизы документации",
      "Авторский надзор",
      "Взаимодействие с подрядчиками"
    ],
    badge: "",
    buttonVariant: "bordered",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Pricing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge color="primary" className="mb-4">Услуги</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Наши ключевые направления</h2>
          <p className="text-lg text-gray-700 mb-6">
            Компания «Ресторико» предлагает широкий спектр услуг в области сохранения объектов культурного наследия.
            Мы имеем все необходимые лицензии и разрешения для выполнения полного комплекса работ.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesCategories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="flex"
            >
              <Card className={`shadow-lg w-full relative ${category.badge ? 'border-primary' : 'border-gray-200'}`}>
                {category.badge && (
                  <Badge 
                    color="primary" 
                    className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 z-10"
                  >
                    {category.badge}
                  </Badge>
                )}
                
                <CardHeader className="pb-0">
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                  <p className="text-gray-600 mt-3">{category.description}</p>
                </CardHeader>
                
                <Divider className="my-4" />
                
                <CardBody className="text-left">
                  <ul className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx, duration: 0.3 }}
                      >
                        <span className="flex-shrink-0 bg-primary/10 rounded-full p-1 mr-3">
                          <FiCheck className="text-primary" />
                        </span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardBody>
                
                <CardFooter>
                  <Button
                    color="primary"
                    variant={category.buttonVariant === "solid" ? "solid" : "bordered"}
                    size="lg"
                    fullWidth
                    className={category.buttonVariant === "solid" ? "shadow-lg" : ""}
                  >
                    Подробнее
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Card className="bg-primary/5 mx-auto max-w-4xl border-none p-6">
            <CardBody>
              <p className="text-xl font-medium mb-4">Нужна индивидуальная консультация?</p>
              <p className="text-gray-700 mb-6">
                Каждый объект культурного наследия уникален и требует особого подхода. 
                Наши специалисты готовы предложить оптимальное решение для вашего проекта.
              </p>
              <Button 
                color="primary" 
                size="lg" 
                className="px-8 font-medium"
              >
                Связаться с нами
              </Button>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 