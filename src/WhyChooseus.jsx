import React from 'react'

function WhyChooseus() {
  return (
    <div>
      <div className="w-full sm:w-4/5 mx-auto sm:my-10 bg-[#1a1a1a] border 
                h-auto rounded-xl px-6 py-8">

  <h1 className="text-center text-white text-2xl font-semibold mb-2">
    Why Choose Us
  </h1>

  <p className="text-center text-gray-400 text-sm mb-10">
    What sets us apart and makes us a reliable long-term partner.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">

    {/* Reason 1 */}
    <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition">
      <span className="text-xs text-gray-400 uppercase tracking-wide">
        Performance First
      </span>
      <h3 className="text-white font-medium mt-2">
        Speed & Optimization
      </h3>
      <p className="text-gray-400 text-sm mt-2">
        We focus on fast load times, clean code, and measurable performance gains.
      </p>
    </div>

    {/* Reason 2 */}
    <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition">
      <span className="text-xs text-gray-400 uppercase tracking-wide">
        Mobile Focused
      </span>
      <h3 className="text-white font-medium mt-2">
        Built for All Devices
      </h3>
      <p className="text-gray-400 text-sm mt-2">
        Mobile-first designs that convert seamlessly across screens.
      </p>
    </div>

    {/* Reason 3 */}
    <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition">
      <span className="text-xs text-gray-400 uppercase tracking-wide">
        Scalable Solutions
      </span>
      <h3 className="text-white font-medium mt-2">
        Future-Ready Code
      </h3>
      <p className="text-gray-400 text-sm mt-2">
        Flexible architecture that grows with your business.
      </p>
    </div>

    {/* Reason 4 */}
    <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition">
      <span className="text-xs text-gray-400 uppercase tracking-wide">
        Reliable Partner
      </span>
      <h3 className="text-white font-medium mt-2">
        Long-Term Support
      </h3>
      <p className="text-gray-400 text-sm mt-2">
        Clear communication, reliable delivery, and ongoing support.
      </p>
    </div>

  </div>
</div>

    </div>
  )
}

export default WhyChooseus
