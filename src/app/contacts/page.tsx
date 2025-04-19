import RootLayout from "@/components/layout/RootLayout";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactsPage() {
  return (
    <RootLayout>
      <div className="container mx-auto px-4 pt-24 pb-8">
        <h1 className="text-4xl font-bold mb-8">Контакты</h1>
        <p className="text-lg mb-12">Свяжитесь с нами любым удобным способом</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Наш адрес</h2>
            <p className="text-lg mb-2">Москва, Россия</p>
            <p className="text-lg mb-8">ул. Примерная, д. 123</p>
            
            <h2 className="text-2xl font-bold mb-4">Контактная информация</h2>
            <p className="text-lg mb-2">Телефон: +7 (123) 456-78-90</p>
            <p className="text-lg mb-2">Email: info@restorico.ru</p>
          </div>
          
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Здесь будет карта</span>
          </div>
        </div>
      </div>
      
      <ContactForm />
    </RootLayout>
  );
} 