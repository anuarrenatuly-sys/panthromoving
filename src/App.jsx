import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Lenis from "lenis"
export default function App() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState("en")
  const [name, setName] = useState("")
const [phone, setPhone] = useState("")
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
  },

  kz: {
    home: "Басты бет",
    services: "Қызметтер",
    fleet: "Көліктер",
    whyus: "Неге біз",
    contact: "Байланыс",
    hero: "Премиум көшу қызметтері",
    subtitle:
  "АҚШ бойынша жылдам, қауіпсіз және кәсіби көшу қызметтері.",
    quote: "Бастау",
    learn: "Толығырақ",
  },

}

  useEffect(() => {

    let start = 0
  
    const end = 1000
  
    const duration = 2000
  
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
  
  }, [])
  
  useEffect(() => {
  
    const lenis = new Lenis({
      duration: 2,
      smoothWheel: true,
      smoothTouch: true,
    })
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  
  }, [])

  const sendTelegram = async () => {

    const TOKEN = "8809178619:AAEj0e5SUU06qFtb8skqLtBHqbfwBNu-WAA"
    const CHAT_ID = "5594857511"
  
    const message = `
  🚚 New Moving Request
  
  👤 Name: ${name}
  📞 Phone: ${phone}
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
    <div
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
    className="hover:text-blue-400 transition"
  >
    EN
  </button>

  <button
    onClick={() => setLang("ru")}
    className="hover:text-blue-400 transition"
  >
    RU
  </button>

  <button
    onClick={() => setLang("kz")}
    className="hover:text-blue-400 transition"
  >
    KZ
  </button>

</div>

          <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-3xl"
>
  ☰
</button>

<button className="hidden md:block bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition">
            Order Now
          </button>

        </header>

        {
  menuOpen && (
    <div className="md:hidden fixed top-24 left-6 right-6 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 z-40">

      <div className="flex flex-col gap-6 text-xl">

        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="hover:text-blue-400 transition"
        >
          Home
        </a>

        <a
          href="#services"
          onClick={() => setMenuOpen(false)}
          className="hover:text-blue-400 transition"
        >
          Services
        </a>

        <a
          href="#fleet"
          onClick={() => setMenuOpen(false)}
          className="hover:text-blue-400 transition"
        >
          Fleet
        </a>

        <a
          href="#whyus"
          onClick={() => setMenuOpen(false)}
          className="hover:text-blue-400 transition"
        >
          Why Us
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="hover:text-blue-400 transition"
        >
          Contact
        </a>

      </div>

    </div>
  )
}

        {/* Hero Section */}
        <motion.section
        id="home"
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="grid lg:grid-cols-2 gap-16 items-center pt-40 pb-32"
>
          {/* Left */}
          <div>

            <p className="text-blue-400 font-medium mb-4">
              FAST & RELIABLE MOVING
            </p>

            <h2 className="text-6xl lg:text-7xl font-black leading-tight">
              Premium
              <br />
              Moving
              <br />
              Services
            </h2>

            <p className="mt-8 text-gray-400 text-lg max-w-xl leading-relaxed">
              Apartment moving, office relocation,
              cargo delivery and professional movers
              available 24/7.
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
            <div className="flex gap-12 mt-16">

              <div>
                <h3 className="text-4xl font-bold">
                {count.toLocaleString()}+
                </h3>

                <p className="text-gray-400 mt-2">
                  Clients
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">
                  24/7
                </h3>

                <p className="text-gray-400 mt-2">
                  Support
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">
                  15+
                </h3>

                <p className="text-gray-400 mt-2">
                  Trucks
                </p>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="relative">

            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="relative rounded-3xl shadow-2xl border border-white/10 floating"
            />

          </div>

          </motion.section>

        {/* Services */}

        <section id="services" className="pb-32">
        <div className="text-center mb-20">

<p className="text-blue-400 font-medium mb-4">
  OUR SERVICES
</p>

<h2 className="text-5xl font-bold">
  What We Offer
</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

{/* Card 1 */}
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-3 hover:rotate-1 hover:scale-105 transition duration-300">

  <div className="text-5xl mb-6">
    🚚
  </div>

  <h3 className="text-2xl font-bold mb-4">
    Apartment Moving
  </h3>

  <p className="text-gray-400 leading-relaxed">
    Fast and safe apartment relocation
    with professional movers.
  </p>

</div>

{/* Card 2 */}
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-3 hover:rotate-1 hover:scale-105 transition duration-300">

  <div className="text-5xl mb-6">
    🏢
  </div>

  <h3 className="text-2xl font-bold mb-4">
    Office Relocation
  </h3>

  <p className="text-gray-400 leading-relaxed">
    Complete office moving services
    for businesses.
  </p>

</div>

{/* Card 3 */}
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-3 hover:rotate-1 hover:scale-105 transition duration-300">

  <div className="text-5xl mb-6">
    📦
  </div>

  <h3 className="text-2xl font-bold mb-4">
    Packing
  </h3>

  <p className="text-gray-400 leading-relaxed">
    Professional packing materials
    and secure transportation.
  </p>

</div>

{/* Card 4 */}
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-3 hover:rotate-1 hover:scale-105 transition duration-300">

  <div className="text-5xl mb-6">
    ⚡
  </div>

  <h3 className="text-2xl font-bold mb-4">
    Express Delivery
  </h3>

  <p className="text-gray-400 leading-relaxed">
    Urgent cargo delivery available
    24 hours a day.
  </p>

</div>

</div>


</section>

          {/* Fleet */}

          <section id="fleet" className="pb-40">

<div className="text-center mb-20">

  <p className="text-blue-400 font-medium mb-4">
    OUR FLEET
  </p>

  <h2 className="text-5xl font-bold">
    Moving Vehicles
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
        Gazelle 3M
      </h3>

      <p className="text-gray-400 mb-6">
        Perfect for apartment moving
      </p>

      <div className="flex justify-between text-gray-300 mb-8">
        <span>12m³</span>
        <span>Up to 2 Tons</span>
      </div>

      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-4 rounded-2xl font-semibold hover:scale-105 transition">
        Order Truck
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
        Gazelle 4M
      </h3>

      <p className="text-gray-400 mb-6">
        Great for office relocation
      </p>

      <div className="flex justify-between text-gray-300 mb-8">
        <span>18m³</span>
        <span>Up to 3 Tons</span>
      </div>

      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-4 rounded-2xl font-semibold hover:scale-105 transition">
        Order Truck
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
        Mini Truck
      </h3>

      <p className="text-gray-400 mb-6">
        Fast city cargo transportation
      </p>

      <div className="flex justify-between text-gray-300 mb-8">
        <span>8m³</span>
        <span>Up to 1 Ton</span>
      </div>

      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-4 rounded-2xl font-semibold hover:scale-105 transition">
        Order Truck
      </button>

    </div>

  </div>

</div>

</section>

{/* Process */}

<section className="pb-40">

  <div className="text-center mb-20">

    <p className="text-blue-400 font-medium mb-4">
      HOW IT WORKS
    </p>

    <h2 className="text-5xl font-bold">
      Simple Moving Process
    </h2>

  </div>

  <div className="grid lg:grid-cols-4 gap-8">

    {[
      "Leave Request",
      "We Contact You",
      "Movers Arrive",
      "Safe Delivery",
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

<section id="whyus" className="pb-40">

  <div className="text-center mb-20">

    <p className="text-blue-400 font-medium mb-4">
      WHY CHOOSE US
    </p>

    <h2 className="text-5xl font-bold">
      Moving Made Simple
    </h2>

  </div>

  <div className="grid lg:grid-cols-3 gap-8">

    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:scale-105 transition">

      <div className="text-5xl mb-6">
        ⚡
      </div>

      <h3 className="text-3xl font-bold mb-4">
        Fast Delivery
      </h3>

      <p className="text-gray-400 leading-relaxed">
        Quick and efficient moving
        with on-time transportation.
      </p>

    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:scale-105 transition">

      <div className="text-5xl mb-6">
        🛡️
      </div>

      <h3 className="text-3xl font-bold mb-4">
        Safe Transport
      </h3>

      <p className="text-gray-400 leading-relaxed">
        Your cargo is protected and
        handled professionally.
      </p>

    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:scale-105 transition">

      <div className="text-5xl mb-6">
        📞
      </div>

      <h3 className="text-3xl font-bold mb-4">
        24/7 Support
      </h3>

      <p className="text-gray-400 leading-relaxed">
        We are always available
        for urgent transportation.
      </p>

    </div>

  </div>

</section>

{/* CTA */}

<section id="contact" className="pb-40">

  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 rounded-[40px] p-16 text-center">

    <h2 className="text-6xl font-black mb-6">
      Ready To Move?
    </h2>

    <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
      Book your moving service today
      and get professional transportation.
    </p>

    <button
  onClick={() => setOpen(true)}
  className="bg-gradient-to-r from-blue-500 to-purple-500 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition"
>
  Contact Us
</button>

  </div>

</section>




<footer className="border-t border-white/10 py-10 text-center text-gray-400">
© 2026 Panthromoving. All rights reserved.
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
          Contact Us
        </h2>

        <p className="text-gray-400 mb-8">
          Leave your request and we’ll call you back.
        </p>

        <div className="space-y-4">

        <input
  type="text"
  placeholder="Your Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
/>

<input
  type="text"
  placeholder="Phone Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
/>

<button
  onClick={sendTelegram}
  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-4 rounded-2xl font-bold hover:scale-105 transition"
>
  Send Request
</button>

        </div>

      </div>

    </div>
  )
}
<a
  href="https://wa.me/77759449730"
  target="_blank"
  className="fixed bottom-6 right-6 z-50 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-[0_0_40px_rgba(34,197,94,0.6)] hover:scale-110 transition"
>
  💬
</a>
      </div>

    </div>
    
  )
}
