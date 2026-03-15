"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Hexagon } from "lucide-react";
import Link from "next/link";

import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { messages } = useLanguage();

  const navLinks = [
    { name: messages.nav.about, href: "#about" },
    { name: messages.nav.projects, href: "#projects" },
    { name: messages.nav.studies, href: "#studies" },
    { name: messages.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 w-full flex justify-center z-50 px-4 pointer-events-none">
      <nav
        className={cn(
          "w-full max-w-4xl rounded-full transition-all duration-500 pointer-events-auto",
          scrolled
            ? "glass-pill shadow-2xl py-2 px-6"
            : "bg-black/20 backdrop-blur-md border border-white/5 py-4 px-8"
        )}
      >
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <Hexagon className="h-6 w-6 text-indigo-400 group-hover:text-fuchsia-400 transition-colors" />
            <span className="font-display font-bold text-lg tracking-wider uppercase text-white">
              DGV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 p-1.5 rounded-full bg-white/5 border border-white/10 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-neutral-400 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageToggle className="hidden sm:inline-flex" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-400 hover:text-white focus:outline-hidden"
              aria-label={isOpen ? messages.menu.close : messages.menu.open}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="md:hidden overflow-hidden rounded-2xl bg-[#0a0a0f] border border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                <LanguageToggle stacked onSelect={() => setIsOpen(false)} />
                <div className="space-y-2 mt-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-sm font-display font-semibold tracking-wider uppercase text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
