import React from 'react'

function HowWeWork() {
  return (
  <div className="w-full sm:w-4/5 mx-auto sm:my-10 bg-[#1a1a1a] border 
                h-auto rounded-xl px-6 py-8">

  <h1 className="text-center text-white text-2xl font-semibold mb-2">
    How We Work
  </h1>

  <p className="text-center text-gray-400 text-sm mb-10">
    A transparent, efficient process designed for clarity and results.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
    
    {/* Step 1 */}
    <div className="p-4 rounded-lg bg-white/5">
      <span className="text-xs text-gray-400 uppercase tracking-wide">Step 01</span>
      <h3 className="text-white font-medium mt-2">Discovery</h3>
      <p className="text-gray-400 text-sm mt-2">
        Understanding your goals, requirements, and business needs.
      </p>
    </div>

    {/* Step 2 */}
    <div className="p-4 rounded-lg bg-white/5">
      <span className="text-xs text-gray-400 uppercase tracking-wide">Step 02</span>
      <h3 className="text-white font-medium mt-2">Design & Build</h3>
      <p className="text-gray-400 text-sm mt-2">
        Crafting a responsive, scalable, and brand-aligned experience.
      </p>
    </div>

    {/* Step 3 */}
    <div className="p-4 rounded-lg bg-white/5">
      <span className="text-xs text-gray-400 uppercase tracking-wide">Step 03</span>
      <h3 className="text-white font-medium mt-2">Optimize</h3>
      <p className="text-gray-400 text-sm mt-2">
        Performance tuning, testing, and cross-device optimization.
      </p>
    </div>

    {/* Step 4 */}
    <div className="p-4 rounded-lg bg-white/5">
      <span className="text-xs text-gray-400 uppercase tracking-wide">Step 04</span>
      <h3 className="text-white font-medium mt-2">Launch & Support</h3>
      <p className="text-gray-400 text-sm mt-2">
        Smooth deployment, monitoring, and ongoing improvements.
      </p>
    </div>

  </div>
</div>

  )
}

export default HowWeWork
