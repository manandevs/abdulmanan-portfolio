"use client";
import {
  BiLogoMongodb,
  BiLogoPostgresql,
} from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import {
  FaAws,
  FaDocker,
  FaGithubAlt,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiApollographql,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const skillsData = [
  { name: "JavaScript", icon: DiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: RiNextjsFill, color: "text-white" },
  { name: "Node.js", icon: FaNode, color: "text-green-400" },
  { name: "Python", icon: FaPython, color: "text-blue-300" },
  { name: "PostgreSQL", icon: BiLogoPostgresql, color: "text-blue-500" },
  { name: "MongoDB", icon: BiLogoMongodb, color: "text-green-500" },
  { name: "AWS", icon: FaAws, color: "text-orange-400" },
  { name: "Docker", icon: FaDocker, color: "text-blue-400" },
  { name: "Git", icon: FaGithubAlt, color: "text-orange-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
  { name: "React Native", icon: TbBrandReactNative, color: "text-purple-400" },
  { name: "GraphQL", icon: SiApollographql, color: "text-pink-400" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
];

export default function SkillsSection() {
  const renderRow = (skills: typeof skillsData, reverse = false) => (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 md:w-32 bg-gradient-to-r from-slate-900 via to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-1 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
      <div
        className={`flex w-max whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: `${30}s` }}
      >
        {[...skills, ...skills].map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <div
              key={`${skill.name}-${idx}`}
              className="group cursor-pointer mx-2 my-1 bg-slate-800 rounded-full border border-slate-700 hover:border-amber-500 transition-all duration-300 hover:scale-105"
            >
              <div className="group grayscale hover:grayscale-0 w-full h-full px-4 py-3 flex items-center flex-shrink-0 gap-3">
                <Icon size={22} className={`${skill.color}`} />
                <span className="text-white whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="w-full">
        <div className="text-center mb-7">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-7 text-amber-400 leading-0">
            Skills & Technologies
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>
      </div>
      <div className="w-full overflow-hidden mx-auto">
        {renderRow(skillsData)}
        {renderRow(skillsData, true)}
        {renderRow(skillsData)}
      </div>
    </section>
  );
}
