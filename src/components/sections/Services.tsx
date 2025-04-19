"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { servicesData } from "@/lib/constants/services";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  Divider,
} from "@heroui/react";

const Services = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.3 });

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Декоративный паттерн */}
      <div className="absolute inset-0 opacity-5 z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
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
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
              Наши услуги
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Предоставляем полный комплекс услуг по сохранению объектов культурного наследия,
            от разработки документации до авторского надзора
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ 
                y: -12, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 } 
              }}
            >
              <Card 
                className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                style={{ borderRadius: "16px" }}
              >
                <CardHeader className="flex gap-3 p-6 pb-3">
                  <div className="text-4xl text-primary">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                </CardHeader>
                <Divider className="opacity-50" />
                <CardBody className="p-6">
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                  {service.features && service.features.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2 text-lg">•</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardBody>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Link 
                    href={service.href}
                    color="primary"
                    showAnchorIcon
                    className="font-medium text-lg hover:underline"
                  >
                    Подробнее
                  </Link>
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
            href="/services"
            color="primary"
            size="lg"
            className="font-medium px-8 py-6 rounded-xl shadow-lg shadow-primary/25 bg-gradient-to-r from-primary to-primary-dark hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Все услуги
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 