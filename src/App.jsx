import { motion, useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Lenis from "lenis"
import { FaWhatsapp, FaInstagram } from "react-icons/fa"
import { FaArrowUp } from "react-icons/fa"
export default function App() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const browserLang = navigator.language.slice(0, 2)

const defaultLang =
  browserLang === "ru"
    ? "ru"
    : browserLang === "kk"
    ? "kz"
    : "en"

const [lang, setLang] = useState(
  localStorage.getItem("lang") || defaultLang
)
  const [name, setName] = useState("")
const [phone, setPhone] = useState("")
const [pickup, setPickup] = useState("")
const [destination, setDestination] = useState("")
const [date, setDate] = useState("")
const [notes, setNotes] = useState("")
const [truck, setTruck] = useState("")
const statsRef = useRef(null)

const isInView = useInView(statsRef, {
  once: true,
})
const translations = {

  en: {
    home: "Home",
    services: "Services",
    fleet: "Fleet",
    whyus: "Why Us",
    contact: "Contact",
    hero: "Premium Moving Services",
    subtitle:
  "Fast, secure and professional moving services across the USA.",
    quote: "Get Started",
    learn: "Learn More",
    order: "Order Now",
    clients: "Clients",
support: "Support",
trucks: "Trucks",
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

truck1: "City Moving Van",
truck2: "Business Cargo Van",
truck3: "Mini Truck",

truck1Text: "Perfect for apartment moving",
truck2Text: "Great for office relocation",
truck3Text: "Fast city cargo transportation",
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
support24: "24/7 Support",

fastText:
  "Quick and efficient moving with on-time transportation.",

safeText:
  "Your cargo is protected and handled professionally.",

supportText:
  "We are always available for urgent transportation.",

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
  },

  ru: {
    home: "Главная",
    services: "Услуги",
    fleet: "Автопарк",
    whyus: "Почему мы",
    contact: "Контакты",
    hero: "Премиальные услуги переезда",
    subtitle:
  "Быстрые, безопасные и профессиональные услуги переезда по США.",
    quote: "Начать",
    learn: "Подробнее",
    order: "Заказать",
    clients: "Клиентов",
support: "Поддержка",
trucks: "Грузовиков",
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

truck1: "Городской фургон",
truck2: "Грузовой фургон",
truck3: "Мини грузовик",

truck1Text: "Идеально для квартирного переезда",
truck2Text: "Отлично подходит для офисного переезда",
truck3Text: "Быстрая городская грузоперевозка",
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
support24: "Поддержка 24/7",

fastText:
  "Быстрый и эффективный переезд с доставкой вовремя.",

safeText:
  "Ваш груз защищён и перевозится профессионально.",

supportText:
  "Мы всегда доступны для срочных перевозок.",

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

  const end = 1000

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

    const TOKEN = "8809178619:AAEj0e5SUU06qFtb8skqLtBHqbfwBNu-WAA"
    const CHAT_ID = "5594857511"
  
    const message = `
🚚 New Moving Request

👤 Name: ${name}
📞 Phone: ${phone}

📍 Pickup: ${pickup}
🏁 Destination: ${destination}

🚛 Truck: ${truck}
📅 Date: ${date}

📝 Notes:
${notes}
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
  
    alert("Request sent!")
  
    setName("")
    setPhone("")
    setOpen(false)
  }

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    })
  }
  return (
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

            <a href="#fleet" className="hover:text-white transition">
            {translations[lang].fleet}
</a>

<a href="#whyus" className="hover:text-white transition">
{translations[lang].whyus}
</a>

<a href="#contact" className="hover:text-white transition">
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
  onClick={() => setOpen(true)}
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
          href="#contact"
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
  onClick={() => setOpen(true)}
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
    24/7
                </h3>

                <p className="text-gray-400 mt-2">
                {translations[lang].support}
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">
                  15+
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
              alt=""
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
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-3 hover:rotate-1 hover:scale-105 transition duration-300">

  <div className="text-5xl mb-6">
    🚚
  </div>

  <h3 className="text-2xl font-bold mb-4">
  {translations[lang].apartment}
  </h3>

  <p className="text-gray-400 leading-relaxed">
  {translations[lang].apartmentText}
  </p>

</div>

{/* Card 2 */}
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-3 hover:rotate-1 hover:scale-105 transition duration-300">

  <div className="text-5xl mb-6">
    🏢
  </div>

  <h3 className="text-2xl font-bold mb-4">
  {translations[lang].office}
  </h3>

  <p className="text-gray-400 leading-relaxed">
  {translations[lang].officeText}
  </p>

</div>

{/* Card 3 */}
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-3 hover:rotate-1 hover:scale-105 transition duration-300">

  <div className="text-5xl mb-6">
    📦
  </div>

  <h3 className="text-2xl font-bold mb-4">
  {translations[lang].packing}
  </h3>

  <p className="text-gray-400 leading-relaxed">
  {translations[lang].packingText}
  </p>

</div>

{/* Card 4 */}
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-3 hover:rotate-1 hover:scale-105 transition duration-300">

  <div className="text-5xl mb-6">
    ⚡
  </div>

  <h3 className="text-2xl font-bold mb-4">
  {translations[lang].delivery}
  </h3>

  <p className="text-gray-400 leading-relaxed">
  {translations[lang].deliveryText}
  </p>

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

<div className="grid lg:grid-cols-3 gap-8">

  {/* Truck 1 */}
  <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-300">

    <img
      src="https://images.openai.com/static-rsc-4/fFEcfEEuBx9kuKntZdTLowgcNsZ6aAwraRHJDdjdl18ma3arEyfU_DbDT0TzQEbOKRslqszbt-024Se_KV2wnyz_0llhwXMhElK_f0tanAiOzUWnytBBbBKC0BW2_fNfq1npblxJ2BF7n3s6C2L6IqIylFZLBHXPqMW_pCRZvm9kSV1yExBSIGLTVEZ09MOv?purpose=fullsize"
      alt=""
      className="h-64 w-full object-cover"
    />

    <div className="p-8">

      <h3 className="text-3xl font-bold mb-4">
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
    setOpen(true)
  }}
  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-4 rounded-2xl font-semibold hover:scale-105 transition"
>
      {translations[lang].orderTruck}
      </button>

    </div>

  </div>

  {/* Truck 2 */}
  <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-300">

    <img
      src="https://images.openai.com/static-rsc-4/ctMdBouCd_cvx0JkXnXTlAQ9jz-x-x2915TNO7OEC3w1uYKhSsmpA9eXpWrmbK2hWZuUAAAESQN4YiUubjW80CjrsnGyI238FVrH8nEAzbbFC3oAubVKcy49jepHictBa_6X8hNBmcN4tTh0UXr8Bq6SlKsipHp443IYxe2fPF4?purpose=inline"
      alt=""
      className="h-64 w-full object-cover"
    />

    <div className="p-8">

      <h3 className="text-3xl font-bold mb-4">
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
    setOpen(true)
  }}
  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-4 rounded-2xl font-semibold hover:scale-105 transition"
>
      {translations[lang].orderTruck}
      </button>

    </div>

  </div>

  {/* Truck 3 */}
  <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-300">

    <img
      src="https://images.openai.com/static-rsc-4/30KRSfyrOm1CTVVVgThQ0eWug96y7cdy3Ej3MbWiPWBLj7aG7YPwfQL-2bbC17azRajJ2lqziKwRrSV_KWeuuptVnOf6p_jcgGNVLjsuXMpWeKVLxhNJ0FZdHL2qaLKUVzbfMuN3z43GbFntFEUL6iCs4TdF7n5oQv27bL94dQHRyE-DhKiLAxGaAHjO5T-D?purpose=fullsize"
      alt=""
      className="h-64 w-full object-cover"
    />

    <div className="p-8">

      <h3 className="text-3xl font-bold mb-4">
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
    setOpen(true)
  }}
  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-4 rounded-2xl font-semibold hover:scale-105 transition"
>
      {translations[lang].orderTruck}
      </button>

    </div>

  </div>

</div>

</section>

{/* Process */}

<section className="pb-24">

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

{/* Why Choose Us */}

<section id="whyus" className="pb-24">

  <div className="text-center mb-20">

    <p className="text-blue-400 font-medium mb-4">
    {translations[lang].whyText}
    </p>

    <h2 className="text-5xl font-bold">
    {translations[lang].whyTitle}
    </h2>

  </div>

  <div className="grid lg:grid-cols-3 gap-8">

    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:scale-105 transition">

      <div className="text-5xl mb-6">
        ⚡
      </div>

      <h3 className="text-3xl font-bold mb-4">
      {translations[lang].fast}
      </h3>

      <p className="text-gray-400 leading-relaxed">
      {translations[lang].fastText}
      </p>

    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:scale-105 transition">

      <div className="text-5xl mb-6">
        🛡️
      </div>

      <h3 className="text-3xl font-bold mb-4">
      {translations[lang].safe}
      </h3>

      <p className="text-gray-400 leading-relaxed">
      {translations[lang].safeText}
      </p>

    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:scale-105 transition">

      <div className="text-5xl mb-6">
        📞
      </div>

      <h3 className="text-3xl font-bold mb-4">
      {translations[lang].support24}
      </h3>

      <p className="text-gray-400 leading-relaxed">
      {translations[lang].supportText}
      </p>

    </div>

  </div>

</section>

{/* CTA */}

<section id="contact" className="pb-24">

  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 rounded-[40px] p-16 text-center">

  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
    {translations[lang].ctaTitle}
    </h2>

    <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
    {translations[lang].ctaText}
    </p>

    <button
  onClick={() => setOpen(true)}
  className="bg-gradient-to-r from-blue-500 to-purple-500 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition"
>
{translations[lang].contactUs}
</button>

  </div>

</section>




<footer className="border-t border-white/10 py-10 text-center text-gray-400">
© 2026 Panthromoving. {translations[lang].rights}
</footer>

{
  open && (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">

      <div className="bg-[#111] border border-white/10 rounded-3xl p-10 w-full max-w-md relative">

        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-4xl font-bold mb-4">
        {translations[lang].modalTitle}
        </h2>

        <p className="text-gray-400 mb-8">
        {translations[lang].modalText}
        </p>

        <div className="space-y-4">

        <input
  type="text"
  placeholder={translations[lang].yourName}
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
/>

<input
  type="text"
  placeholder={translations[lang].phoneNumber}
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
/>

<input
  type="text"
  placeholder={translations[lang].pickup}
  value={pickup}
  onChange={(e) => setPickup(e.target.value)}
  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
/>

<input
  type="text"
  placeholder={translations[lang].destination}
  value={destination}
  onChange={(e) => setDestination(e.target.value)}
  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
/>

<input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
/>

<select
  value={truck}
  onChange={(e) => setTruck(e.target.value)}
  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
>
  <option value="">
    {translations[lang].selectTruck}
  </option>

  <option>
    {translations[lang].truck1}
  </option>

  <option>
    {translations[lang].truck2}
  </option>

  <option>
    {translations[lang].truck3}
  </option>

</select>

<textarea
  placeholder={translations[lang].notes}
  value={notes}
  onChange={(e) => setNotes(e.target.value)}
  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none h-20 resize-none"
/>

<button
  onClick={sendTelegram}
  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-4 rounded-2xl font-bold hover:scale-105 transition"
>
{translations[lang].sendRequest}
</button>



        </div>

      </div>

    </div>
  )
}
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

  <a
    href="https://wa.me/77477165529"
    target="_blank"
    className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-110 transition"
  >
    <FaWhatsapp />
  </a>

  <a
    href="https://www.instagram.com/panthro_moving?igsh=YjNhOWptMW83cXJi"
    target="_blank"
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
    
  )
}
