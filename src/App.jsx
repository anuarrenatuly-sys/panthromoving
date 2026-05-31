import { motion, useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Lenis from "lenis"
import {
  FaWhatsapp,
  FaInstagram,
  FaPhone,
  FaArrowUp,
} from "react-icons/fa"
import { FaCheckCircle  } from "react-icons/fa"
import { Routes, Route } from "react-router-dom"
import Quote from "./pages/Quote"
import { useNavigate } from "react-router-dom"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"
import ScrollToTop from "./ScrollToTop"
import Packing from "./pages/Packing"
import Assembly from "./pages/Assembly"
import Furniture from "./pages/Furniture"
import Insurance from "./pages/Insurance"
import {
  Package,
  Trash2,
  ShieldCheck,
  Wrench,
  Phone,
Video,
MessageCircle,
House
  } from "lucide-react"
export default function App() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const [openFaq, setOpenFaq] = useState(0)

  const [count, setCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const browserLang = navigator.language.slice(0, 2)

const defaultLang =
  browserLang === "ru"
    ? "ru"
    : "en"

const [lang, setLang] = useState(
  localStorage.getItem("lang") || defaultLang
)
  const [name, setName] = useState("")
const [phone, setPhone] = useState("")
const [date, setDate] = useState("")
const [pickup, setPickup] = useState("")
const [destination, setDestination] = useState("")
const [truck, setTruck] = useState("")
const statsRef = useRef(null)
const navigate = useNavigate()

const isInView = useInView(statsRef, {
  once: true,
})
const translations = {

  en: {
    home: "Home",
services: "Solutions",
included: "Included",
fleet: "Moving Types",
whyus: "Why Panthro",
contact: "Contacts",
    hero: "Premium Moving Services",
    subtitle:
  "Fast, secure and professional moving services across the USA.",
    quote: "Get Started",
    learn: "Learn More",
    order: "Order Now",
    clients: "Moves Completed",
    support: "Professional Movers",
    trucks: "Moving Trucks",
servicesText: "OUR SERVICES",
servicesTitle: "What We Offer",
apartment: "Apartment Moving",
office: "Office Relocation",
packing: "Packing",
delivery: "Express Delivery",
apartmentText:
  "Fast and safe apartment relocation with professional movers.",

officeText:
  "Complete office moving services for businesses.",

packingText:
  "Professional packing materials and secure transportation.",

deliveryText:
  "Urgent cargo delivery available 24 hours a day.",
  fleetText: "OUR FLEET",
fleetTitle: "Moving Vehicles",

truck1: "Long Distance Moving",
truck2: "Local Moving",
truck3: "Office & Commercial Moving",
truck4: "Piano Moving",

truck1Text:
  "Safe interstate and cross-country moving services.",

truck2Text:
  "Fast and affordable local moving solutions.",

truck3Text:
  "Professional business and office relocation services.",

truck4Text:
  "Careful transportation for pianos and fragile instruments.",
upto2: "Up to 2 Tons",
upto3: "Up to 3 Tons",
upto1: "Up to 1 Ton",

orderTruck: "Order Truck",
processText: "HOW IT WORKS",
processTitle: "Simple Moving Process",

step1: "Leave Request",
step2: "We Contact You",
step3: "Movers Arrive",
step4: "Safe Delivery",
whyText: "WHY CHOOSE US",
whyTitle: "Moving Made Simple",

fast: "Fast Delivery",
safe: "Safe Transport",
support24: "Professional Team",

fastText:
  "Quick and efficient moving with on-time transportation.",

safeText:
  "Your cargo is protected and handled professionally.",

  supportText:
  "Experienced movers providing careful and reliable service.",

  ctaTitle: "Ready To Move?",
ctaText:
  "Book your moving service today and get professional transportation.",

contactUs: "Contact Us",

modalTitle: "Contact Us",
modalText:
  "Leave your request and we’ll call you back.",

yourName: "Your Name",
phoneNumber: "Phone Number",

sendRequest: "Send Request",

heroTop: "FAST & RELIABLE MOVING",
rights: "All rights reserved.",
pickup: "Pickup Address",
destination: "Destination Address",
selectTruck: "Select Truck",
notes: "Additional Notes",
date: "Moving Date",
includedTitle: "What's included in every move.",

includedText1:
  "Our professional movers provide reliable local and long-distance moving services tailored to your needs.",

includedText2:
  "We focus on safe transportation, transparent pricing and careful handling of every item during the moving process.",

includedText3:
  "From apartments and houses to offices and commercial spaces, PanthroMoving delivers smooth and stress-free relocation services across the United States.",

freeQuote: "GET A FREE QUOTE",

customPacking: "Custom Wrapping & Packing",
boxesNeed: "Boxes For Any Need",
assemblyTitle: "Disassembly & Assembly",
materialsTitle: "High Quality Materials",
cratingTitle: "Crating Services",

whyTitleNew: "7 Reasons Customers Choose Panthromoving",

whyTextNew:
  "From local apartment moves to long-distance relocation, we make the moving process smooth, safe and stress-free.",

reason1: "Professional packing and unpacking services",
reason2: "Fast and reliable same-day moving",
reason3: "Licensed and insured movers",
reason4: "Furniture protection and careful handling",
reason5: "Affordable pricing with no hidden fees",
reason6: "Local and long-distance moving solutions",
reason7: "24/7 customer support and fast response",

contactTitle: "Choose How To Connect",
contactText: "CONTACT OPTIONS",

quickCallback: "Quick Callback",
talkHuman: "Talk To A Human",
talkHumanText:
  "Get a fast moving estimate over the phone.",

videoWalk: "Video Walkthrough",
showCamera: "Show On Camera",
showCameraText:
  "Show us your place through a quick video call.",

textMessage: "Text Message",
textDetails: "Text The Details",
textDetailsText:
  "Send your moving details instantly.",

callNow: "Call Now",
startVideo: "Start Video",
sendMessageNow: "Send Message",
packingService: "Packing & Unpacking",
assemblyService: "Assembly Service",
disposalService: "Furniture Disposal",
insuranceService: "Moving Insurance",
packingServiceText:
  "We securely wrap and unpack your belongings safely.",

assemblyServiceText:
  "Furniture assembly and disassembly done professionally.",

disposalServiceText:
  "Safe disposal and removal of unwanted furniture.",

insuranceServiceText:
  "Protection and coverage for your moving service.",
  popular: "POPULAR",
  faq1: "Mattresses",
faq2: "TVs & Electronics",
faq3: "Couches & Chairs",
faq4: "Computers",
faq5: "Glass Tables",
faq6: "Paintings & Mirrors",
faq7: "Fragile Items",

faq8: "Book and dish boxes",
faq9: "Wardrobe and linen boxes",
faq10: "TV, picture and mirror boxes",
faq11: "Commercial bins",
faq12: "Mattress boxes",
faq13: "Wine boxes",
faq14: "Lamp boxes",
faq15: "Other parts boxes",

faq16: "Tables",
faq17: "Armoires",
faq18: "China cabinets",
faq19: "Shelves",
faq20: "Chandeliers",
faq21: "TV and electronics",
faq22: "Other furniture",

faq23: "Moving blankets",
faq24: "Bubble wrap and bubble kraft",
faq25: "Packing paper and moving tape",
faq26: "Corner and wall protection",
faq27: "Lamps and light bulbs",
faq28: "Moving dolly",
faq29: "Shrink wrap",
faq30: "Glassine paper",
faq31: "Rug and Masonite floor protection",

faq32: "Marble furniture",
faq33: "Peloton",
faq34: "Motorcycle",
faq35: "Paintings",
faq36: "Artworks and sculptures",
faq37: "Antiques",
faq38: "Other fragile items",
altMove: "Moving Service",
footerText:
  "Premium moving services across the United States with professional movers and secure transportation.",

company: "Company",
footerSolutions: "Solutions",
footerIncluded: "Included",
footerTypes: "Moving Types",
footerWhy: "Why Panthro",

footerContact: "Contact",

footerHelp: "Need Moving Help?",

footerHelpText:
  "Get a fast moving estimate from our professional team.",

freeQuote: "Get Free Quote",

privacy: "Privacy Policy",
terms: "Terms of Service",

rights: "All rights reserved.",
onsiteTitle: "On-Site Estimate",

onsiteText:
  "Our specialist will visit your location to evaluate your move and provide a precise personalized estimate.",

requestVisit: "Request Visit",
onsiteText:
  "We’ll visit your location and provide a personalized moving estimate.",
  },

  ru: {
    home: "Главная",
services: "Решения",
included: "Что включено",
fleet: "Типы переезда",
whyus: "Почему Panthro",
contact: "Контакты",
    hero: "Премиальные услуги переезда",
    subtitle:
  "Быстрые, безопасные и профессиональные услуги переезда по США.",
    quote: "Начать",
    learn: "Подробнее",
    order: "Заказать",
    clients: "Переездов",
    support: "Грузчиков",
    trucks: "Грузовых машин",
servicesText: "НАШИ УСЛУГИ",
servicesTitle: "Что мы предлагаем",
apartment: "Квартирный переезд",
office: "Офисный переезд",
packing: "Упаковка",
delivery: "Экспресс доставка",
apartmentText:
  "Быстрый и безопасный квартирный переезд с профессиональными грузчиками.",

officeText:
  "Полный комплекс офисного переезда для бизнеса.",

packingText:
  "Профессиональная упаковка и безопасная транспортировка.",

deliveryText:
  "Срочная доставка грузов 24 часа в сутки.",
  fleetText: "НАШ АВТОПАРК",
fleetTitle: "Транспорт для переезда",

truck1: "Междугородний переезд",
truck2: "Локальный переезд",
truck3: "Офисный переезд",
truck4: "Перевозка пианино",

truck1Text:
  "Безопасные междугородние и дальние перевозки.",

truck2Text:
  "Быстрые и доступные локальные переезды.",

truck3Text:
  "Профессиональный офисный и коммерческий переезд.",

truck4Text:
  "Аккуратная перевозка пианино и хрупких инструментов.",
upto2: "До 2 тонн",
upto3: "До 3 тонн",
upto1: "До 1 тонны",

orderTruck: "Заказать",
processText: "КАК ЭТО РАБОТАЕТ",
processTitle: "Простой процесс переезда",

step1: "Оставьте заявку",
step2: "Мы свяжемся с вами",
step3: "Приедут грузчики",
step4: "Безопасная доставка",
whyText: "ПОЧЕМУ МЫ",
whyTitle: "Переезд стал проще",

fast: "Быстрая доставка",
safe: "Безопасная перевозка",
support24: "Профессиональная команда",

fastText:
  "Быстрый и эффективный переезд с доставкой вовремя.",

safeText:
  "Ваш груз защищён и перевозится профессионально.",

  supportText:
  "Опытные грузчики обеспечивают аккуратный и надежный сервис.",

  ctaTitle: "Готовы к переезду?",
ctaText:
  "Закажите переезд сегодня и получите профессиональную перевозку.",

contactUs: "Связаться",

modalTitle: "Связаться с нами",
modalText:
  "Оставьте заявку и мы вам перезвоним.",

yourName: "Ваше имя",
phoneNumber: "Номер телефона",

sendRequest: "Отправить заявку",

heroTop: "БЫСТРЫЙ И НАДЁЖНЫЙ ПЕРЕЕЗД",
rights: "Все права защищены.",
pickup: "Адрес загрузки",
destination: "Адрес доставки",
selectTruck: "Выберите грузовик",
notes: "Дополнительная информация",
date: "Дата переезда",
includedTitle: "Что включено в каждый переезд.",

includedText1:
  "Наши профессиональные грузчики предоставляют надежные услуги локального и междугороднего переезда под ваши задачи.",

includedText2:
  "Мы обеспечиваем безопасную транспортировку, прозрачные цены и аккуратное обращение с каждой вещью.",

includedText3:
  "От квартир и домов до офисов и коммерческих помещений — PanthroMoving обеспечивает комфортный и безопасный переезд по США.",

freeQuote: "ПОЛУЧИТЬ РАСЧЁТ",

customPacking: "Индивидуальная упаковка",
boxesNeed: "Коробки для любых задач",
assemblyTitle: "Сборка и разборка",
materialsTitle: "Качественные материалы",
cratingTitle: "Обрешётка и защита",

whyTitleNew: "7 причин выбрать Panthromoving",

whyTextNew:
  "От локальных переездов до перевозок на дальние расстояния — мы делаем процесс переезда простым, безопасным и комфортным.",

reason1: "Профессиональная упаковка и распаковка",
reason2: "Быстрый переезд в тот же день",
reason3: "Лицензированные и застрахованные грузчики",
reason4: "Защита мебели и аккуратная перевозка",
reason5: "Честные цены без скрытых платежей",
reason6: "Локальные и междугородние переезды",
reason7: "Поддержка клиентов 24/7",

contactTitle: "Выберите способ связи",
contactText: "СПОСОБЫ СВЯЗИ",

quickCallback: "Быстрый звонок",
talkHuman: "Поговорить с менеджером",
talkHumanText:
  "Получите быстрый расчёт стоимости по телефону.",

videoWalk: "Видео оценка",
showCamera: "Показать по видео",
showCameraText:
  "Покажите помещение через быстрый видеозвонок.",

textMessage: "Сообщение",
textDetails: "Отправить детали",
textDetailsText:
  "Мгновенно отправьте детали переезда.",

callNow: "Позвонить",
startVideo: "Начать видео",
sendMessageNow: "Отправить сообщение",
packingService: "Упаковка и распаковка",
assemblyService: "Сборка мебели",
disposalService: "Вывоз мебели",
insuranceService: "Страхование переезда",
packingServiceText:
  "Надёжная упаковка и распаковка ваших вещей.",

assemblyServiceText:
  "Профессиональная сборка и разборка мебели.",

disposalServiceText:
  "Безопасный вывоз и утилизация ненужной мебели.",

insuranceServiceText:
  "Защита и страхование вашего переезда.",
  popular: "ПОПУЛЯРНО",
  faq1: "Матрасы",
faq2: "Телевизоры и электроника",
faq3: "Диваны и кресла",
faq4: "Компьютеры",
faq5: "Стеклянные столы",
faq6: "Картины и зеркала",
faq7: "Хрупкие предметы",

faq8: "Коробки для книг и посуды",
faq9: "Коробки для одежды и белья",
faq10: "Коробки для ТВ и зеркал",
faq11: "Коммерческие контейнеры",
faq12: "Коробки для матрасов",
faq13: "Коробки для вина",
faq14: "Коробки для ламп",
faq15: "Другие коробки",

faq16: "Столы",
faq17: "Шкафы",
faq18: "Серванты",
faq19: "Полки",
faq20: "Люстры",
faq21: "ТВ и электроника",
faq22: "Другая мебель",

faq23: "Транспортировочные одеяла",
faq24: "Пузырчатая плёнка",
faq25: "Упаковочная бумага и скотч",
faq26: "Защита углов и стен",
faq27: "Лампы и освещение",
faq28: "Тележки для перевозки",
faq29: "Стретч плёнка",
faq30: "Glassine бумага",
faq31: "Защита пола и ковров",

faq32: "Мраморная мебель",
faq33: "Peloton",
faq34: "Мотоциклы",
faq35: "Картины",
faq36: "Скульптуры и арт-объекты",
faq37: "Антиквариат",
faq38: "Другие хрупкие предметы",
altMove: "Сервис переезда",
footerText:
  "Премиальные услуги переезда по США с профессиональными грузчиками и безопасной транспортировкой.",

company: "Компания",
footerSolutions: "Решения",
footerIncluded: "Что включено",
footerTypes: "Типы переезда",
footerWhy: "Почему Panthro",

footerContact: "Контакты",

footerHelp: "Нужна помощь с переездом?",

footerHelpText:
  "Получите быстрый расчёт переезда от нашей команды.",

freeQuote: "Получить расчёт",

privacy: "Политика конфиденциальности",
terms: "Условия использования",

rights: "Все права защищены.",
onsiteTitle: "Выездная оценка",

onsiteText:
  "Мы приедем к вам и подготовим персональный расчёт переезда.",

requestVisit: "Запросить выезд",
  },

}
  
useEffect(() => {

  if (window.innerWidth < 768) return

  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

}, [])

  useEffect(() => {
  localStorage.setItem("lang", lang)
}, [lang])

useEffect(() => {

  const handleScroll = () => {

    if (window.scrollY > 600) {
      setShowTop(true)
    } else {
      setShowTop(false)
    }

  }

  window.addEventListener("scroll", handleScroll)

  return () => window.removeEventListener("scroll", handleScroll)

}, [])

useEffect(() => {

  if (!isInView) return

  let start = 0

  const end = 100

  const duration = 1500

  const increment = end / (duration / 16)

  const timer = setInterval(() => {

    start += increment

    if (start >= end) {
      start = end
      clearInterval(timer)
    }

    setCount(Math.floor(start))

  }, 16)

  return () => clearInterval(timer)

}, [isInView])

  const sendTelegram = async () => {

    const TOKEN = import.meta.env.VITE_BOT_TOKEN = "8809178619:AAEj0e5SUU06qFtb8skqLtBHqbfwBNu-WAA"
    const CHAT_ID = "5594857511"
  
    const message = `
🚚 New Moving Request

👤 Name: ${name}
📞 Phone: ${phone}

📍 Pickup: ${pickup}
🏁 Destination: ${destination}

🚛 Truck: ${truck}

📅 Date: ${date}
`
  
    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`
  
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    })

    const data = await response.json()
    
    console.log(data)
  
    setName("")
    setPhone("")
  }

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    })
  }
  return (
    <Routes>

<Route path="/packing" element={<Packing />} />

<Route path="/assembly" element={<Assembly />} />

<Route path="/furniture" element={<Furniture />} />

<Route path="/insurance" element={<Insurance />} />

<Route path="/privacy" element={<Privacy />} />

<Route path="/terms" element={<Terms />} />

    <Route
      path="/"
      element={
        <motion.div
  key={lang}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.4 }}
  onMouseMove={handleMouseMove}
  className="bg-black text-white min-h-screen overflow-hidden relative"
>
    <div
  className="pointer-events-none fixed inset-0 z-30 transition duration-300"
  style={{
    background: `radial-gradient(
      600px at ${position.x}px ${position.y}px,
      rgba(59,130,246,0.15),
      transparent 80%
    )`,
  }}
></div>

<div className="absolute inset-0 opacity-30">

<div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full mix-blend-screen blur-[120px] animate-pulse"></div>

<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500 rounded-full mix-blend-screen blur-[120px] animate-pulse"></div>

</div>

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Navbar */}
        <header className="flex items-center justify-between py-5 px-6 fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-2xl border-b border-white/10">

          <h1 className="text-3xl font-bold tracking-wide">
          Panthromoving
          </h1>

          <nav className="hidden md:flex gap-8 text-gray-300">
            <a href="#home" className="hover:text-white transition">
            {translations[lang].home}
            </a>

            <a href="#services" className="hover:text-white transition">
            {translations[lang].services}
            </a>

            <a href="#included" className="hover:text-white transition">
  {translations[lang].included}
</a>

            <a href="#fleet" className="hover:text-white transition">
            {translations[lang].fleet}
</a>

<a href="#whyus" className="hover:text-white transition">
{translations[lang].whyus}
</a>

<a href="#contacts" className="hover:text-white transition">
{translations[lang].contact}
</a>
          </nav>

          <div className="hidden md:flex gap-3 text-sm">

          <button
  onClick={() => setLang("en")}
  className={`transition px-3 py-1 rounded-xl ${
    lang === "en"
      ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.7)]"
      : "hover:text-blue-400"
  }`}
>
  EN
</button>

<button
  onClick={() => setLang("ru")}
  className={`transition px-3 py-1 rounded-xl ${
    lang === "ru"
      ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.7)]"
      : "hover:text-blue-400"
  }`}
>
  RU
</button>

</div>

<div className="flex items-center gap-2 md:gap-4">

  <div className="md:hidden flex gap-2 text-sm">

  <button
  onClick={() => setLang("en")}
  className={`transition px-3 py-1 rounded-xl ${
    lang === "en"
      ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.7)]"
      : "hover:text-blue-400"
  }`}
>
  EN
</button>

<button
  onClick={() => setLang("ru")}
  className={`transition px-3 py-1 rounded-xl ${
    lang === "ru"
      ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.7)]"
      : "hover:text-blue-400"
  }`}
>
  RU
</button>

  </div>

  <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-3xl block"
>
  ☰
</button>

</div>

<button
  onClick={() => navigate("/quote")}
  className="hidden md:block bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
>
  {translations[lang].order}
</button>

        </header>

        {
  menuOpen && (
    <>
    
      <div
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 bg-black/40 z-30"
      />
    <div className="md:hidden fixed top-24 left-6 right-6 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 z-40">

      <div className="flex flex-col gap-6 text-xl">

        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="hover:text-blue-400 transition"
        >
          {translations[lang].home}
        </a>

        <a
          href="#services"
          onClick={() => setMenuOpen(false)}
          className="hover:text-blue-400 transition"
        >
          {translations[lang].services}
        </a>

        <a
  href="#included"
  onClick={() => setMenuOpen(false)}
  className="hover:text-blue-400 transition"
>
  {translations[lang].included}
</a>

        <a
          href="#fleet"
          onClick={() => setMenuOpen(false)}
          className="hover:text-blue-400 transition"
        >
          {translations[lang].fleet}
        </a>

        <a
          href="#whyus"
          onClick={() => setMenuOpen(false)}
          className="hover:text-blue-400 transition"
        >
          {translations[lang].whyus}
        </a>

        <a
          href="#contacts"
          onClick={() => setMenuOpen(false)}
          className="hover:text-blue-400 transition"
        >
          {translations[lang].contact}
        </a>

      </div>

    </div>
    </>
  )
}

        {/* Hero Section */}
        <motion.section
        id="home"
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center pt-24 pb-32"
>
          {/* Left */}
          <div className="max-w-xl">

            <p className="text-blue-400 font-medium mb-4">
            {translations[lang].heroTop}
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            {translations[lang].hero}
            </h2>

            <p className="mt-8 text-gray-400 text-lg max-w-xl leading-relaxed">
            {translations[lang].subtitle}
            </p>

            <div className="flex gap-4 mt-10">

            <button
  onClick={() => navigate("/quote")}
  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-7 py-4 rounded-2xl font-semibold hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition"
>
  {translations[lang].quote}
</button>

<a
  href="#services"
  className="border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition"
>
  {translations[lang].learn}
</a>

            </div>

            {/* Stats */}
            <div
  ref={statsRef}
  className="grid grid-cols-3 gap-10 mt-16 mb-8 max-w-3xl"
>

            <div className="mr-4">
  <h3 className="text-4xl font-bold">
    {count.toLocaleString()}+
                </h3>

                <p className="text-gray-400 mt-2">
                {translations[lang].clients}
                </p>
              </div>

              <div className="ml-4">
  <h3 className="text-4xl font-bold">
  5+
                </h3>

                <p className="text-gray-400 mt-2">
                {translations[lang].support}
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">
                  4
                </h3>

                <p className="text-gray-400 mt-2">
                {translations[lang].trucks}
                </p>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="relative flex justify-center">

            <div className="absolute inset-0 w-full h-auto object-contain bg-black object-center"></div>

            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop"
              alt="Moving Service"
              className="relative rounded-3xl shadow-2xl border border-white/10 w-full max-w-[520px] mx-auto"
            />

          </div>

          </motion.section>

        {/* Services */}

        <section id="services" className="pb-20">
        <div className="text-center mb-20">

<p className="text-blue-400 font-medium mb-4">
{translations[lang].servicesText}
</p>

<h2 className="text-5xl font-bold">
{translations[lang].servicesTitle}
</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

{/* Card 1 */}
<div className="bg-white/5 text-white border border-white/10 backdrop-blur-xl rounded-[36px] p-8 hover:-translate-y-2 transition duration-300 shadow-2xl">

<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-xl flex items-center justify-center">
<Package size={28} className="text-blue-400" />
</div>

<div className="flex flex-wrap items-center gap-3 mb-6">

<h3 className="text-3xl font-black">
{translations[lang].packingService}
</h3>

<span className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-4 py-2 rounded-xl font-bold text-sm">
{translations[lang].popular}
</span>

</div>

<p className="text-gray-400 text-xl leading-relaxed mb-10">
{translations[lang].packingServiceText}
</p>

<button
onClick={() => navigate("/packing")}
className="w-12 h-12 rounded-full bg-blue-700 text-white text-2xl hover:scale-110 transition"
>
→
</button>

</div>

{/* Card 2 */}
<div className="bg-white/5 text-white border border-white/10 backdrop-blur-xl rounded-[36px] p-8 hover:-translate-y-2 transition duration-300 shadow-2xl">

<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-xl flex items-center justify-center">
<Wrench size={28} className="text-blue-400" />
</div>

<div className="flex flex-wrap items-center gap-3 mb-6">

<h3 className="text-3xl font-black">
{translations[lang].assemblyService}
</h3>

<span className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-4 py-2 rounded-xl font-bold text-sm">
{translations[lang].popular}
</span>

</div>

<p className="text-gray-400 text-xl leading-relaxed mb-10">
{translations[lang].assemblyServiceText}
</p>

<button
onClick={() => navigate("/assembly")}
className="w-12 h-12 rounded-full bg-blue-700 text-white text-2xl hover:scale-110 transition"
>
→
</button>

</div>

{/* Card 3 */}
<div className="bg-white/5 text-white border border-white/10 backdrop-blur-xl rounded-[36px] p-8 hover:-translate-y-2 transition duration-300 shadow-2xl">

<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-xl flex items-center justify-center">
<Trash2 size={28} className="text-blue-400" />
</div>

<div className="flex flex-wrap items-center gap-3 mb-6">

<h3 className="text-3xl font-black">
{translations[lang].disposalService}
</h3>

<span className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-4 py-2 rounded-xl font-bold text-sm">
{translations[lang].popular}
</span>

</div>

<p className="text-gray-400 text-xl leading-relaxed mb-10">
{translations[lang].disposalServiceText}
</p>

<button
onClick={() => navigate("/furniture")}
className="w-12 h-12 rounded-full bg-blue-700 text-white text-2xl hover:scale-110 transition"
>
→
</button>

</div>

{/* Card 4 */}
<div className="bg-white/5 text-white border border-white/10 backdrop-blur-xl rounded-[36px] p-8 hover:-translate-y-2 transition duration-300 shadow-2xl">

<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-xl flex items-center justify-center">
<ShieldCheck size={28} className="text-blue-400" />
</div>

<div className="flex flex-wrap items-center gap-3 mb-6">

<h3 className="text-3xl font-black">
{translations[lang].insuranceService}
</h3>

<span className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-4 py-2 rounded-xl font-bold text-sm">
{translations[lang].popular}
</span>

</div>

<p className="text-gray-400 text-xl leading-relaxed mb-10">
{translations[lang].insuranceServiceText}
</p>

<button
onClick={() => navigate("/insurance")}
className="w-12 h-12 rounded-full bg-blue-700 text-white text-2xl hover:scale-110 transition"
>
→
</button>

</div>

</div>


</section>

<section id="included" className="pb-24">

<div className="grid lg:grid-cols-2 gap-16 items-start">

{/* LEFT */}
<div>

<p className="text-blue-400 font-medium mb-4">
PANTHROMOVING
</p>

<h2 className="text-6xl font-black mb-8 leading-tight">
{translations[lang].includedTitle}
</h2>

<p className="text-gray-400 text-xl leading-relaxed mb-6">
{translations[lang].includedText1}
</p>

<p className="text-gray-400 text-xl leading-relaxed mb-6">
{translations[lang].includedText2}
</p>

<p className="text-gray-400 text-xl leading-relaxed mb-10">
{translations[lang].includedText3}
</p>

<button
onClick={() => navigate("/quote")}
className="bg-gradient-to-r from-pink-500 to-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition"
>
{translations[lang].freeQuote}
</button>

</div>

{/* RIGHT */}
<div className="space-y-5">

{/* ITEM 1 */}
<div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">

<button
onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
className="w-full flex items-center justify-between p-6 text-left"
>

<div>

<h3 className="text-2xl font-bold">
{translations[lang].customPacking}
</h3>

</div>

<div className="text-3xl">
{openFaq === 0 ? "−" : "+"}
</div>

</button>

{openFaq === 0 && (

<div className="px-8 pb-8">

<ul className="space-y-4 text-gray-400 text-lg">

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq1}
</li>
<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq2}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq3}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq4}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq5}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq6}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq7}
</li>

</ul>

</div>

)}

</div>

{/* ITEM 2 */}
<div className="bg-white/5 border border-white/10 rounded-3xl">

<button
onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
className="w-full flex items-center justify-between p-6 text-left"
>

<h3 className="text-2xl font-bold">
{translations[lang].boxesNeed}
</h3>

<div className="text-3xl">
{openFaq === 1 ? "−" : "+"}
</div>

</button>

{openFaq === 1 && (

<div className="px-8 pb-8">

<ul className="space-y-4 text-gray-400 text-lg">

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq8}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq9}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq10}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq11}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq12}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq13}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq14}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq15}
</li>

</ul>

</div>

)}

</div>

{/* ITEM 3 */}
<div className="bg-white/5 border border-white/10 rounded-3xl">

<button
onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
className="w-full flex items-center justify-between p-6 text-left"
>

<h3 className="text-2xl font-bold">
{translations[lang].assemblyTitle}
</h3>

<div className="text-3xl">
{openFaq === 2 ? "−" : "+"}
</div>

</button>

{openFaq === 2 && (

<div className="px-6 pb-6">

<ul className="space-y-3 text-gray-400 text-lg">

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq16}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq17}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq18}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq19}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq20}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq21}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq22}
</li>

</ul>

</div>

)}

</div>

{/* ITEM 4 */}
<div className="bg-white/5 border border-white/10 rounded-3xl">

<button
onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
className="w-full flex items-center justify-between p-6 text-left"
>

<h3 className="text-2xl font-bold">
{translations[lang].materialsTitle}
</h3>

<div className="text-3xl">
{openFaq === 3 ? "−" : "+"}
</div>

</button>

{openFaq === 3 && (

<div className="px-6 pb-6">

<ul className="space-y-3 text-gray-400 text-lg">

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq23}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq24}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq25}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq26}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq27}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq28}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq29}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq30}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq31}
</li>

</ul>

</div>

)}

</div>

{/* ITEM 5 */}
<div className="bg-white/5 border border-white/10 rounded-3xl">

<button
onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition"
>

<h3 className="text-2xl font-bold">
{translations[lang].cratingTitle}
</h3>

<div className="text-3xl">
{openFaq === 4 ? "−" : "+"}
</div>

</button>

{openFaq === 4 && (

<div className="px-6 pb-6">

<ul className="space-y-3 text-gray-400 text-lg">

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq32}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq33}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq34}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq35}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq36}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq37}
</li>

<li className="flex items-center gap-3">
  <FaCheckCircle className="text-green-400" />
  {translations[lang].faq38}
</li>

</ul>

</div>

)}

</div>

</div>

</div>

</section>

          {/* Fleet */}

          <section id="fleet" className="pb-24">

<div className="text-center mb-20">

  <p className="text-blue-400 font-medium mb-4">
  {translations[lang].fleetText}
  </p>

  <h2 className="text-5xl font-bold">
  {translations[lang].fleetTitle}
  </h2>

</div>

<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

  {/* Truck 1 */}
  <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:-translate-y-2 hover:scale-[1.03] transition duration-300 backdrop-blur-xl">

    <img
      src="https://images.openai.com/static-rsc-4/fFEcfEEuBx9kuKntZdTLowgcNsZ6aAwraRHJDdjdl18ma3arEyfU_DbDT0TzQEbOKRslqszbt-024Se_KV2wnyz_0llhwXMhElK_f0tanAiOzUWnytBBbBKC0BW2_fNfq1npblxJ2BF7n3s6C2L6IqIylFZLBHXPqMW_pCRZvm9kSV1yExBSIGLTVEZ09MOv?purpose=fullsize"
      alt="Moving Service"
      className="h-72 w-full object-cover"
    />

    <div className="p-8">

      <h3 className="text-2xl font-bold mb-4">
      {translations[lang].truck1}
      </h3>

      <p className="text-gray-400 mb-6">
      {translations[lang].truck1Text}
      </p>

      <div className="flex justify-between text-gray-300 mb-8">
        <span>12m³</span>
        <span>{translations[lang].upto2}</span>
      </div>

      <button
  onClick={() => {
    setTruck("City Moving Van")
    navigate("/quote")
  }}
  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-2xl font-semibold hover:scale-105 transition"
>
      {translations[lang].orderTruck}
      </button>

    </div>

  </div>

  {/* Truck 2 */}
  <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:-translate-y-2 hover:scale-[1.03] transition duration-300 backdrop-blur-xl">

    <img
      src="https://images.openai.com/static-rsc-4/ctMdBouCd_cvx0JkXnXTlAQ9jz-x-x2915TNO7OEC3w1uYKhSsmpA9eXpWrmbK2hWZuUAAAESQN4YiUubjW80CjrsnGyI238FVrH8nEAzbbFC3oAubVKcy49jepHictBa_6X8hNBmcN4tTh0UXr8Bq6SlKsipHp443IYxe2fPF4?purpose=inline"
      alt="Moving Service"
      className="h-72 w-full object-cover"
    />

    <div className="p-8">

      <h3 className="text-2xl font-bold mb-4">
      {translations[lang].truck2}
      </h3>

      <p className="text-gray-400 mb-6">
      {translations[lang].truck2Text}
      </p>

      <div className="flex justify-between text-gray-300 mb-8">
        <span>18m³</span>
        <span>{translations[lang].upto3}</span>
      </div>

      <button
  onClick={() => {
    setTruck("Business Cargo Van")
    navigate("/quote")
  }}
  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-2xl font-semibold hover:scale-105 transition"
>
      {translations[lang].orderTruck}
      </button>

    </div>

  </div>

  {/* Truck 3 */}
  <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:-translate-y-2 hover:scale-[1.03] transition duration-300 backdrop-blur-xl">

    <img
      src="https://images.openai.com/static-rsc-4/30KRSfyrOm1CTVVVgThQ0eWug96y7cdy3Ej3MbWiPWBLj7aG7YPwfQL-2bbC17azRajJ2lqziKwRrSV_KWeuuptVnOf6p_jcgGNVLjsuXMpWeKVLxhNJ0FZdHL2qaLKUVzbfMuN3z43GbFntFEUL6iCs4TdF7n5oQv27bL94dQHRyE-DhKiLAxGaAHjO5T-D?purpose=fullsize"
      alt="Moving Service"
      className="h-72 w-full object-cover"
    />

    <div className="p-8">

      <h3 className="text-2xl font-bold mb-4">
      {translations[lang].truck3}
      </h3>

      <p className="text-gray-400 mb-6">
      {translations[lang].truck3Text}
      </p>

      <div className="flex justify-between text-gray-300 mb-8">
        <span>8m³</span>
        <span>{translations[lang].upto1}</span>
      </div>

      <button
  onClick={() => {
    setTruck("Mini Truck")
    navigate("/quote")
  }}
  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-2xl font-semibold hover:scale-105 transition"
>
      {translations[lang].orderTruck}
      </button>

    </div>

  </div>

    {/* Truck 4 */}
    <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:-translate-y-2 hover:scale-[1.03] transition duration-300 backdrop-blur-xl">

<img
  src="https://images.openai.com/static-rsc-4/30KRSfyrOm1CTVVVgThQ0eWug96y7cdy3Ej3MbWiPWBLj7aG7YPwfQL-2bbC17azRajJ2lqziKwRrSV_KWeuuptVnOf6p_jcgGNVLjsuXMpWeKVLxhNJ0FZdHL2qaLKUVzbfMuN3z43GbFntFEUL6iCs4TdF7n5oQv27bL94dQHRyE-DhKiLAxGaAHjO5T-D?purpose=fullsize"
  alt="Moving Service"
  className="h-72 w-full object-cover"
/>

<div className="p-8">

  <h3 className="text-2xl font-bold mb-4">
  {translations[lang].truck4}
  </h3>

  <p className="text-gray-400 mb-6">
  {translations[lang].truck4Text}
  </p>

  <div className="flex justify-between text-gray-300 mb-8">
    <span>8m³</span>
    <span>{translations[lang].upto1}</span>
  </div>

  <button
onClick={() => {
  setTruck("Piano Moving")
  navigate("/quote")
}}
className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-2xl font-semibold hover:scale-105 transition"
>
  {translations[lang].orderTruck}
  </button>

</div>

</div>

</div>

</section>

{/* Process */}

<section id="process" className="pb-24">

  <div className="text-center mb-20">

    <p className="text-blue-400 font-medium mb-4">
    {translations[lang].processText}
    </p>

    <h2 className="text-5xl font-bold">
    {translations[lang].processTitle}
    </h2>

  </div>

  <div className="grid lg:grid-cols-4 gap-8">

    {[
      translations[lang].step1,
      translations[lang].step2,
      translations[lang].step3,
      translations[lang].step4,
    ].map((step, index) => (

      <div
        key={index}
        className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center"
      >

        <div className="text-6xl font-black text-blue-500 mb-6">
          0{index + 1}
        </div>

        <h3 className="text-2xl font-bold">
          {step}
        </h3>

      </div>

    ))}

  </div>

</section>

<section id="whyus" className="pb-16">

<div className="max-w-5xl mx-auto">

<p className="text-blue-400 font-medium mb-6">
PANTHROMOVING
</p>

<h2 className="text-4xl md:text-6xl font-black leading-tight mb-6 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
{translations[lang].whyTitleNew}
</h2>

<p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6 max-w-4xl">
{translations[lang].whyTextNew}
</p>

<ol className="space-y-4 text-lg md:text-xl text-gray-300 mb-12">

<li className="flex gap-4">
<span className="text-blue-400 font-bold">
1.
</span>
{translations[lang].reason1}
</li>

<li className="flex gap-4">
<span className="text-blue-400 font-bold">
2.
</span>
{translations[lang].reason2}
</li>

<li className="flex gap-4">
<span className="text-blue-400 font-bold">
3.
</span>
{translations[lang].reason3}
</li>

<li className="flex gap-4">
<span className="text-blue-400 font-bold">
4.
</span>
{translations[lang].reason4}
</li>

<li className="flex gap-4">
<span className="text-blue-400 font-bold">
5.
</span>
{translations[lang].reason5}
</li>

<li className="flex gap-4">
<span className="text-blue-400 font-bold">
6.
</span>
{translations[lang].reason6}
</li>

<li className="flex gap-4">
<span className="text-blue-400 font-bold">
7.
</span>
{translations[lang].reason7}
</li>

</ol>

<button
onClick={() => navigate("/quote")}
className="bg-gradient-to-r from-pink-500 to-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition"
>
{translations[lang].freeQuote}
</button>

</div>

</section>

<section id="contacts" className="pb-24">

<div className="text-center mb-16">

<p className="text-blue-400 font-medium mb-4">
{translations[lang].contactText}
</p>

<h2 className="text-5xl font-black">
{translations[lang].contactTitle}
</h2>

</div>

<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

{/* CALL */}
<div className="bg-white/5 border border-white/10 rounded-[28px] p-7 backdrop-blur-xl hover:-translate-y-2 transition flex flex-col h-full">

<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-xl flex items-center justify-center mb-5">
<Phone size={28} className="text-blue-400" />
</div>

<p className="bg-blue-500/10 text-blue-400 border border-blue-500/20 inline-block px-4 py-2 rounded-xl font-bold text-sm mb-5">
{translations[lang].quickCallback}
</p>

<h3 className="text-2xl font-black leading-tight mb-3">
{translations[lang].talkHuman}
</h3>

<p className="text-gray-400 leading-relaxed min-h-[96px] mb-6">
{translations[lang].talkHumanText}
</p>

<button
onClick={() => {
localStorage.setItem("contactMethod", "call")
navigate("/quote")
}}
className="w-full mt-auto bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-2xl font-bold hover:scale-[1.02] transition"
>
{translations[lang].callNow}
</button>

</div>

{/* VIDEO */}
<div className="bg-white/5 border border-white/10 rounded-[28px] p-7 backdrop-blur-xl hover:-translate-y-2 transition flex flex-col h-full">

<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-xl flex items-center justify-center mb-5">
<Video size={28} className="text-blue-400" />
</div>

<p className="bg-blue-500/10 text-blue-400 border border-blue-500/20 inline-block px-4 py-2 rounded-xl font-bold text-sm mb-5">
{translations[lang].videoWalk}
</p>

<h3 className="text-2xl font-black leading-tight mb-3">
{translations[lang].showCamera}
</h3>

<p className="text-gray-400 leading-relaxed min-h-[96px] mb-6">
{translations[lang].showCameraText}
</p>

<button
onClick={() => {
localStorage.setItem("contactMethod", "video")
navigate("/quote")
}}
className="w-full mt-auto bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-2xl font-bold hover:scale-[1.02] transition"
>
{translations[lang].startVideo}
</button>

</div>

{/* TEXT */}
<div className="bg-white/5 border border-white/10 rounded-[28px] p-7 backdrop-blur-xl hover:-translate-y-2 transition flex flex-col h-full">

<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-xl flex items-center justify-center mb-5">
<MessageCircle size={28} className="text-blue-400" />
</div>

<p className="bg-blue-500/10 text-blue-400 border border-blue-500/20 inline-block px-4 py-2 rounded-xl font-bold text-sm mb-5">
{translations[lang].textMessage}
</p>

<h3 className="text-2xl font-black leading-tight mb-3">
{translations[lang].textDetails}
</h3>

<p className="text-gray-400 leading-relaxed min-h-[96px] mb-6">
{translations[lang].textDetailsText}
</p>

<button
onClick={() => {
localStorage.setItem("contactMethod", "text")
navigate("/quote")
}}
className="w-full mt-auto bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-2xl font-bold hover:scale-[1.02] transition"
>
{translations[lang].sendMessageNow}
</button>

</div>

{/* ONSITE */}
<div className="bg-white/5 border border-white/10 rounded-[28px] p-7 backdrop-blur-xl hover:-translate-y-2 transition flex flex-col h-full">

<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-xl flex items-center justify-center mb-5">
<House size={28} className="text-blue-400" />
</div>

<p className="bg-blue-500/10 text-blue-400 border border-blue-500/20 inline-block px-4 py-2 rounded-xl font-bold text-sm mb-5">
{translations[lang].onsiteTitle}
</p>

<h3 className="text-2xl font-black leading-tight mb-3">
{translations[lang].onsiteTitle}
</h3>

<p className="text-gray-400 leading-relaxed min-h-[96px] mb-6">
{translations[lang].onsiteText}
</p>

<button
onClick={() => {
localStorage.setItem("contactMethod", "onsite")
navigate("/quote")
}}
className="w-full mt-auto bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-2xl font-bold hover:scale-[1.02] transition"
>
{translations[lang].requestVisit}
</button>

</div>

</div>

</section>


{/* CTA */}

<section id="quote" className="pb-24">

  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 rounded-[40px] p-16 text-center">

  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
    {translations[lang].ctaTitle}
    </h2>

    <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
    {translations[lang].ctaText}
    </p>

    <button
  onClick={() => navigate("/quote")}
  className="bg-gradient-to-r from-blue-500 to-purple-500 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition"
>
{translations[lang].contactUs}
</button>

  </div>

</section>


<footer className="border-t border-white/10 mt-24 pt-20 pb-10">

<div className="grid md:grid-cols-4 gap-12 mb-16">

{/* BRAND */}
<div>

<h2 className="text-3xl font-black mb-5">
Panthromoving
</h2>

<p className="text-gray-400 leading-relaxed mb-6">
{translations[lang].footerText}
</p>

<div className="flex gap-4">

<a
href="https://wa.me/77477165529"
target="_blank"
rel="noopener noreferrer"
className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500 transition"
>
<FaWhatsapp />
</a>

<a
href="https://instagram.com"
target="_blank"
rel="noopener noreferrer"
className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 transition"
>
<FaInstagram />
</a>

<a
href="tel:+16672278199"
className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 transition"
>
<FaPhone />
</a>

</div>

</div>

{/* COMPANY */}
<div>

<h3 className="text-xl font-bold mb-5">
{translations[lang].company}
</h3>

<div className="flex flex-col gap-4 text-gray-400">

<a href="/#services" className="hover:text-white transition">
{translations[lang].footerSolutions}
</a>

<a href="/#included" className="hover:text-white transition">
{translations[lang].footerIncluded}
</a>

<a href="/#fleet" className="hover:text-white transition">
{translations[lang].footerTypes}
</a>

<a href="/#whyus" className="hover:text-white transition">
{translations[lang].footerWhy}
</a>

</div>

</div>

{/* CONTACT */}
<div>

<h3 className="text-xl font-bold mb-5">
{translations[lang].footerContact}
</h3>

<div className="flex flex-col gap-4 text-gray-400">

<a href="tel:+177477165529" className="hover:text-white transition">
+1(667)2278199
</a>

<a href="mailto:info@panthromoving.com" className="hover:text-white transition">
info@panthromoving.com
</a>

<p>
United States
</p>

</div>

</div>

{/* CTA */}
<div>

<h3 className="text-xl font-bold mb-5">
{translations[lang].footerHelp}
</h3>

<p className="text-gray-400 mb-6 leading-relaxed">
{translations[lang].footerHelpText}
</p>

<button
onClick={() => navigate("/quote")}
className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4 rounded-2xl font-bold hover:scale-105 transition"
>
{translations[lang].freeQuote}
</button>

</div>

</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">

<p>
© 2026 Panthromoving. {translations[lang].rights}
</p>

<div className="flex gap-6">

<a href="/privacy" className="hover:text-white transition">
{translations[lang].privacy}
</a>

<a href="/terms" className="hover:text-white transition">
{translations[lang].terms}
</a>

</div>

</div>

</footer>

      </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      <a
  href="tel:+177477165529"
  className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-110 transition"
>
  <FaPhone />
</a>

  <a
    href="https://wa.me/+16672278199"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-110 transition"
  >
    <FaWhatsapp />
  </a>

  <a
    href="https://www.instagram.com/panthro_moving?igsh=YjNhOWptMW83cXJi"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-pink-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:scale-110 transition"
  >
    <FaInstagram />
  </a>

</div>

{
  showTop && (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-6 left-6 z-50 bg-white/10 backdrop-blur-xl border border-white/10 w-12 h-12 rounded-full flex items-center justify-center text-white text-lg hover:scale-110 transition"
    >
      <FaArrowUp />
    </button>
  )
}

</motion.div>
      }
    />

    <Route path="/quote" element={<Quote />} />

  </Routes>
    
  )
}
