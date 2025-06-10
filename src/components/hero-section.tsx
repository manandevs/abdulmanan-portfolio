"use client";

import {
  ArrowRight,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-slate-950  max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen max-h-max flex items-center justify-center overflow-x-hidden"
    >
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Heading with Animated Gradient */}

        <p className="w-full text-xl font-bold animate-text-gradient bg-gradient-to-r from-[#f34915ea] via-orange-500 to-red-500 bg-clip-text text-transparent">
          Hey, I&#39;m
        </p>
        <h1 className="text-[40px] md:text-8xl font-extrabold mb-3 md:mb-6 leading-tight">
          <span className="text-nowrap animate-text-gradient bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            ABDUL MANAN
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-[white] mb-4 font-light">
          Full Stack Developer & Creative Problem Solver
        </p>

        {/* Description */}
        <p className="text-lg text-[white] mb-6 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences with modern technologies.
          Passionate about clean code, innovative solutions, and bringing ideas
          to life.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-3 xl:mb-16">
          <Link href="#projects" 
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 group flex items-center gap-2"
          >
            View My Projects
            <ArrowRight />
          </Link>

          <Link href={"#contact"}
            className="border-2 border-amber-500 text-amber-500 hover:bg-amber-400 hover:text-slate-950 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group flex items-center gap-2"
          >
            <Mail size={20} />
            Get In Touch
          </Link>
        </div>
      </div>
      {/* Social Links */}
      <div className="flex justify-center gap-6 flex-col absolute right-0 top-2/3">
        {[
          { icon: GithubIcon, href: "https://github.com/manandevs", label: "GitHub" },
          { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
          { icon: DownloadIcon, href: "https://github.com/manandevs", label: "Resume" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="p-3 rounded-full bg-neutral-800/50 backdrop-blur-sm text-neutral-400 hover:text-amber-500 hover:bg-neutral-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            aria-label={label}
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 text-neutral-400 z-20">
        <div className="flex flex-col items-center">
          <a href="#about" className="text-sm mb-2">Scroll to explore</a>
          <a href="#about" className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-500 rounded-full mt-2 animate-bounce"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
