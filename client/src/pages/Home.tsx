/**
 * Home Page - Пастерия 51
 * 
 * Design: Warm Artisanal Minimalism
 * - Cream background (#F5F1E8)
 * - Terracotta accents (#B8613F)
 * - Olive green secondary (#7A8B5F)
 * - Playfair Display for headings, Lora for body
 * - Asymmetric layout with organic spacing
 * - Subtle textures and warm shadows
 */

import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Phone, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { MapView } from "@/components/Map";

export default function Home() {
  const [expandedReview, setExpandedReview] = useState<number | null>(null);

  const reviews = [
    {
      id: 1,
      author: "Евгения Полянская",
      date: "24 января 2026",
      text: "Очень-очень вкусно!!))) Здесь можно найти мою любимую вкусняшку - какао натуральный, без сахара! Нежнейшая фритатта! Паста ручной работы 😍 А о том, что существует заварной штрудель, узнала только здесь) Уютная атмосфера и приятное обслуживание ☺",
      rating: 5,
    },
    {
      id: 2,
      author: "Илья Кривошеин",
      date: "11 января 2026",
      text: "Хорошая кухня, приятный интерьер. Обслуживание может быть побыстрее.",
      rating: 4,
    },
    {
      id: 3,
      author: "Anna Zaboronok",
      date: "28 декабря 2025",
      text: "Очень вкусно. Даже в Питере очень редко найдёшь такую пасту, а здесь я очень приятно удивилась! Ездим в Калининград относительно часто, будем заходить и рекомендовать знакомым. У повара золотые руки! Цены как будто даже слишком дешевые для такой вкусной кухни. Большое спасибо, безумно вкусно🤍🤌 🔥",
      rating: 5,
    },
    {
      id: 4,
      author: "Марина Воронова",
      date: "18 декабря 2025",
      text: "Зашла мимо в поисках где позавтракать) Очень вкусный завтрак, заказывала кашу из зеленой гречки 👌 и капучино замечательный. Атмосфера уютно, тихо, комфортно",
      rating: 5,
    },
    {
      id: 5,
      author: "Анжелика Сулима",
      date: "10 октября 2025",
      text: "Супер завтраки! Всё очень понравилось :)",
      rating: 5,
    },
  ];

  const menuItems = [
    { name: "Паста ручной работы", description: "Свежая паста с традиционными итальянскими соусами" },
    { name: "Пицца", description: "Классическая неаполитанская пицца из печи" },
    { name: "Завтраки", description: "Фритатта, каша, круассаны и свежий кофе" },
    { name: "Кофе", description: "Качественный кофе и горячие напитки" },
    { name: "Десерты", description: "Заварной штрудель и другие сладости" },
    { name: "Салаты", description: "Свежие овощные салаты с качественными ингредиентами" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-accent">Пастерия 51</h1>
          <div className="flex gap-6 text-sm">
            <a href="#menu" className="hover:text-accent transition-colors">Меню</a>
            <a href="#reviews" className="hover:text-accent transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-secondary mb-3">Добро пожаловать</p>
                <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Паста ручной работы
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Уютное кафе в центре Калининграда, где каждое блюдо готовится с любовью. Паста ручной работы, свежие ингредиенты и теплая атмосфера.
              </p>
              <div className="flex gap-4 pt-4">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Позвонить
                </Button>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  Меню
                </Button>
              </div>
              {/* Rating */}
              <div className="pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.5</span>
                  <span className="text-sm text-muted-foreground">(118 оценок)</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663437401742/YzV3v8qdQXN5Nxfvyfez5a/pasteria51-hero-pasta-gmr93dBSVagHXf6oM2Lgpu.webp"
                alt="Паста ручной работы"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Menu Section */}
      <section id="menu" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-widest text-secondary mb-3">Специализация</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Наше меню</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Menu Items Grid */}
            <div className="space-y-6">
              {menuItems.slice(0, 3).map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Menu Image */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663437401742/YzV3v8qdQXN5Nxfvyfez5a/pasteria51-pizza-DQ3UkbV8Mf9memqN2ZF7JQ.webp"
                alt="Пицца"
                className="w-full h-full object-cover"
              />
            </div>

            {/* More Menu Items */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg md:order-4">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663437401742/YzV3v8qdQXN5Nxfvyfez5a/pasteria51-breakfast-fNrPUPe6bDo2rQBxEjoWns.webp"
                alt="Завтрак"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6 md:order-3">
              {menuItems.slice(3, 6).map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-24 bg-white/50">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-widest text-secondary mb-3">Что говорят гости</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Отзывы</h2>
          </div>

          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-card rounded-lg p-6 md:p-8 border border-border hover:border-accent/30 transition-colors cursor-pointer"
                onClick={() => setExpandedReview(expandedReview === review.id ? null : review.id)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{review.author}</h3>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-accent text-accent" />
                    ))}
                  </div>
                </div>

                <p className={`text-muted-foreground leading-relaxed ${expandedReview === review.id ? "" : "line-clamp-2"}`}>
                  {review.text}
                </p>

                {review.text.length > 100 && (
                  <button className="mt-3 text-accent text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    {expandedReview === review.id ? "Скрыть" : "Читать целиком"}
                    <ChevronDown size={14} className={`transition-transform ${expandedReview === review.id ? "rotate-180" : ""}`} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Всего 90 отзывов на Яндекс Карты</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="mb-12">
                <p className="text-sm uppercase tracking-widest text-secondary mb-3">Контакты</p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">Найти нас</h2>
              </div>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <MapPin className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Адрес</h3>
                    <p className="text-muted-foreground">
                      Улица Фрунзе, 51<br />
                      1 этаж<br />
                      Ленинградский район<br />
                      Калининград, 236016
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <Clock className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Время работы</h3>
                    <p className="text-muted-foreground">
                      Сегодня с 09:00 до 21:00<br />
                      <span className="text-secondary font-medium">Открыто</span>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <Phone className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Телефон</h3>
                    <a href="tel:+79316167123" className="text-accent hover:text-accent/80 transition-colors">
                      +7 931 616 71 23
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full md:w-auto">
                  Позвонить сейчас
                </Button>
              </div>
            </div>

            {/* Google Maps */}
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <MapView
                initialCenter={{ lat: 54.7065, lng: 20.4606 }}
                initialZoom={16}
                onMapReady={(map) => {
                  // Add marker for the café
                  new google.maps.marker.AdvancedMarkerElement({
                    map,
                    position: { lat: 54.7065, lng: 20.4606 },
                    title: "Пастерия 51",
                  });
                }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white/50 py-8">
        <div className="container flex justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2026 Пастерия 51. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Яндекс Карты</a>
            <a href="#" className="hover:text-accent transition-colors">2ГИС</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
