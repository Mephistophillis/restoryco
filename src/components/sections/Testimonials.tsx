"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Card, 
  CardBody, 
  Avatar, 
  Chip,
  Button
} from "@heroui/react";
import { FiBookOpen, FiAward, FiChevronLeft, FiChevronRight, FiStar, FiMessageSquare } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    content:
      "Компания «Ресторико» провела комплексное исследование объекта культурного наследия регионального значения. Их детальный подход к документации и высокий профессионализм помогли нам сохранить историческую ценность здания при проведении реставрационных работ.",
    author: "Елена Петрова",
    position: "Директор музея истории города",
    image: "/images/testimonials/testimonial-1.jpg",
    rating: 5,
    project: "Реставрация фасада исторического здания",
  },
  {
    id: 2,
    content:
      "Благодарим команду «Ресторико» за разработку научно-проектной документации для нашей усадьбы XIX века. Специалисты компании продемонстрировали глубокое понимание исторических материалов и технологий, что позволило максимально точно воссоздать утраченные элементы.",
    author: "Андрей Соколов",
    position: "Руководитель департамента культуры",
    image: "/images/testimonials/testimonial-2.jpg",
    rating: 5,
    project: "Воссоздание интерьеров усадьбы",
  },
  {
    id: 3,
    content:
      "Сотрудничество с «Ресторико» оказалось исключительно продуктивным. Их экспертиза и консультации по вопросам сохранения объекта культурного наследия федерального значения были неоценимы. Все работы были выполнены в точном соответствии с законодательством и в согласованные сроки.",
    author: "Мария Иванова",
    position: "Представитель заказчика",
    image: "/images/testimonials/testimonial-3.jpg",
    rating: 5,
    project: "Реставрация церкви XVIII века",
  },
  {
    id: 4,
    content:
      "Профессионализм специалистов «Ресторико» виден в каждой детали проекта. Их инновационный подход к 3D-сканированию и моделированию объектов культурного наследия позволил нам получить исчерпывающую документацию о состоянии памятника архитектуры и спланировать реставрационные работы с учетом всех особенностей.",
    author: "Сергей Николаев",
    position: "Главный архитектор проекта",
    image: "/images/testimonials/testimonial-4.jpg",
    rating: 5,
    project: "Обследование памятника архитектуры",
  },
];

// Компонент рейтинга с анимацией
const Rating = ({ value, readOnly = false }: { value: number; readOnly?: boolean }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.3, 
            delay: 0.1 * i,
            type: "spring",
            stiffness: 300
          }}
        >
          <FiStar
            className={`w-5 h-5 ${i < value ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
          />
        </motion.div>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0); // -1 влево, 1 вправо
  const totalSlides = testimonials.length;
  const slideRef = useRef<HTMLDivElement>(null);
  
  // Индикаторы для мобильных устройств
  const indicators = Array.from({ length: totalSlides }, (_, i) => i);

  // Авто-прокрутка слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setDirection(1);
        setActiveIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
        setIsAnimating(true);
      }
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating, totalSlides]);

  // Обработка анимации перехода
  useEffect(() => {
    if (isAnimating && slideRef.current) {
      const animationDuration = 500; // ms
      slideRef.current.style.transition = `transform ${animationDuration}ms ease-in-out`;
      slideRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
      
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, animationDuration);
      
      return () => clearTimeout(timer);
    }
  }, [activeIndex, isAnimating]);

  const goToNext = () => {
    if (!isAnimating) {
      setDirection(1);
      setActiveIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
      setIsAnimating(true);
    }
  };

  const goToPrev = () => {
    if (!isAnimating) {
      setDirection(-1);
      setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
      setIsAnimating(true);
    }
  };
  
  const goToSlide = (index: number) => {
    if (!isAnimating) {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
      setIsAnimating(true);
    }
  };

  // Параллакс эффект при скролле
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Стильный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10"/>
      
      {/* Декоративные элементы */}
      <motion.div 
        className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full -z-5" 
        style={{ translateY: scrollY * 0.05 }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-64 h-64 bg-primary/5 rounded-full -z-5"
        style={{ translateY: scrollY * -0.05 }}
      />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Chip color="primary" className="mb-4">Отзывы клиентов</Chip>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Доверие профессионалов в области культурного наследия
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы гордимся сотрудничеством с ведущими организациями и специалистами в сфере сохранения
            и восстановления объектов культурного наследия России.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          {/* Улучшенная карусель */}
          <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
            <div 
              ref={slideRef}
              className="flex w-full"
              style={{ width: `${totalSlides * 100}%` }}
            >
              <AnimatePresence initial={false} mode="wait">
                {testimonials.map((testimonial, idx) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 px-4 py-8 md:px-10 md:py-10"
                    style={{ width: `${100 / totalSlides}%` }}
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <motion.div
                        initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                        transition={{ duration: 0.4 }}
                        className="md:w-1/3"
                      >
                        <div className="flex flex-col items-center md:items-start">
                          <Avatar
                            src={testimonial.image}
                            fallback={testimonial.author.charAt(0)}
                            className="w-20 h-20 md:w-24 md:h-24 border-2 border-primary/20 shadow-md mb-4"
                          />
                          <div className="text-center md:text-left">
                            <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                            <p className="text-gray-600 text-sm mb-3">{testimonial.position}</p>
                            <Rating value={testimonial.rating} readOnly />
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        className="md:w-2/3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className="mb-6 py-4 border-y border-gray-100">
                          <div className="flex gap-2 items-center mb-2">
                            <FiBookOpen className="text-primary" />
                            <p className="text-sm font-medium">Проект:</p>
                          </div>
                          <p className="text-gray-700">{testimonial.project}</p>
                        </div>
                        
                        <blockquote className="relative">
                          <FiMessageSquare className="absolute -top-2 -left-2 text-5xl text-primary/10" />
                          <p className="text-gray-700 italic pl-8 pr-4">{testimonial.content}</p>
                          
                          <motion.div 
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-6 flex items-center gap-2"
                          >
                            <FiAward className="text-primary" />
                            <p className="text-sm text-gray-600">Завершенный проект</p>
                          </motion.div>
                        </blockquote>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </AnimatePresence>
            </div>
            
            {/* Кнопки навигации (десктоп) */}
            <Button 
              isIconOnly
              aria-label="Предыдущий отзыв"
              className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hidden md:flex items-center justify-center z-10"
              onClick={goToPrev}
              size="lg"
              variant="flat"
            >
              <FiChevronLeft className="text-gray-700" />
            </Button>
            <Button 
              isIconOnly
              aria-label="Следующий отзыв"
              className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hidden md:flex items-center justify-center z-10"
              onClick={goToNext}
              size="lg"
              variant="flat"
            >
              <FiChevronRight className="text-gray-700" />
            </Button>
            
            {/* Индикаторы слайдов (мобильный) */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 md:hidden">
              {indicators.map((index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-primary w-6" : "bg-gray-300"
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Перейти к отзыву ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Навигация (мобильная) */}
          <div className="mt-8 flex justify-center gap-4 md:hidden">
            <Button 
              isIconOnly
              variant="flat"
              aria-label="Предыдущий отзыв"
              className="p-2 rounded-full"
              onClick={goToPrev}
            >
              <FiChevronLeft />
            </Button>
            <Button 
              isIconOnly
              variant="flat"
              aria-label="Следующий отзыв"
              className="p-2 rounded-full"
              onClick={goToNext}
            >
              <FiChevronRight />
            </Button>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <motion.div
              whileInView={{ scale: [0.9, 1.1, 1] }}
              transition={{ duration: 1, times: [0, 0.5, 1] }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center mb-6 px-6 py-2 bg-primary/10 rounded-full"
            >
              <span className="text-primary font-semibold">Более 50+ успешно реализованных проектов</span>
            </motion.div>
            
            <div className="flex flex-wrap justify-center items-center gap-3 max-w-3xl mx-auto">
              {["Церкви и храмы", "Усадьбы", "Исторические здания", "Памятники архитектуры", 
                "Музеи", "Объекты федерального значения", "Городская застройка"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Chip variant="flat" color="primary" size="lg" className="text-sm md:text-base">{item}</Chip>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 