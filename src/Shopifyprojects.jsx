
import React from 'react'

const projects = {
  PHP: [
     {
    id: 1,
    title: "Neidhal",
    description: "A premium ethnic wear store for women, featuring sarees and salwar materials with 200,000+ orders shipped. Built with a custom Shopify theme.",
    language: "Shopify Liquid, Html,Css,Js,Web Vitals,Indexing,Google Analytics,SEO",
    image: "https://neidhal.com/cdn/shop/files/Web-Hero-Crafted_with_Passion_and_Perseverance.png?v=1774093143&width=350&height=300&crop=center",
    link: "https://neidhal.com",
  },
  {
    id: 2,
    title: "Perrito Pet Products",
    description: "A pet food e-commerce store offering natural meals and treats for dogs and cats under the Wag In Joy & Lick In Joy brands.",
    language: "Shopify Liquid, Html,Css,Js,Web Vitals,Indexing,Google Analytics,SEO",
    image: "https://www.perritopetproducts.com/cdn/shop/files/header-logo-1.png?height=300&pad_color=ffffff&v=1763979399&width=350",
    link: "https://www.perritopetproducts.com",
  },
  {
    id: 3,
    title: "Ayuphoria",
    description: "An Ayurveda-inspired skincare brand selling face washes, moisturizers, sunscreen, and foot cream with plant-based formulations.",
    language: "Shopify Liquid, Html,Css,Js,Web Vitals,Indexing,Google Analytics,SEO",
    image: "https://www.ayuphoria.com/cdn/shop/files/logo.png?height=300&pad_color=ffffff&v=1772796942&width=350",
    link: "https://ayuphoria.com",
  },
  {
    id: 4,
    title: "The Mirage Store",
    description: "A stylish Shopify store built on a premium paid theme, delivering a high-end shopping experience.",
    language: "Shopify Liquid, Html,Css,Js,Web Vitals,Indexing,Google Analytics,SEO (Paid Theme)",
    image: "https://themirage.store/cdn/shop/files/Mirage_New_Logo_White_dfeba371-11f2-4208-beec-a05a6c0de613.webp?v=1769244779",
    link: "https://themirage.store",
  },
  {
    id: 5,
    title: "Xtraallt",
    description: "A Swedish e-commerce store selling snus, tobacco products, vapes, and cigarettes with bulk pricing (Stora förpackningar – Små priser).",
    language: "Shopify Liquid, Html,Css,Js,Web Vitals,Indexing,Google Analytics,SEO",
    image: "https://xtraallt.se/cdn/shop/files/ChatGPT_Image_7_maj_2026_09_32_37.png?height=300&pad_color=ffffff&v=1778139436&width=350",
    link: "https://xtraallt.se",
  },
  {
    id: 6,
    title: "Envole",
    description: "A luxury designer activewear label with limited collections, editorial campaigns, and a private creative collective. Built on a custom high-end Shopify theme.",
    language: "Shopify Liquid, Html,Css,Js,Web Vitals,Indexing,Google Analytics,SEO",
    image: "https://envole.world/cdn/shop/files/envole-social-share_jpg.png?v=1766102118&width=350&height=300&crop=center",
    link: "https://envole.shop",
  },
  {
    id: 7,
    title: "Emma Garden",
    description: "An international seed store offering 700+ varieties of flower, fruit, vegetable, and herbal seeds for home gardeners worldwide.",
    language: "Shopify Liquid, Html,Css,Js,Web Vitals,Indexing,Google Analytics,SEO",
    image: "https://emmagarden.com/cdn/shop/files/LOGO.png?height=300&pad_color=ffffff&v=1775295740&width=350",
    link: "https://emmagarden.com",
  },
  {
    id: 8,
    title: "Jaini Foods",
    description: "A food-focused Shopify store built for a brand delivering quality food products online with a clean and modern storefront.",
    language: "Shopify Liquid, Html,Css,Js,Web Vitals,Indexing,Google Analytics,SEO",
    image: "//jainifoods.myshopify.com/cdn/shop/files/jaini-final-logo.svg?v=1776937657&width=600",
    link: "https://jainifoods.myshopify.com",
  },
  // {
  //   id: 9,
  //   title: "Biotane Naturals",
  //   description: "A science-backed nutraceutical brand offering natural supplements for wellness, immunity, digestion, and sleep — redefining nutrition with plant-based formulations.",
  //   language: "Shopify Liquid, Html,Css,Js,Web Vitals,Indexing,Google Analytics,SEO",
  //   image: "https://biotane.in/cdn/shop/files/Biotane_Redefining_Nutrition_Industry..png?v=1751101125&width=350&height=100%&crop=center",
  //   link: "https://biotane.in",
  // },
  ],

}
const Shopifyprojects = () => {
  return (
    <div className="min-h-screen">
      

      <div className="mx-auto p-6 sm:p-10 w-full sm:w-4/5">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10">
          My Projects
        </h2>

        {Object.keys(projects).map((category) => (
          <div key={category} className="mb-12">
          
                {/* <h4 className="text-3xl sm:text-4xl font-bold  text-[#ba92cf] mb-10">
          {category} Projects
        </h4> */}
            <div className="grid gap-6 col-span-1 sm:grid-cols-4">
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
