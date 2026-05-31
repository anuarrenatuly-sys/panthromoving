import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa"

export default function Terms() {

  const navigate = useNavigate()

  const translations = {
    en: {
      home: "Home",
      services: "Solutions",
      included: "Included",
      fleet: "Moving Types",
      whyus: "Why Panthro",
      contact: "Contacts",

      termsTitle: "Terms of Service",

      termsText:
        "Please review our terms and conditions carefully.",

      terms1:
        "By using PanthroMoving services, you agree to comply with our terms and conditions.",

      terms2:
        "All moving estimates are based on the information provided by the customer.",

      terms3:
        "Additional charges may apply for extra services, delays or special handling requests.",

      terms4:
        "PanthroMoving is not responsible for damages caused by improperly packed customer-owned items.",

      terms5:
        "We reserve the right to update or modify these terms at any time without prior notice.",

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
    },

    ru: {
      home: "Главная",
      services: "Решения",
      included: "Что включено",
      fleet: "Типы переезда",
      whyus: "Почему Panthro",
      contact: "Контакты",

      termsTitle: "Условия использования",

      termsText:
        "Пожалуйста, внимательно ознакомьтесь с условиями использования.",

      terms1:
        "Используя услуги PanthroMoving, вы соглашаетесь соблюдать наши условия и правила.",

      terms2:
        "Все расчёты переезда основаны на информации, предоставленной клиентом.",

      terms3:
        "Дополнительные услуги, задержки или специальные запросы могут потребовать дополнительной оплаты.",

      terms4:
        "PanthroMoving не несёт ответственности за повреждения вещей, упакованных клиентом самостоятельно.",

      terms5:
        "Мы оставляем за собой право изменять условия использования без предварительного уведомления.",

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
    },
  }

  const [menuOpen, setMenuOpen] = useState(false)

  const [lang, setLang] = useState(
    localStorage.getItem("lang") || "en"
  )

  return (

    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">

<div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-500/25 blur-[180px] rounded-full animate-pulse"></div>

<div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-500/20 blur-[180px] rounded-full animate-pulse"></div>

<div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full animate-pulse"></div>

<div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-pink-500/10 blur-[160px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 w-full">

        {/* HEADER */}

        <header className="flex items-center justify-between py-4 px-6 fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-2xl border-b border-white/10">

          <h1
            onClick={() => navigate("/")}
            className="text-3xl font-bold tracking-wide cursor-pointer"
          >
            Panthromoving
          </h1>

          <nav className="hidden md:flex gap-8 text-gray-300">

            <a href="/#home" className="hover:text-white transition">
              {translations[lang].home}
            </a>

            <a href="/#services" className="hover:text-white transition">
              {translations[lang].services}
            </a>

            <a href="/#included" className="hover:text-white transition">
              {translations[lang].included}
            </a>

            <a href="/#fleet" className="hover:text-white transition">
              {translations[lang].fleet}
            </a>

            <a href="/#whyus" className="hover:text-white transition">
              {translations[lang].whyus}
            </a>

            <a href="/#contacts" className="hover:text-white transition">
              {translations[lang].contact}
            </a>

          </nav>

          <div className="hidden md:flex gap-3 text-sm">

            <button
              onClick={() => setLang("en")}
              className={`transition px-3 py-1 rounded-xl ${
                lang === "en"
                  ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                  : "hover:text-blue-400"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => setLang("ru")}
              className={`transition px-3 py-1 rounded-xl ${
                lang === "ru"
                  ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                  : "hover:text-blue-400"
              }`}
            >
              RU
            </button>

          </div>

          <div className="flex items-center gap-4">

            <div className="md:hidden flex gap-2">

              <button
                onClick={() => {
                  setLang("en")
                  localStorage.setItem("lang", "en")
                }}
                className={`px-3 py-1 rounded-xl text-sm transition ${
                  lang === "en"
                    ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                EN
              </button>

              <button
                onClick={() => {
                  setLang("ru")
                  localStorage.setItem("lang", "ru")
                }}
                className={`px-3 py-1 rounded-xl text-sm transition ${
                  lang === "ru"
                    ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                RU
              </button>

            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-3xl"
            >
              ☰
            </button>

          </div>

        </header>

        {/* MOBILE MENU */}

        {
          menuOpen && (

            <>

              <div
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 bg-black/40 z-30"
              />

              <div className="md:hidden fixed top-24 left-4 right-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 z-40">

                <div className="flex flex-col gap-6 text-xl">

                  <a href="/#home" className="hover:text-blue-400 transition">
                    {translations[lang].home}
                  </a>

                  <a href="/#services" className="hover:text-blue-400 transition">
                    {translations[lang].services}
                  </a>

                  <a href="/#included" className="hover:text-blue-400 transition">
                    {translations[lang].included}
                  </a>

                  <a href="/#fleet" className="hover:text-blue-400 transition">
                    {translations[lang].fleet}
                  </a>

                  <a href="/#whyus" className="hover:text-blue-400 transition">
                    {translations[lang].whyus}
                  </a>

                  <a href="/#contacts" className="hover:text-blue-400 transition">
                    {translations[lang].contact}
                  </a>

                </div>

              </div>

            </>

          )
        }

        {/* HERO */}

        <section className="pt-28 pb-10 text-center">

          <p className="text-blue-400 font-medium mb-4">
            PANTHROMOVING
          </p>

          <h1 className="text-4xl md:text-6xl font-black mb-6">
            {translations[lang].termsTitle}
          </h1>

          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            {translations[lang].termsText}
          </p>

        </section>

        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-14 backdrop-blur-2xl">

            <div className="space-y-8 text-gray-300 leading-relaxed text-lg">

              <p>{translations[lang].terms1}</p>

              <p>{translations[lang].terms2}</p>

              <p>{translations[lang].terms3}</p>

              <p>{translations[lang].terms4}</p>

              <p>{translations[lang].terms5}</p>

            </div>

          </div>

        </motion.div>

        {/* FOOTER */}

        <footer className="border-t border-white/10 mt-32 pt-24 pb-10">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-4 gap-12 mb-16 pt-16">

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
                    href="tel:+1(667)2278199"
                    className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 transition"
                  >
                    <FaPhone />
                  </a>

                </div>

              </div>

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

                <button
                  onClick={() => navigate("/privacy")}
                  className="hover:text-white transition"
                >
                  {translations[lang].privacy}
                </button>

                <button
                  onClick={() => navigate("/terms")}
                  className="hover:text-white transition"
                >
                  {translations[lang].terms}
                </button>

              </div>

            </div>

          </div>

        </footer>

      </div>

    </div>

  )
}