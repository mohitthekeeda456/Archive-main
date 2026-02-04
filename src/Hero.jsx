import React from "react";
// import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#fff9e9] to-[#f6f2e7] flex items-center px-10 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text Section */}
        <div>
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-[#fff0c7] px-4 py-2 rounded-full text-[#b88a1e] font-medium mb-6">
            <Sparkles size={18} />
            Handcrafted Luxury
          </div>

          {/* Heading */}
          <h1 className="text-6xl font-bold leading-tight text-[#2d1e0f]">
            Indulge in
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e7c566] to-[#f6df9a]">
              Pure
              <br />
              Elegance
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Discover our exquisite collection of artisanal chocolates, crafted
            with the finest ingredients and adorned with edible gold. Each piece
            is a masterwork of flavor and beauty.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="bg-[#f6d569] hover:bg-[#efc24e] text-[#2d1e0f] font-medium px-6 py-3 rounded-xl shadow-md transition">
              Explore Collection →
            </button>

            <button className="border border-gray-300 hover:bg-[#efc24e] text-[#2d1e0f] font-medium px-6 py-3 rounded-xl transition">
              Our Story
            </button>
          </div>
        </div>

        {/* Floating Chocolate Sphere */}
        <div className="flex justify-center relative">
          <div className="w-80 h-80 bg-gradient-to-b from-[#3c2b24] to-[#1c1310] rounded-full shadow-2xl relative">
            {/* Golden Ring */}
            <div className="absolute top-1/2 left-1/2 w-[115%] h-3 bg-[#d9b44a] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
