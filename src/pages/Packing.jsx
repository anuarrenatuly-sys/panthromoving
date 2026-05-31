import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { FaBars,FaBoxOpen,FaShieldAlt,FaClipboardList,FaTools } from "react-icons/fa"
import {
    Package,
    ShieldCheck,
    ClipboardList,
    Wrench
    } from "lucide-react"

export default function Packing() {

const navigate = useNavigate()

const [lang, setLang] = useState(
localStorage.getItem("lang") || "en"
)

const [menuOpen, setMenuOpen] = useState(false)

const translations = {

en: {

home: "Home",
services: "Solutions",
included: "Included",
fleet: "Moving Types",
whyus: "Why Panthro",
contact: "Contacts",

heroTitle: "Professional Packing & Unpacking",

heroText:
"We carefully protect, wrap and organize your belongings for a smooth and secure moving experience.",

feature1: "Furniture Wrapping",
feature2: "Fragile Item Protection",
feature3: "Box Packing",
feature4: "Unpacking & Setup",

whyTitle: "Why Choose Our Packing Service",

whyText:
"Our experienced movers use premium packing materials and professional techniques to keep your belongings safe during transportation.",

quote: "Get Free Quote",

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

privacy: "Privacy Policy",
terms: "Terms of Service",

rights: "All rights reserved.",
packingServicePage: "Packing Service",
materialsText: "Packing Materials",
materialsTitle: "What We Use",

material1Title: "Bubble Wrap",
material1Text: "Reliable protection for fragile items and electronics.",

material2Title: "Premium Boxes",
material2Text: "Durable boxes of various sizes for safe transportation.",

material3Title: "Stretch Film",
material3Text: "Extra securing for furniture and packed items.",
},

ru: {

home: "Главная",
services: "Решения",
included: "Что включено",
fleet: "Типы переезда",
whyus: "Почему Panthro",
contact: "Контакты",

heroTitle: "Профессиональная упаковка вещей",

heroText:
"Мы аккуратно упакуем, защитим и организуем ваши вещи для безопасного и комфортного переезда.",

feature1: "Упаковка мебели",
feature2: "Защита хрупких вещей",
feature3: "Упаковка коробок",
feature4: "Распаковка и сборка",

whyTitle: "Почему выбирают нашу упаковку",

whyText:
"Наши специалисты используют профессиональные материалы и современные методы упаковки для максимальной безопасности ваших вещей.",

quote: "Получить расчёт",

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

privacy: "Политика конфиденциальности",
terms: "Условия использования",

rights: "Все права защищены.",
packingServicePage: "Услуга упаковки",
materialsText: "Материалы",
materialsTitle: "Что мы используем",

material1Title: "Пузырчатая плёнка",
material1Text: "Надёжная защита для хрупких вещей и электроники.",

material2Title: "Премиум коробки",
material2Text: "Прочные коробки разных размеров для безопасного переезда.",

material3Title: "Стретч плёнка",
material3Text: "Дополнительная фиксация мебели и упаковки.",
}

}

return (

<div className="min-h-screen bg-black text-white overflow-hidden relative">

<div className="absolute -top-40 left-0 w-[700px] h-[700px] bg-blue-500/30 blur-[160px] rounded-full"></div>

<div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-500/20 blur-[160px] rounded-full"></div>

<div className="relative z-10">

<header className="flex items-center justify-between py-4 px-6 fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-2xl border-b border-white/10">

<h1
onClick={() => navigate("/")}
className="text-3xl font-bold cursor-pointer"
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

<div className="flex items-center gap-2">

<button
onClick={() => {
setLang("en")
localStorage.setItem("lang", "en")
}}
className={`transition px-3 py-1 rounded-xl ${
lang === "en"
? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"
: "hover:text-blue-400 bg-white/5 border border-white/10"
}`}
>
EN
</button>

<button
onClick={() => {
setLang("ru")
localStorage.setItem("lang", "ru")
}}
className={`transition px-3 py-1 rounded-xl ${
    lang === "ru"
    ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"
    : "hover:text-blue-400 bg-white/5 border border-white/10"
    }`}
>
RU
</button>

</div>

<button
onClick={() => setMenuOpen(!menuOpen)}
className="md:hidden text-2xl"
>
<FaBars />
</button>

</header>

{
menuOpen && (

<div className="fixed top-24 left-4 right-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 z-40 md:hidden">

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

)
}

<section className="pt-25 pb-24 px-6">

<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

<div>

<p className="text-blue-400 font-medium mb-4 uppercase tracking-[0.25em]">
{translations[lang].packingServicePage}
</p>

<h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
{translations[lang].heroTitle}
</h1>

<p className="text-gray-400 text-xl leading-relaxed mb-10">
{translations[lang].heroText}
</p>

<button
onClick={() => navigate("/quote")}
className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
>
{translations[lang].quote}
</button>

</div>

<motion.div
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.6 }}
className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl"
>

<div className="grid grid-cols-2 gap-6">

<div className="bg-white/5 rounded-3xl p-6 border border-white/10">

<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-xl flex items-center justify-center">
<Package size={28} className="text-blue-400" />
</div>

<p className="mt-5 font-semibold text-lg">
{translations[lang].feature1}
</p>

</div>

<div className="bg-white/5 rounded-3xl p-6 border border-white/10">

<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-xl flex items-center justify-center">
<ShieldCheck size={28} className="text-blue-400" />
</div>

<p className="mt-5 font-semibold text-lg">
{translations[lang].feature2}
</p>

</div>

<div className="bg-white/5 rounded-3xl p-6 border border-white/10">

<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-xl flex items-center justify-center">
<ClipboardList size={28} className="text-blue-400" />
</div>

<p className="mt-5 font-semibold text-lg">
{translations[lang].feature3}
</p>

</div>

<div className="bg-white/5 rounded-3xl p-6 border border-white/10">

<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-xl flex items-center justify-center">
<Wrench size={28} className="text-blue-400" />
</div>

<p className="mt-5 font-semibold text-lg">
{translations[lang].feature4}
</p>

</div>

</div>

</motion.div>

</div>

</section>

<section className="pb-32 px-6">

<div className="max-w-5xl mx-auto text-center">

<h2 className="text-5xl font-black mb-8">
{translations[lang].whyTitle}
</h2>

<p className="text-gray-400 text-xl leading-relaxed">
{translations[lang].whyText}
</p>

</div>

</section>

<section className="pb-32 px-6">

<div className="max-w-6xl mx-auto">

<div className="mb-16 text-center">

<p className="text-blue-400 uppercase tracking-[0.25em] mb-4">
{translations[lang].materialsText}
</p>

<h2 className="text-5xl font-black">
{translations[lang].materialsTitle}
</h2>

</div>

<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl">

<h3 className="text-2xl font-black mb-4">
{translations[lang].material1Title}
</h3>

<p className="text-gray-400 leading-relaxed">
{translations[lang].material1Text}
</p>

</div>

<div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl">

<h3 className="text-2xl font-black mb-4">
{translations[lang].material2Title}
</h3>

<p className="text-gray-400 leading-relaxed">
{translations[lang].material2Text}
</p>

</div>

<div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl">

<h3 className="text-2xl font-black mb-4">
{translations[lang].material3Title}
</h3>

<p className="text-gray-400 leading-relaxed">
{translations[lang].material3Text}
</p>

</div>

</div>

</div>

</section>

<footer className="border-t border-white/10 pt-24 pb-10">

<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-4 gap-12 mb-16">

<div>

<h2 className="text-3xl font-black mb-5">
Panthromoving
</h2>

<p className="text-gray-400 leading-relaxed">
{translations[lang].footerText}
</p>

</div>

<div>

<h3 className="text-xl font-bold mb-5">
{translations[lang].company}
</h3>

<div className="flex flex-col gap-4 text-gray-400">

<a href="/#services">
{translations[lang].footerSolutions}
</a>

<a href="/#included">
{translations[lang].footerIncluded}
</a>

<a href="/#fleet">
{translations[lang].footerTypes}
</a>

<a href="/#whyus">
{translations[lang].footerWhy}
</a>

</div>

</div>

<div>

<h3 className="text-xl font-bold mb-5">
{translations[lang].footerContact}
</h3>

<div className="flex flex-col gap-4 text-gray-400">

<p>+1 (667) 227-8199</p>

<p>info@panthromoving.com</p>

<p>United States</p>

</div>

</div>

<div>

<h3 className="text-xl font-bold mb-5">
{translations[lang].footerHelp}
</h3>

<p className="text-gray-400 mb-6">
{translations[lang].footerHelpText}
</p>

<button
onClick={() => navigate("/quote")}
className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4 rounded-2xl font-bold"
>
{translations[lang].quote}
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