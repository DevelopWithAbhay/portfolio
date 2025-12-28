import React from 'react'

function ContactUs() {
  return (
    <div>
      <div className="w-full sm:w-4/5 mx-auto my-10 bg-[#1a1a1a]
                border  rounded-xl px-6 py-12 text-center">

  <h2 className="text-white text-3xl font-semibold mb-4">
    Let’s Build Something Great
  </h2>

  <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8">
    Whether you need a full Shopify store, performance optimization,
    or custom development — we’re ready to help.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <a
      href="{<Contact/>}"
      className="px-6 py-3 rounded-full bg-white text-black
                 text-sm font-medium hover:bg-gray-200 transition"
    >
      Contact Us
    </a>

    <a
      href="/contact"
      className="px-6 py-3 rounded-full border border-white/20
                 text-white text-sm hover:bg-white/10 transition"
    >
      Start a Project
    </a>
  </div>

  <p className="text-xs text-gray-500 mt-8">
    We usually respond within 24 hours.
  </p>
</div>

    </div>
  )
}

export default ContactUs
