
import React from 'react'

const projects = {
  PHP:[
  {
    id: 1,
    title: "Neidhal",
    description: "A premium ethnic wear store for women, featuring sarees and salwar materials with 200,000+ orders shipped. Built with a custom Shopify theme.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, Indexing, Google Analytics, SEO",
    image: "https://neidhal.com/cdn/shop/files/neidhal-red-logo-svg_1.svg?v=1772872704&width=270",
    link: "https://neidhal.com"
  },
  {
    id: 2,
    title: "The Mirage Store",
    description: "A stylish Shopify store built on a premium paid theme, delivering a high-end shopping experience.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, Indexing, Google Analytics, SEO (Paid Theme)",
    image: "https://themirage.store/cdn/shop/files/Mirage_New_Logo_White_dfeba371-11f2-4208-beec-a05a6c0de613.webp?v=1769244779",
    link: "https://themirage.store"
  },
  {
    id: 3,
    title: "Perrito Pet Products",
    description: "A pet food e-commerce store offering natural meals and treats for dogs and cats under the Wag In Joy & Lick In Joy brands.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, Indexing, Google Analytics, SEO",
    image: "https://www.perritopetproducts.com/cdn/shop/files/header-logo-1.png?height=300&pad_color=ffffff&v=1763979399&width=350",
    link: "https://www.perritopetproducts.com"
  },
  {
    id: 4,
    title: "Ayuphoria",
    description: "An Ayurveda-inspired skincare brand selling face washes, moisturizers, sunscreen, and foot cream with plant-based formulations.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, Indexing, Google Analytics, SEO",
    image: "https://www.ayuphoria.com/cdn/shop/files/logo.png?height=300&pad_color=ffffff&v=1772796942&width=350",
    link: "https://ayuphoria.com"
  },
  {
    id: 5,
    title: "Xtraallt",
    description: "A Swedish e-commerce store selling snus, tobacco products, vapes, and cigarettes with bulk pricing.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, Indexing, Google Analytics, SEO",
    image: "https://xtraallt.se/cdn/shop/files/ChatGPT_Image_7_maj_2026_09_32_37.png?height=300&pad_color=ffffff&v=1778139436&width=350",
    link: "https://xtraallt.se"
  },
  {
    id: 6,
    title: "Envole",
    description: "A luxury designer activewear label with limited collections, editorial campaigns, and a private creative collective. Built on a custom high-end Shopify theme.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, Indexing, Google Analytics, SEO",
    image: "https://envole.world/cdn/shop/files/envole-social-share_jpg.png?v=1766102118&width=350&height=300&crop=center",
    link: "https://envole.world"
  },
  {
    id: 7,
    title: "Emma Garden",
    description: "An international seed store offering 700+ varieties of flower, fruit, vegetable, and herbal seeds for home gardeners worldwide.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, Indexing, Google Analytics, SEO",
    image: "https://emmagarden.com/cdn/shop/files/LOGO.png?height=300&pad_color=ffffff&v=1775295740&width=350",
    link: "https://emmagarden.com"
  },
  {
    id: 8,
    title: "Jaini Food(pass:-Food@)",
    description: "An end-to-end e-commerce build for a brand delivering quality food products online, featuring a clean and modern storefront.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, Indexing, Google Analytics, SEO",
    image: "https://jainifoods.myshopify.com/cdn/shop/files/jaini-final-logo.svg?v=1776937657&width=200",
    link: "https://jainifoods.myshopify.com"
  },
  {
    id: 9,
    title: "Flynker",
    description: "A modern, highly optimized Shopify e-commerce storefront designed for a seamless user experience and quick conversions.",
    language: "Shopify Liquid, Html, Css, Js, Storefront API, SEO",
    image: "https://flynker.com/cdn/shop/files/WhatsApp_Image_2026-03-23_at_1.06.22_AM.jpg?v=1777805678",
    link: "https://flynker.com"
  },
  {
    id: 10,
    title: "Hospitrade UK",
    description: "A B2B medical and hospital supplies e-commerce platform serving the UK market with streamlined bulk ordering capabilities.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, B2B Integration, SEO",
    image: "https://hospitrade.co.uk/cdn/shop/files/HOSPITRADE-LOGO-png_edited.png?v=1741465559",
    link: "https://hospitrade.co.uk"
  },
  {
    id: 11,
    title: "Palladium Boots India",
    description: "The official Indian storefront for Palladium Boots, featuring dynamic product filtering, custom size guides, and high-performance imagery.",
    language: "Shopify Plus, Liquid, JS, CSS, Web Vitals, Advanced Filtering, SEO",
    image: "https://palladiumboots.co.in/cdn/shop/files/secondary_logo_2_black_flag_colored.png?v=1769186525&width=230",
    link: "https://palladiumboots.co.in"
  },
  {
    id: 12,
    title: "Another Level Beauty",
    description: "A sleek, vibrant cosmetics and beauty storefront emphasizing visual storytelling, fast load times, and mobile-first design.",
    language: "Shopify Liquid, Tailwind CSS, JS, Performance Optimization, SEO",
    image: "https://anotherlevelbeauty.com/cdn/shop/files/Logo_0999083c-f9b0-4534-a777-dedf7eb79bc8.png?v=1738631661&width=400",
    link: "https://anotherlevelbeauty.com"
  },
  {
    id: 13,
    title: "Aerigo",
    description: "A premium lifestyle Shopify brand featuring clean aesthetics, intuitive navigation, and smooth animations.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, Indexing, SEO",
    image: "https://aerigo.co/cdn/shop/files/Areigo.png?v=1728451685&width=360",
    link: "https://aerigo.co"
  },
  {
    id: 14,
    title: "Oroskyn",
    description: "A modern skincare brand storefront built on Shopify, optimized for mobile shopping and rapid checkout flows.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, SEO",
    image: "https://www.oroskyn.com/cdn/shop/files/download.png?height=300&pad_color=ffffff&v=1779255121&width=300",
    link: "https://oroskyn.com"
  },
  {
    id: 15,
    title: "Urban Den",
    description: "An online home decor and lifestyle store tailored for the Indian market, featuring robust product variants and custom galleries.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, Google Analytics, SEO",
    image: "https://urban-den.in/cdn/shop/files/Urban-den-Logo-1500-x-600-px-3.svg?v=1768299730",
    link: "https://urban-den.in"
  },
  {
    id: 16,
    title: "Kaura India",
    description: "An authentic Indian brand storefront utilizing Shopify to showcase cultural or natural products with rich storytelling sections.",
    language: "Shopify Liquid, Html, Css, Js, SEO, Performance Optimization",
    image: "https://kauraindia.com/cdn/shop/files/KAURA_1.svg?v=1767607183&width=180",
    link: "https://kauraindia.com"
  },
  {
    id: 17,
    title: "Satvikam Cookware",
    description: "An e-commerce hub for traditional, high-quality cookware. Features optimized product pages and secure payment integrations.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, Indexing, SEO",
    image: "https://www.satvikamcookware.com/cdn/shop/files/SATVIKAM-Color.svg?v=1771237827&width=340",
    link: "https://www.satvikamcookware.com"
  },
  {
    id: 18,
    title: "Biotane",
    description: "A specialized e-commerce presence for eco-friendly or biological products, focusing on clean UI and educational content.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, SEO",
    image: "https://biotane.in/cdn/shop/files/Biotane_Redefining_Nutrition_Industry..png?v=1751101125",
    link: "https://biotane.in"
  },
  {
    id: 19,
    title: "Pallu Pallu",
    description: "A fast, responsive Shopify store specializing in traditional Indian textiles and apparel with advanced filtering options.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, Google Analytics, SEO",
    image: "https://pallupallu.in/cdn/shop/files/Pallu_pallu_logo_1.svg?v=1774023903",
    link: "https://pallupallu.in"
  },
  {
    id: 20,
    title: "Snackino",
    description: "A vibrant, food-focused Shopify storefront engineered for quick, seamless impulse purchases and bundle offerings.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, SEO",
    image: "https://snackino.com/cdn/shop/files/Group_2085665855.svg?v=1774843884&width=300",
    link: "https://snackino.com"
  },
  {
    id: 21,
    title: "Burgee",
    description: "A customized Shopify experience highlighting unique brand identity through custom typography, styling, and robust architecture.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, Indexing, SEO",
    image: "https://www.burgeeburgee.com/cdn/shop/files/BURGEE.png?height=300&pad_color=ffffff&v=1774866139&width=300",
    link: "https://burgeeburgee.com"
  },
  {
    id: 22,
    title: "Caredale",
    description: "An online store catering to wellness and personal care, prioritizing fast load times and clean product presentation.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, SEO",
    image: "https://www.caredale.in/cdn/shop/files/Care_Dale_Logo-47.png?height=300&pad_color=ffffff&v=1768667218&width=300",
    link: "https://caredale.in"
  },
  {
    id: 23,
    title: "Palanchi",
    description: "A bespoke e-commerce platform built on Shopify, offering an elegant browsing experience and streamlined checkout.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, SEO",
    image: "https://palanchi.com/cdn/shop/files/loom_to_1_today-cropped.svg?v=1765603777",
    link: "https://palanchi.com"
  },
  {
    id: 24,
    title: "NGL Drinks",
    description: "A dynamic beverage storefront featuring engaging imagery, subscription model capabilities, and modern design.",
    language: "Shopify Liquid, Html, Css, Js, Recharge Integration, SEO",
    image: "https://ngldrinks.com/cdn/shop/files/NGL_Final_logo_56302dff-542a-4399-a0bc-708b417d6e54.png?height=300&pad_color=ffffff&v=1744093956&width=300",
    link: "https://ngldrinks.com"
  },
  {
    id: 25,
    title: "Tre Sorelle",
    description: "An independent boutique Shopify store designed to support a growing small business with scalable architecture.",
    language: "Shopify Liquid, Html, Css, Js, Custom Sections, SEO",
    image: "https://tre-sorelle-8638.myshopify.com/cdn/shop/files/Logo-01.png?height=300&pad_color=ffffff&v=1777533923&width=300",
    link: "https://tre-sorelle-8638.myshopify.com"
  },
  {
    id: 26,
    title: "Orchid Natures",
    description: "An online catalog for natural products and remedies, featuring a serene design system and optimized web vitals.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, Indexing, SEO",
    image: "https://orchidnatures.com/cdn/shop/files/Feb2026_Executive_Dashboard.svg?v=1773730419&width=100",
    link: "https://orchidnatures.com"
  },
  {
    id: 27,
    title: "Aquave",
    description: "A highly responsive Shopify store built with custom Liquid blocks to showcase lifestyle and hydration products.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, SEO",
    image: "https://aquave.in/cdn/shop/files/logo_aquave_1_83a25b2c-40c9-43fd-9347-4111397ca72d.png?v=1757080070&width=256",
    link: "https://aquave.in"
  },
  {
    id: 28,
    title: "Seed Organica",
    description: "A comprehensive agricultural and gardening store featuring intuitive categorization for organic seeds and farming supplies.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, SEO",
    image: "https://seedorganica.com/cdn/shop/files/LOGO_FINAL-2.png?v=1758363705&width=500",
    link: "https://seedorganica.com"
  },
  {
    id: 29,
    title: "Flamun",
    description: "A custom Shopify presence for the Flamun fragrance brand, featuring tailored Liquid components like the 'Why Flamun Exists?' section and engaging marketing copy.",
    language: "Shopify Liquid, Html, Css, Js, Web Vitals, SEO",
    image: "https://flamun.com/wp-content/uploads/2024/11/cropped-FLAMUN-1.png",
    link: "https://flamun.com"
  },
  {
    id: 30,
    title: "Glowjob",
    description: "A bold, modern e-commerce storefront focusing on high visual impact, rapid mobile loading, and smooth UX.",
    language: "Shopify Liquid, Html, Css, Js, Performance Optimization, SEO",
    image: "https://glowjob.com/cdn/shop/files/Untitled-1112.svg?v=1750665121",
    link: "https://glowjob.com"
  },
  {
    id: 31,
    title: "Starbar Press",
    description: "A Shopify-based publishing or media storefront engineered to handle digital downloads and physical media seamlessly.",
    language: "Shopify Liquid, Html, Css, Js, Digital Product Integration, SEO",
    image: "https://starbar.press/cdn/shop/files/starbar-logo-a.svg?v=1780302243&width=150",
    link: "https://starbar.press"
  }
]

}
const Shopifyprojects = () => {
  return (
    <div className="min-h-screen">
      

      <div className="mx-auto p-6 sm:p-10 w-full sm:w-4/5">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10">
          Featured Live Projects
        </h2>

        {Object.keys(projects).map((category) => (
          <div key={category} className="mb-12">
          
                {/* <h4 className="text-3xl sm:text-4xl font-bold  text-[#ba92cf] mb-10">
          {category} Projects
        </h4> */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {projects[category].map((project) => (

               <a
  key={project.id}
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 block cursor-pointer overflow-hidden"
>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-contain"
                  />

                  <div className="p-5">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">
                      {project.description}
                    </p>
                    <div class="cus-languages flex gap-2 flex-wrap">
                    {project.language.split(",").map((lang, index) => (

  <span
    key={index}
    className="bg-blue-600 text-white px-3 py-1 text-xs rounded-full"
  >
    {lang.trim()}
  </span>
))}
         </div>         </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Shopifyprojects
