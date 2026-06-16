import React, { useState } from "react";

export default function LocalMoving() {

    const [lang, setLang] = useState("en")

    const t = {
      en: {
        home: "Home",
        services: "Services",
        included: "Included",
        fleet: "Fleet",
        whyUs: "Why Us",
        contact: "Contact",
    
        heroTag: "LOCAL MOVING SERVICES",
        heroTitle: "Stress-Free Local Moving",
        heroText:
          "Professional apartment, condo and house moving services with transparent pricing.",
    
        quote: "Get Free Quote",
        call: "Call Now",
    
        serviceTitle: "Professional Local Moving Services",
    
        serviceText1:
          "Whether you're moving from an apartment, condo, townhouse or family home, our team provides a safe and stress-free moving experience.",
    
        serviceText2:
          "We handle packing, loading, transportation and unloading while protecting your furniture and belongings.",
    
        estimateTitle: "Get Free Estimate",
        estimateText:
          "Receive your personalized moving quote in minutes.",
    
        fullName: "Full Name",
        phone: "Phone Number",
        movingFrom: "Moving From",
        movingTo: "Moving To",
    
        whyChoose: "WHY CHOOSE PANTHROMOVING",
        movingSimple: "Moving Made Simple",
    
        faq: "Frequently Asked Questions",
    
        ready: "Ready For A Stress-Free Move?",
        readyText: "Get your free moving estimate today."
      },
    
      ru: {
        home: "Главная",
        services: "Услуги",
        included: "Что входит",
        fleet: "Автопарк",
        whyUs: "Почему мы",
        contact: "Контакты",
    
        heroTag: "УСЛУГИ ПЕРЕЕЗДА",
        heroTitle: "Переезд Без Стресса",
        heroText:
          "Профессиональные услуги по переезду квартир, домов и апартаментов с прозрачными ценами.",
    
        quote: "Получить расчёт",
        call: "Позвонить",
    
        serviceTitle: "Профессиональные Услуги Переезда",
    
        serviceText1:
          "Переезжаете из квартиры, таунхауса или дома? Наша команда обеспечит безопасный и комфортный переезд.",
    
        serviceText2:
          "Мы выполняем упаковку, погрузку, перевозку и выгрузку вещей с полной защитой мебели.",
    
        estimateTitle: "Бесплатная Оценка",
        estimateText:
          "Получите персональное предложение всего за несколько минут.",
    
        fullName: "Ваше Имя",
        phone: "Номер Телефона",
        movingFrom: "Адрес Откуда",
        movingTo: "Адрес Куда",
    
        whyChoose: "ПОЧЕМУ PANTHROMOVING",
        movingSimple: "Переезд Стал Проще",
    
        faq: "Часто Задаваемые Вопросы",
    
        ready: "Готовы К Переезду Без Стресса?",
        readyText: "Получите бесплатную оценку уже сегодня."
      }
    }

    const text = t[lang]

    return (

        

        <div className="relative min-h-screen bg-black text-white overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb25,transparent_40%)]" />

<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#9333ea25,transparent_40%)]" />

<div className="absolute inset-0 overflow-hidden pointer-events-none">

<div
className="
absolute
-top-40
-left-40
w-[800px]
h-[800px]
rounded-full
bg-blue-600/40
blur-[250px]
animate-pulse
"
/>

<div
className="
absolute
bottom-[-300px]
right-[-300px]
w-[900px]
h-[900px]
rounded-full
bg-purple-600/40
blur-[250px]
animate-pulse
"
/>

<div
className="
absolute
top-1/3
left-1/2
-translate-x-1/2
w-[700px]
h-[700px]
rounded-full
bg-cyan-500/20
blur-[220px]
animate-pulse
"
/>

</div>

<div className="relative z-10">
  
  <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-2xl border-b border-white/10">

<div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

  <h1
    onClick={() => window.location.href = "/"}
    className="text-3xl font-bold tracking-wide cursor-pointer"
  >
    Panthromoving
  </h1>

  <div className="hidden lg:flex gap-8 text-gray-300">

<a href="/" className="hover:text-white transition">
{text.home}
</a>

<a href="/#services" className="hover:text-white transition">
{text.services}
</a>

<a href="/#included" className="hover:text-white transition">
{text.included}
</a>

<a href="/#fleet" className="hover:text-white transition">
{text.fleet}
</a>

<a href="/#whyus" className="hover:text-white transition">
{text.whyUs}
</a>

<a href="/#contacts" className="hover:text-white transition">
{text.contact}
</a>

</div>

<div className="flex items-center gap-4">

<div className="flex gap-2">

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

<a
href="tel:+16672278199"
className="
hidden lg:flex
items-center
bg-blue-500
text-white
px-5
py-2
rounded-xl
font-semibold
hover:scale-105
transition
"
>
📞 +1 (667) 227-8199
</a>

</div>

  </div>

</header>

  <section className="pt-40 pb-24">

<div className="max-w-7xl mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-12 items-start">

{/* LEFT */}

<div className="max-w-xl -mt-12">

<p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.3em] mb-2">
{text.heroTag}
</p>

<h1 className="text-4xl lg:text-5xl font-black leading-[1.05] mb-3 max-w-lg">
{text.heroTitle}
</h1>

<p className="text-gray-400 text-base leading-relaxed max-w-md mb-4">
{text.heroText}
</p>

<div
className="
bg-gradient-to-b
from-white/10
to-white/5
border
border-blue-500/20
backdrop-blur-2xl
rounded-[32px]
p-8
shadow-[0_0_60px_rgba(59,130,246,0.15)]
"
>

<h3 className="text-3xl font-black mb-2">
Get Free Estimate
</h3>

<p className="text-gray-400 mb-6">
Receive your personalized moving quote in minutes.
</p>

<div className="grid grid-cols-2 gap-4">

<input
placeholder="Full Name"
className="
p-4
rounded-2xl
bg-black/20
border
border-white/10
outline-none
focus:border-blue-500
"
/>

<input
placeholder="Phone Number"
className="
p-4
rounded-2xl
bg-black/20
border
border-white/10
outline-none
focus:border-blue-500
"
/>

</div>

<input
placeholder="Moving From"
className="
w-full
mt-4
p-4
rounded-2xl
bg-black/20
border
border-white/10
outline-none
focus:border-blue-500
"
/>

<input
placeholder="Moving To"
className="
w-full
mt-4
p-4
rounded-2xl
bg-black/20
border
border-white/10
outline-none
focus:border-blue-500
"
/>

<button
className="
mt-4
w-full
bg-gradient-to-r
from-blue-500
to-purple-500
py-4
rounded-2xl
font-bold
hover:scale-[1.02]
transition
"
>
GET FREE QUOTE
</button>

</div>

</div>

{/* RIGHT */}

<div>

<div className="flex justify-center lg:-mt-10">

<img
src="/IMG_8075.jpg"
alt="Local Moving"
className="
w-[420px]
lg:w-[500px]
rounded-[32px]
shadow-2xl
border
border-white/10
"
/>

</div>

</div>

</div>

</div>

</section>

        <section className="pb-24">

<div className="max-w-7xl mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-16">

{/* LEFT */}

<div>

<h2 className="text-5xl font-black mb-8">
Professional Local Moving Services
</h2>

<div className="bg-white/5 border border-white/10 rounded-[40px] p-10 mb-12">

<h3 className="text-4xl font-black mb-8">
What's Included
</h3>

<div className="grid md:grid-cols-2 gap-6">

<div>✓ Professional Moving Crew</div>
<div>✓ Furniture Protection</div>

<div>✓ Loading & Unloading</div>
<div>✓ Disassembly & Reassembly</div>

<div>✓ Moving Equipment</div>
<div>✓ Clean Moving Truck</div>

</div>

</div>

<p className="text-gray-400 text-xl leading-relaxed mb-6">
Whether you're moving from an apartment,
condo, townhouse or family home,
our team provides a safe and stress-free
moving experience.
</p>

<p className="text-gray-400 text-xl leading-relaxed mb-10">
We handle packing, loading,
transportation and unloading while
protecting your furniture and belongings.
</p>

</div>

{/* RIGHT */}

<div>

<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10">

<p className="text-blue-400 font-semibold mb-4">
TRUSTED BY THOUSANDS
</p>

<h3 className="text-4xl font-black mb-8">
Why Homeowners Choose PanthroMoving
</h3>

<div className="space-y-6">

<div className="flex items-start gap-4">
<div className="text-3xl">✓</div>
<div>
<h4 className="font-bold text-xl mb-1">
Licensed & Insured
</h4>
<p className="text-gray-400">
Fully protected moving services for complete peace of mind.
</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="text-3xl">✓</div>
<div>
<h4 className="font-bold text-xl mb-1">
Transparent Pricing
</h4>
<p className="text-gray-400">
No hidden fees. No surprise charges.
</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="text-3xl">✓</div>
<div>
<h4 className="font-bold text-xl mb-1">
Professional Team
</h4>
<p className="text-gray-400">
Experienced movers trained to protect your belongings.
</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="text-3xl">✓</div>
<div>
<h4 className="font-bold text-xl mb-1">
5-Star Customer Service
</h4>
<p className="text-gray-400">
Thousands of satisfied customers across Maryland.
</p>
</div>
</div>

</div>

</div>

</div>

</div>

</div>

</section>

<section className="pb-24">

<div className="max-w-7xl mx-auto px-6">

<p className="text-blue-400 font-medium mb-4">
{text.whyChoose}
</p>

<h2 className="text-5xl font-black mb-16">
{text.movingSimple}
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-[32px]
p-8
hover:border-blue-500/40
hover:-translate-y-2
transition
duration-300
">
<h3 className="text-2xl font-bold mb-4">
Licensed & Insured
</h3>
<p className="text-gray-400">
Fully licensed moving professionals.
</p>
</div>

<div className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-[32px]
p-8
hover:border-blue-500/40
hover:-translate-y-2
transition
duration-300
">
<h3 className="text-2xl font-bold mb-4">
Professional Movers
</h3>
<p className="text-gray-400">
Experienced and trained moving crew.
</p>
</div>

<div className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-[32px]
p-8
hover:border-blue-500/40
hover:-translate-y-2
transition
duration-300
">
<h3 className="text-2xl font-bold mb-4">
Furniture Protection
</h3>
<p className="text-gray-400">
Extra care for valuable furniture.
</p>
</div>

<div className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-[32px]
p-8
hover:border-blue-500/40
hover:-translate-y-2
transition
duration-300
">
<h3 className="text-2xl font-bold mb-4">
Transparent Pricing
</h3>
<p className="text-gray-400">
No hidden fees or surprises.
</p>
</div>

</div>

</div>

</section>

<section className="pb-24">

<div className="max-w-5xl mx-auto px-6">

<h2 className="text-5xl font-black mb-12">
{text.faq}
</h2>

<div className="space-y-5">

<div className="bg-white/5 border border-white/10 rounded-3xl p-6">
<h3 className="font-bold text-xl mb-3">
How much does local moving cost?
</h3>
<p className="text-gray-400">
Pricing depends on move size, distance and services requested.
</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-6">
<h3 className="font-bold text-xl mb-3">
Do you provide packing services?
</h3>
<p className="text-gray-400">
Yes, full packing and unpacking services are available.
</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-6">
<h3 className="font-bold text-xl mb-3">
Are you licensed and insured?
</h3>
<p className="text-gray-400">
Yes, PanthroMoving is fully licensed and insured.
</p>
</div>

</div>

</div>

</section>

<section className="pb-24">

<div className="max-w-7xl mx-auto px-6">

<div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 rounded-[40px] p-16 text-center">

<h2 className="text-5xl font-black mb-6">
{text.ready}
</h2>

<p className="text-xl text-gray-300 mb-10">
{text.readyText}
</p>

<button
className="bg-gradient-to-r from-blue-500 to-purple-500 px-10 py-5 rounded-2xl font-bold hover:scale-105 transition"
>
GET FREE QUOTE
</button>

</div>

</div>

</section>

</div>
  
      </div>
    )
  }