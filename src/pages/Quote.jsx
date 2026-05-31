import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { FaWhatsapp, FaInstagram, FaPhone, FaArrowUp } from "react-icons/fa"
import {
    Phone,
    Video,
    MessageCircle,
    House
    } from "lucide-react"

export default function Quote() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
    size: "",
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    message: "",
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    
    try {
    
    await emailjs.send(
    "service_940o23a",
    "template_7ovbooa",
    {
    name: `${form.firstName} ${form.lastName}`,
    phone: form.phone,
    email: form.email,
    moveType: form.size,
    contactMethod: contactMethod,
    details: `
    From: ${form.from}
    
    To: ${form.to}
    
    Date: ${form.date}
    
    Message:
    ${form.message}
    `,
    },
    "FyFhP5PC8-Uylg9-q"
    )
    
    alert(
    lang === "ru"
    ? "Заявка успешно отправлена!"
    : "Request sent successfully!"
    )
    
    } catch (error) {
    
    console.log(error)
    
    alert(
    lang === "ru"
    ? "Ошибка отправки"
    : "Failed to send request"
    )
    
    }
    
    }

  const translations = {
    en: {
      home: "Home",
      services: "Solutions",
      included: "Included",
      fleet: "Moving Types",
      whyus: "Why Panthro",
      contact: "Contacts",
      order: "Order Now",
      quoteTitle: "Get Your Moving Quote",
      quoteText:
        "Fill out the form below and our team will contact you shortly.",
        quoteMiniText:
  "We just need a few of your moving details.",

movingOut: "Moving out address *",
movingIn: "Moving in address *",

enterAddress: "Enter address",

moveDate: "Estimated move date *",

moveSize: "Move Size *",

pleaseSelect: "Please select",

studio: "Studio",
bedroom1: "1 Bedroom",
bedroom2: "2 Bedroom",
officeMove: "Office Move",
other: "Other",

aboutYou:
  "Let us know a little about you so we can customize your best moving experience.",

email: "Email *",
phone: "Phone *",

enterEmail: "Enter your email",
enterPhone: "Enter your number",

firstName: "First Name *",
lastName: "Last Name *",

yourFirstName: "Your first name",
yourLastName: "Your last name",

message: "Message",

messagePlaceholder:
  "Let us know if you have any additional requirements",

submitRequest: "Submit Request",
quoteMiniTitle: "Moving Information",
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
submitPolicy:
  'By pressing the "Submit" button, you agree to receive communications via email, phone, and/or text. This may include booking your move, updates, and offers. You also accept our',

submitPolicy2:
  "which explains how we protect your information. Standard messaging rates apply.",
  preferredContact: "Preferred Contact Method",

call: "Call",
video: "Video",
text: "Text",
onsite: "On Site",
preferredContact: "Preferred Contact Method",
    },
  
    ru: {
      home: "Главная",
      services: "Решения",
      included: "Что включено",
      fleet: "Типы переезда",
      whyus: "Почему Panthro",
      contact: "Контакты",
      order: "Заказать",
      quoteTitle: "Получить расчёт переезда",
      quoteText:
        "Заполните форму ниже и наша команда свяжется с вами.",
        quoteMiniText:
  "Нам понадобится несколько деталей вашего переезда.",

movingOut: "Адрес загрузки *",
movingIn: "Адрес выгрузки *",

enterAddress: "Введите адрес",

moveDate: "Дата переезда *",

moveSize: "Размер переезда *",

pleaseSelect: "Выберите",

studio: "Студия",
bedroom1: "1 спальня",
bedroom2: "2 спальни",
officeMove: "Офисный переезд",
other: "Другое",

aboutYou:
  "Расскажите немного о себе, чтобы мы могли подобрать лучший вариант переезда.",

email: "Email *",
phone: "Телефон *",

enterEmail: "Введите email",
enterPhone: "Введите номер",

firstName: "Имя *",
lastName: "Фамилия *",

yourFirstName: "Ваше имя",
yourLastName: "Ваша фамилия",

message: "Сообщение",

messagePlaceholder:
  "Сообщите дополнительные пожелания или требования",

submitRequest: "Отправить заявку",
quoteMiniTitle: "Информация о переезде",
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
submitPolicy:
  'Нажимая кнопку "Отправить", вы соглашаетесь получать сообщения по email, телефону и/или SMS. Это может включать бронирование переезда, обновления и специальные предложения. Вы также принимаете нашу',

submitPolicy2:
  "которая объясняет, как мы защищаем вашу информацию. Может взиматься стандартная плата за сообщения.",
  preferredContact: "Предпочитаемый способ связи",

call: "Звонок",
video: "Видео",
text: "Сообщение",
onsite: "На месте",
preferredContact: "Предпочитаемый способ связи",
    },
  }

  const [menuOpen, setMenuOpen] = useState(false)

const [lang, setLang] = useState(
  localStorage.getItem("lang") || "en"
)
const [contactMethod, setContactMethod] = useState(
    localStorage.getItem("contactMethod") || ""
    )
  return (

    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">

<div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-500/25 blur-[180px] rounded-full animate-pulse"></div>

<div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-500/20 blur-[180px] rounded-full animate-pulse"></div>

<div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full animate-pulse"></div>

<div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-pink-500/10 blur-[160px] rounded-full animate-pulse"></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full"></div>

<div className="relative z-10 w-full">

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

{
menuOpen && (

<>

<div
onClick={() => setMenuOpen(false)}
className="fixed inset-0 bg-black/40 z-30"
/>

<div className="md:hidden fixed top-20 left-4 right-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 z-40">

<div className="flex flex-col gap-6 text-xl">

    

<a
href="/#home"
onClick={() => setMenuOpen(false)}
className="hover:text-blue-400 transition"
>
{translations[lang].home}
</a>

<a
href="/#services"
onClick={() => setMenuOpen(false)}
className="hover:text-blue-400 transition"
>
{translations[lang].services}
</a>

<a
href="/#included"
onClick={() => setMenuOpen(false)}
className="hover:text-blue-400 transition"
>
{translations[lang].included}
</a>

<a
href="/#fleet"
onClick={() => setMenuOpen(false)}
className="hover:text-blue-400 transition"
>
{translations[lang].fleet}
</a>

<a
href="/#whyus"
onClick={() => setMenuOpen(false)}
className="hover:text-blue-400 transition"
>
{translations[lang].whyus}
</a>

<a
href="/#contacts"
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

<section className="pt-28 pb-10 text-center">

<p className="text-blue-400 font-medium mb-4">
PANTHROMOVING
</p>

<h1 className="text-4xl md:text-6xl font-black mb-6">
{translations[lang].quoteTitle}
</h1>

<p className="text-gray-400 text-xl max-w-2xl mx-auto">
{translations[lang].quoteText}
</p>

</section>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

<form onSubmit={handleSubmit}>

<div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-14 backdrop-blur-2xl">

<div className="mb-14">


<p className="text-blue-400 font-medium mb-4 tracking-widest uppercase text-sm">
PANTHROMOVING FORM
</p>

<h2 className="text-3xl md:text-4xl font-black mb-4">
{translations[lang].quoteMiniTitle}
</h2>

<p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
{translations[lang].quoteMiniText}
</p>

<div className="mb-12">

<h3 className="text-2xl font-black mb-8 mt-10">
{translations[lang].preferredContact}
</h3>

<div className="flex flex-wrap gap-3">

{[
{
    id: "call",
    label: "Call",
    icon: <Phone size={20} className="text-blue-400" />
    },
    
    {
    id: "video",
    label: "Video",
    icon: <Video size={20} className="text-blue-400" />
    },
    
    {
    id: "text",
    label: "Text",
    icon: <MessageCircle size={20} className="text-blue-400" />
    },
    
    {
    id: "onsite",
    label: "On Site",
    icon: <House size={20} className="text-blue-400" />
    },
].map((item) => (

<button
key={item.id}
type="button"
onClick={() => setContactMethod(item.id)}
className={`flex items-center gap-2 px-5 py-3 rounded-2xl border transition-all duration-300 ${
contactMethod === item.id
? "bg-blue-500/10 border-blue-500 text-white shadow-[0_0_25px_rgba(59,130,246,0.25)]"
: "bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
}`}
>

<span className="text-lg">
{item.icon}
</span>

<span className="font-medium">
{item.label}
</span>

</button>

))}

</div>

</div>

</div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Moving Out */}
            <div>
              <label className="block font-bold mb-3">
              {translations[lang].movingOut}
              </label>

              <input
                type="text"
                name="from"
                value={form.from}
                onChange={handleChange}
                placeholder={translations[lang].enterAddress}
                className="w-full bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-5 outline-none"
              />
            </div>

            {/* Moving In */}
            <div>
              <label className="block font-bold mb-3">
              {translations[lang].movingIn}
              </label>

              <input
                type="text"
                name="to"
                value={form.to}
                onChange={handleChange}
                placeholder={translations[lang].enterAddress}
                className="w-full bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-5 outline-none"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block font-bold mb-3">
              {translations[lang].moveDate}
              </label>

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-5 outline-none [color-scheme:dark]"
              />
            </div>

            {/* Move Size */}
            <div>
              <label className="block font-bold mb-3">
              {translations[lang].moveSize}
              </label>

              <select
                name="size"
                value={form.size}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-5 outline-none"
              >
                <option value="">
                {translations[lang].pleaseSelect}
                </option>

                <option>
                {translations[lang].studio}
                </option>

                <option>
                {translations[lang].bedroom1}
                </option>

                <option>
                {translations[lang].bedroom2}
                </option>

                <option>
                {translations[lang].officeMove}
                </option>

                <option>
                {translations[lang].other}
                </option>

              </select>
            </div>

          </div>

          <p className="text-gray-600 text-lg mt-14 mb-10 max-w-3xl">
          {translations[lang].aboutYou}
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Email */}
            <div>
              <label className="block font-bold mb-3">
              {translations[lang].email}
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={translations[lang].enterEmail}
                className="w-full bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-5 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-bold mb-3">
              {translations[lang].phone}
              </label>

              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder={translations[lang].enterPhone}
                className="w-full bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-5 outline-none"
              />
            </div>

            {/* First Name */}
            <div>
              <label className="block font-bold mb-3">
                {translations[lang].firstName}
              </label>

              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder={translations[lang].yourFirstName}
                className="w-full bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-5 outline-none"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block font-bold mb-3">
              {translations[lang].lastName}
              </label>

              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder={translations[lang].yourLastName}
                className="w-full bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-5 outline-none"
              />
            </div>

          </div>

          {/* Message */}
          <div className="mt-10">

            <label className="block font-bold mb-3">
            {translations[lang].message}
            </label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={translations[lang].messagePlaceholder}
              className="w-full h-40 bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-5 outline-none resize-none"
            />

          </div>

          <button
  className="mt-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition"
>
{translations[lang].submitRequest}
</button>

<div className="mt-6 max-w-3xl">

<p className="text-gray-500 text-sm leading-relaxed">

{translations[lang].submitPolicy}{" "}

<button
onClick={() => navigate("/privacy")}
className="text-blue-400 hover:text-blue-300 transition underline"
>
{translations[lang].privacy}
</button>

{" "}

{translations[lang].submitPolicy2}

</p>

</div>

</div>

</form>

        </motion.div>

      

        <footer className="border-t border-white/10 mt-32 pt-24 pb-10 px-6">
        <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-12 mb-16 pt-16">

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
href="tel:+1(667)2278199"
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