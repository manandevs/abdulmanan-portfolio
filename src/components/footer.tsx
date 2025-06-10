"use client"

import { ArrowUp, Heart } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-neutral-400 flex items-center gap-2">
              © 2024 abdul.dev. Made with <Heart className="text-red-500" /> and lots of coffee.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-amber-500 transition-colors duration-300 group"
          >
            <span>Back to top</span>
            <ArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}
