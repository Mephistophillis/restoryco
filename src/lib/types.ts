// Типы для проектов
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  href: string;
  year?: string; // Год завершения проекта
}

// Типы для услуг
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  href: string;
  features?: string[]; // Список ключевых особенностей услуги
}

// Типы для формы обратной связи
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
} 