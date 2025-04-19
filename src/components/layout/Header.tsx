"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMenu } from "react-icons/fi";
import { navLinks } from "@/lib/constants/navigation";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  useDisclosure,
} from "@heroui/react";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Проверка активности ссылки
  const isLinkActive = (href: string): boolean => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
    <Navbar 
      isBlurred={isScrolled}
      isBordered={isScrolled}
      className={`fixed transition-all duration-300 py-4 md:py-5 z-50 ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      }`}
      maxWidth="xl"
    >
      {/* Логотип слева */}
      <NavbarBrand>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="ml-2"
        >
          <Link href="/" className="font-bold text-inherit">
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <Image
                src="/logo.png"
                alt="Ресторико"
                width={160}
                height={40}
                className="h-auto"
              />
            </motion.div>
          </Link>
        </motion.div>
      </NavbarBrand>

      {/* Основная навигация для десктопа */}
      <NavbarContent className="hidden md:flex gap-8 mx-4" justify="center">
        {navLinks.map((link, index) => (
          <NavbarItem key={link.href}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -3 }}
            >
              <Link
                color={isLinkActive(link.href) ? "primary" : "foreground"}
                href={link.href}
                className={`font-medium transition-colors px-3 py-2 rounded-lg ${
                  isLinkActive(link.href) 
                    ? "bg-primary/10 text-primary font-semibold" 
                    : "hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.title}
                {isLinkActive(link.href) && (
                  <motion.div 
                    className="h-[3px] bg-primary rounded-full mt-1 mx-auto" 
                    layoutId="activeIndicator"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </Link>
            </motion.div>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Кнопка "Связаться с нами" для десктопа */}
      <NavbarContent justify="end" className="hidden md:flex px-2 sm:px-4">
        <NavbarItem>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mr-2"
          >
            <Button
              as={Link}
              href="/contacts"
              color="primary"
              variant="flat"
              className="font-medium px-6 py-6 h-auto rounded-xl shadow-sm hover:shadow-md transition-all"
              size="lg"
            >
              Связаться с нами
            </Button>
          </motion.div>
        </NavbarItem>
      </NavbarContent>

      {/* Кнопка гамбургер справа */}
      <div className="flex md:hidden ml-auto">
        <Button 
          isIconOnly
          variant="light" 
          size="lg" 
          className="text-foreground"
          onClick={isOpen ? onClose : onOpen}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isOpen ? (
            <FiX className="text-xl" />
          ) : (
            <FiMenu className="text-xl" />
          )}
        </Button>
      </div>

    
    </Navbar>
      {/* Мобильное меню */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 mt-20 px-4 bg-background/98 backdrop-blur-lg z-[100] opacity-95 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-1 pt-2"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={`${link.href}-mobile`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <div className="my-2">
                    <Link
                      color={isLinkActive(link.href) ? "primary" : "foreground"}
                      className={`w-full font-medium py-3 px-4 text-lg block rounded-xl transition-all ${
                        isLinkActive(link.href) 
                          ? "bg-primary/10 text-primary font-semibold" 
                          : "hover:bg-primary/5 hover:text-primary"
                      }`}
                      href={link.href}
                      onClick={onClose}
                    >
                      <motion.div 
                        whileHover={{ x: 5 }} 
                        transition={{ duration: 0.2 }}
                        className="flex items-center"
                      >
                        {link.title}
                        {isLinkActive(link.href) && (
                          <motion.div 
                            className="w-2 h-2 bg-primary rounded-full ml-3" 
                            layoutId="mobileActiveIndicator"
                          />
                        )}
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 mb-8"
            >
              <Button
                as={Link}
                href="/contacts"
                color="primary"
                className="w-full font-medium py-6 rounded-xl shadow-md"
                size="lg"
                onClick={onClose}
              >
                Связаться с нами
              </Button>
            </motion.div>
            
            <motion.div
              className="absolute bottom-0 left-0 w-full h-40 pointer-events-none opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              style={{
                background: "linear-gradient(to top, var(--background), transparent)",
                zIndex: -1
              }}
            />
          </div>
        )}
      </AnimatePresence>
      </>
  );
};

export default Header; 