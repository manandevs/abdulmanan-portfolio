"use client";

import React from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function ContactSection() {
  const linkClass =
    "flex items-center text-amber-400 hover:text-amber-300 transition group";

  const fields = [
    { id: "name", label: "Full Name", type: "text", placeholder: "Your Name" },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "you@example.com",
    },
  ];

  const inputClass =
    "w-full rounded-md border px-3 py-2 outline-none transition bg-slate-800 border-slate-700 text-neutral-100 placeholder:text-neutral-400 focus:ring-amber-500 focus:border-amber-500";

  const links = [
    {
      href: "mailto:abdul@example.com",
      icon: <Mail className="w-5 h-5 mr-3 group-hover:animate-pulse" />,
      text: "abdul@example.com",
    },
    {
      href: "https://linkedin.com/in/yourprofile",
      icon: (
        <Linkedin className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
      ),
      text: "LinkedIn Profile",
    },
    {
      href: "https://github.com/yourusername",
      icon: (
        <Github className="w-5 h-5 mr-3 group-hover:rotate-[12deg] transition-transform" />
      ),
      text: "GitHub Profile",
    },
  ];

  return (
    <section id="contact" className="py-20 text-neutral-100">
      <div className="bg-slate-950  max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-400">
          Get In Touch
        </h2>
        <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
          Have a project in mind? Let&apos;s bring your ideas to life together.
        </p>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12 text-left">
          <div className="space-y-6">
            <p className="text-lg text-neutral-300">
              I’m always excited to discuss new projects or collaboration
              opportunities.
            </p>
            <div className="space-y-4">
              {links.map(({ href, icon, text }) => (
                <a
                  key={text}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {icon} {text}
                </a>
              ))}
            </div>
          </div>

          <form className="bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-6">
            {fields.map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block text-sm font-medium text-amber-400 mb-1"
                >
                  {label}
                </label>
                <input
                  id={id}
                  name={id}
                  type={type}
                  required
                  placeholder={placeholder}
                  className={inputClass}
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-amber-400 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your message..."
                className={inputClass}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold py-3 rounded-md flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 group"
            >
              Send Message{" "}
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
