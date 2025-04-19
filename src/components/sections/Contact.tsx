"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Button,
  Input,
  Textarea,
  Card,
  CardBody,
  Divider,
  Link,
  Chip,
} from "@heroui/react";
import { FiMap, FiPhone, FiMail, FiClock } from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiMap className="text-xl" />,
    title: "Адрес",
    content: "197348, г. Санкт-Петербург, ул. Аэродромная, д. 8, оф. 408",
    link: "https://maps.google.com",
    linkText: "Посмотреть на карте",
  },
  {
    icon: <FiPhone className="text-xl" />,
    title: "Телефон",
    content: "+7 (812) 123-45-67",
    link: "tel:+78121234567",
    linkText: "Позвонить нам",
  },
  {
    icon: <FiMail className="text-xl" />,
    title: "Email",
    content: "info@restorico.ru",
    link: "mailto:info@restorico.ru",
    linkText: "Написать нам",
  },
  {
    icon: <FiClock className="text-xl" />,
    title: "Время работы",
    content: "Пн-Пт: 9:00 - 18:00",
    link: "",
    linkText: "",
  },
];

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formState);
    // Сброс формы после отправки
    setFormState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Chip color="primary" className="mb-4">Свяжитесь с нами</Chip>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы обсудить ваш проект?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку или свяжитесь с нами удобным для вас способом. Наши специалисты
            проконсультируют вас по всем вопросам сохранения объектов культурного наследия.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Контактные данные */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="border-none shadow-sm">
                    <CardBody>
                      <div className="flex items-start">
                        <div className="p-3 rounded-md bg-primary/10 text-primary mr-4">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <p className="text-gray-600 mb-1">{item.content}</p>
                          {item.link && (
                            <Link
                              href={item.link}
                              className="text-primary text-sm font-medium"
                            >
                              {item.linkText}
                            </Link>
                          )}
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
              transition={{ duration: 0.3, delay: 0.5 }}
              className="mt-6"
            >
              <Card className="border-none shadow-sm bg-gradient-to-br from-primary/20 to-primary/5">
                <CardBody>
                  <h3 className="font-semibold mb-2">Лицензии и сертификаты</h3>
                  <p className="text-gray-600 mb-3">
                    ООО «Ресторико» имеет все необходимые лицензии Министерства культуры РФ
                    для работы с объектами культурного наследия различных категорий.
                  </p>
                  <Link
                    href="/licenses"
                    className="text-primary text-sm font-medium"
                  >
                    Ознакомиться с лицензиями
                  </Link>
                </CardBody>
              </Card>
            </motion.div>
          </div>

          {/* Форма обратной связи */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none shadow-md">
              <CardBody className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6">Оставить заявку</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <Input
                      type="text"
                      label="Ваше имя"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Иван Иванов"
                      size="lg"
                    />
                    <Input
                      type="email"
                      label="Email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="email@example.com"
                      size="lg"
                    />
                    <Input
                      type="tel"
                      label="Телефон"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      placeholder="+7 (___) ___-__-__"
                      size="lg"
                    />
                    <Input
                      type="text"
                      label="Тип объекта"
                      placeholder="Памятник архитектуры, жилой дом и т.д."
                      size="lg"
                    />
                  </div>
                  <Textarea
                    label="Ваше сообщение"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Опишите ваш проект или задайте вопрос..."
                    rows={4}
                    className="mb-6"
                    required
                    size="lg"
                  />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <p className="text-sm text-gray-500">
                      Нажимая кнопку, вы соглашаетесь с{" "}
                      <Link href="/privacy" className="text-primary">
                        политикой конфиденциальности
                      </Link>
                    </p>
                    <Button
                      type="submit"
                      color="primary"
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      Отправить заявку
                    </Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 