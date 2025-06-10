"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";

const Specialties = [
  "Portfolio Website",
  "E-commerce App",
  "Chatbot Integration",
  "Blog CMS",
  "Responsive UI Design",
  "Dashboard & Analytics",
  "Admin Panel Development",
  "Stripe Integration",
  "Social Login (OAuth)",
  "SEO Optimization",
  "Dark Mode Support",
];

const traits = [
  { text: "🚀 Problem Solver", class: "absolute -top-[60px] -left-6" },
  { text: "💡 Creative Thinker", class: "absolute top-0 right-0" },
  { text: "Detail Oriented", class: "absolute -top-80 right-5" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="bg-slate-950  max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image with Enhanced Styling */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

              {/* Main image container */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 p-1">
                <Image
                  src="/images/png/bg.png"
                  alt="Abdul - Developer"
                  className="w-full h-full rounded-full object-cover bg-slate-800 shadow-xl"
                  width={2000}
                  height={2000}
                />
                <div className="relative">
                  {traits.map((trait) => (
                    <div
                      key={trait.text}
                      className={`bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700 hover:border-amber-500 transition-colors duration-300 ${trait.class}`}
                    >
                      <span className="text-amber-500 font-medium">
                        {trait.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="absolute -bottom-14 text-2xl font-semibold text-white mb-4 flex justify-center items-center visible md:hidden">
                <span className="text-amber-200 p-1">Hi</span>
                <span className="text-white">,</span>
                <span className="text-amber-200 p-1">I</span>
                <span className="text-white">&apos;</span>
                <span className="text-amber-200 pr-1">m</span>
                <span className="animate-text-gradient bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent pl-1">
                  Abdul
                </span>
                <span className="text-amber-200">!</span>
              </h3>

              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-500 rounded-full animate-bounce opacity-80 flex justify-center items-center">
                🎯
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-500 rounded-full animate-pulse opacity-80"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-60"></div>
            </div>
          </div>

          {/* Bio Content with Skills */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4 md:flex justify-center items-center hidden">
                <span className="text-amber-200 p-1">Hi</span>
                <span className="text-white">,</span>
                <span className="text-amber-200 p-1">I</span>
                <span className="text-white">&apos;</span>
                <span className="text-amber-200 pr-1">m</span>
                <span className="animate-text-gradient bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent pl-1">
                  Abdul
                </span>
                <span className="text-amber-200">!</span>
              </h3>
              <p className="text-lg text-neutral-300 leading-[1.3] mb-4 mt-7">
                Hello! I&apos;m abdul.dev, a passionate and creative developer
                with a knack for building elegant and efficient solutions. I
                thrive on turning complex problems into beautiful, intuitive
                digital experiences.
              </p>
              <p className="text-lg text-neutral-300 leading-[1.45] mb-6">
                I specialize in front-end development with React and Next.js,
                but I&apos;m also comfortable working with back-end technologies
                and databases. I&apos;m a lifelong learner, always eager to
                explore new tools and frameworks to enhance my skillset.
              </p>
            </div>

            {/* Specialties Section */}
            <div>
              <h4 className="text-xl font-semibold text-amber-500 mb-4">
                My Specialties:
              </h4>
              <div className="flex flex-wrap gap-2">
                {Specialties.map((Specialtie) => (
                  <li
                    key={Specialtie}
                    className="flex items-center gap-2 px-3 py-1 bg-transparent border border-amber-500/20 rounded-full text-xs text-neutral-300 group hover:bg-amber-500/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <span className="text-amber-500 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle size={18}/>
                    </span>
                    <span className="group-hover:text-white transition-colors duration-300">
                      {Specialtie}
                    </span>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
