import RootLayout from "@/components/layout/RootLayout";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import ContactForm from "@/components/sections/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ресторико - Сохранение объектов культурного наследия",
  description: "Разработка проектной документации по сохранению объектов культурного наследия и выполнение проектной документации для объектов, находящихся в зонах охраны ОКН.",
  keywords: "объекты культурного наследия, проектная документация, сохранение ОКН, реставрация, историческое наследие",
};

export default function Home() {
  return (
    <RootLayout>
      <Hero />
      <About />
      <Services />
      <Projects />
      <ContactForm />
    </RootLayout>
  );
}
