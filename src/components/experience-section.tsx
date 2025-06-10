"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Briefcase,
  GraduationCap,
  Code,
  Rocket,
  Zap,
  Users,
  Trophy,
  Star,
} from "lucide-react";

const timelineEvents = [
  {
    id: 1,
    title: "Senior VR Developer",
    company: "Meta Reality Labs",
    period: "Jan 2023 – Present",
    description: "Leading development of next-generation VR experiences...",
    Icon: Briefcase,
  },
  {
    id: 2,
    title: "VR Development Lead",
    company: "VROOM Technologies",
    period: "Mar 2021 – Dec 2022",
    description: "Led a team of 8 developers...",
    Icon: Users,
  },
  {
    id: 3,
    title: "Senior XR Engineer",
    company: "Immersive Solutions",
    period: "Jun 2019 – Feb 2021",
    description: "Developed cross-platform VR/AR applications...",
    Icon: Code,
  },
  {
    id: 4,
    title: "Unity Developer",
    company: "GameVerse Studios",
    period: "Sep 2017 – May 2019",
    description: "Built interactive 3D games using Unity...",
    Icon: Rocket,
  },
  {
    id: 5,
    title: "3D Graphics Programmer",
    company: "Digital Dynamics",
    period: "Jan 2016 – Aug 2017",
    description: "Developed real-time rendering systems...",
    Icon: Zap,
  },
  {
    id: 6,
    title: "Junior Game Developer",
    company: "Pixel Perfect Games",
    period: "Jul 2014 – Dec 2015",
    description: "Started career developing 2D/3D games...",
    Icon: Trophy,
  },
  {
    id: 7,
    title: "Software Engineering Intern",
    company: "TechStart Inc",
    period: "Jun 2013 – Jun 2014",
    description: "Contributed to web apps, learned testing/version control...",
    Icon: Star,
  },
  {
    id: 8,
    title: "Computer Science Student",
    company: "University of Technology",
    period: "Sep 2010 – May 2014",
    description: "Bachelor’s in CS with focus on graphics/HCI...",
    Icon: GraduationCap,
  },
];

export default function Timeline() {
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const dots = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const visible = React.useRef<Set<number>>(new Set());

  useEffect(() => {
    gsap.set(cards.current, {
      opacity: 0,
      x: (_, i) => (i % 2 ? 100 : -100),
      y: 50,
    });
    gsap.set(dots.current, { scale: 0, opacity: 0 });
    gsap.set(progressRef.current, { scaleY: 0, transformOrigin: "top center" });

    cards.current.forEach((card, i) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !visible.current.has(i)) {
            visible.current.add(i);
            gsap.to(card, {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            });
            gsap.to(dots.current[i], {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              ease: "back.out(1.7)",
            });

            const max = Math.max(...Array.from(visible.current));
            gsap.to(progressRef.current, {
              scaleY: (max + 1) / timelineEvents.length,
              duration: 0.6,
              ease: "power2.out",
            });
          }
        },
        { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
      );
      observer.observe(card);
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-6xl font-bold
              bg-gradient-to-r from-[#f34915ea] via-orange-500 to-red-500
              bg-clip-text text-transparent mb-6"
          >
            Experience Timeline
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A journey through my professional development in technology and innovation
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-700 rounded-full">
            <div
              ref={progressRef}
              className="w-full bg-gradient-to-b from-[#f34915ea] via-orange-500 to-red-500 rounded-full"
              style={{ height: "100%" }}
            />
          </div>
          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map(({ id, title, company, period, description, Icon }, i) => (
              <div key={id} className="relative flex items-center">
                <div
                  ref={(el) => {
                    cards.current[i] = el;
                  }}
                  className={`w-full md:w-5/12 ${
                    i % 2 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"
                  }`}
                >
                  <div
                    className="relative bg-slate-800 border border-slate-700 rounded-xl p-6 md:p-8
                      hover:border-amber-500 transition duration-300 hover:shadow-lg hover:shadow-amber-500/20"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{title}</h3>
                        <p className="text-amber-400 font-medium">{company}</p>
                      </div>
                      <span className="absolute top-2 right-2.5 text-sm font-semibold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">
                        {period}
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-4">{description}</p>
                    <div className="h-1 w-full bg-gradient-to-r from-[#f34915ea]/20 via-orange-500/20 to-red-500/20 rounded-full" />
                  </div>
                </div>
                <div
                  ref={(el) => {
                    dots.current[i] = el;
                  }}
                  className="absolute -top-10 md:top-20 left-[47%] md:left-[calc(50%-24px)] w-12 h-12
                    bg-gradient-to-r from-[#f34915ea] via-orange-500 to-red-500 rounded-full border-4 border-slate-950
                    z-10 shadow-lg flex items-center justify-center ring-2 ring-amber-400/30 hover:ring-amber-500/50
                    transition duration-300"
                >
                  <Icon size={20} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
