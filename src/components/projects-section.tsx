import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoArrowUndoSharp } from "react-icons/io5";
import { TfiGithub } from "react-icons/tfi";

const projects = [
  {
    title: "RocketBoost",
    description:
      "A productivity tool built with React and React-icons to help users boost their workflow.",
    image: "/images/png/01-project.png",
    period: "01 june 2025",
    rating: 4.8,
    cost: "$49.99",
    view:"1.2",
    tags: ["React", "React-icons"],
    liveUrl: "https://rocketboost.vercel.app/",
    githubUrl: "https://github.com/manandevs/rocketboost",
  },
  {
    title: "Abdulbasit Portfolio",
    description:
      "A personal portfolio website built using Next.js, TypeScript, Prisma, and Socket.io.",
    image: "/images/png/02-project.png",
    period: "05 june 2025",
    rating: 4.5,
    cost: "$29.99",
        view:"1.2",
    tags: ["Next.js", "TypeScript", "GSAP"],
    liveUrl: "https://abdulbasit-portfolio-alpha.vercel.app/",
    githubUrl: "https://github.com/manandevs/abdulbasit-portfolio",
  },
  {
    title: "(coming soon)",
    description: "A new project is on the way. Stay tuned for updates!",
    image: "/placeholder.svg",
    period: "",
    rating: 0,
    cost: "$0.00",
        view:"",
    tags: ["...?", "...?", "...?"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="bg-slate-950  max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-80 h-[400px] relative bg-slate-600 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 mx-auto"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={320}
                  height={192}
                  className="w-full h-full object-cover cursor-not-allowed"
                />

                <div className="absolute inset-0 gap-3.5 flex items-center justify-center">
                  {/* GitHub Link */}
                  <Link
                    href={project.githubUrl}
                    className="p-1 border-[1px] border-gray-500 hover:bg-gray-200 rounded-md opacity-0 group-hover:opacity-100 z-30 hover:scale-[1.2] transition-all duration-150"
                  >
                    <TfiGithub className="w-6 h-6 text-white hover:text-gray-900 transition-colors duration-300" />
                  </Link>

                  {/* Live Project Link */}
                  <Link
                    href={project.liveUrl}
                    className="p-1 border-[1px] border-gray-500 hover:bg-gray-200 rounded-md opacity-0 group-hover:opacity-100 z-30 hover:scale-[1.2] transition-all duration-150"
                  >
                    <IoArrowUndoSharp className="w-6 h-6 text-white rotate-[135deg] hover:text-gray-900 transition-colors duration-300" />
                  </Link>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 fill-current text-gray-100 cursor-pointer" />
                  <span className="text-sm font-medium text-gray-100">
                    {project.rating}
                  </span>

                  {/* User Avatars */}
                  <div className="flex -space-x-1 ml-2 items-center">
                    <div className="cursor-pointer w-6 h-6 rounded-full bg-orange-400 border-2 border-white flex items-center justify-center">
                      <span className="text-xs font-bold text-white">👤</span>
                    </div>
                    <div className="cursor-pointer w-6 h-6 rounded-full bg-gray-600 border-2 border-white flex items-center justify-center">
                      <span className="text-xs font-bold text-white">👤</span>
                    </div>
                    <div className="cursor-pointer w-6 h-6 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center">
                      <span className="text-xs font-bold text-white">👤</span>
                    </div>
                    <span className="ml-2 text-xs text-gray-200">{project.view}k+ views</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-200 leading-relaxed mb-6">
                  {project.description}
                </p>

                <Link
                  href={project.liveUrl}
                  className="cursor-pointer absolute bottom-5 w-[80%] py-3 px-6 rounded-full font-medium bg-gray-900 text-white hover:text-white hover:bg-gray-800 transition-colors duration-300 group-hover:bg-white group-hover:text-gray-900 flex justify-center items-center gap-3"
                >
                  <span>See Project</span>
                  <FaArrowUpRightFromSquare className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
