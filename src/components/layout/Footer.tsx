"use client";

import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaVk, FaTelegram } from "react-icons/fa";
import { navLinks } from "@/lib/constants/navigation";
import {
  Link,
  Button,
  Card,
  CardBody,
  Divider,
  Image as HeroImage,
  Spacer,
} from "@heroui/react";
import Image from "next/image";

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeIn}
            className="space-y-4"
          >
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Ресторико"
                width={150}
                height={38}
                className="h-auto"
              />
            </div>
            <p className="text-gray-400 max-w-md">
              Разработка проектной документации по сохранению объектов культурного наследия.
              Выполнение проектной документации для объектов, находящихся в зонах охраны объектов культурного наследия.
            </p>
            <div className="flex space-x-4 pt-2">
              <Button
                isIconOnly
                as="a"
                href="https://vk.com/"
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                size="sm"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                radius="full"
              >
                <FaVk size={20} />
              </Button>
              <Button
                isIconOnly
                as="a"
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                size="sm"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                radius="full"
              >
                <FaTelegram size={20} />
              </Button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Навигация</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    color="foreground"
                    underline="hover"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeIn}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Контакты</h3>
            <Card
              className="bg-gray-800 border-none rounded-xl"
              shadow="none"
              radius="sm"
            >
              <CardBody className="gap-4">
                <div className="flex items-start space-x-3">
                  <FiMapPin className="text-gray-400 mt-1" />
                  <span className="text-gray-400">Москва, Россия</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiPhone className="text-gray-400" />
                  <Link
                    href="tel:+7123456789"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    +7 (123) 456-78-90
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMail className="text-gray-400" />
                  <Link
                    href="mailto:info@restorico.ru"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    info@restorico.ru
                  </Link>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>

        <Divider className="my-10 bg-gray-800" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="text-center text-gray-500"
        >
          <p>© {currentYear} ООО «Ресторико». Все права защищены.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 