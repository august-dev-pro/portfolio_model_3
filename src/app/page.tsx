"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Sidebar from "@/components/SideBar";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sideBarItems = [
    { label: "Home", link: "#hero" },
    { label: "About Me", link: "#about" },
    { label: "Skills & seervices", link: "#services&skills" },
    { label: "Portfolio", link: "#portfolio" },
    { label: "Contact Me", link: "#contact" },
    { label: "Download CV", link: "#resume" },
  ];
  return (
    <div className="flex h-screen">
      {/* Barre latérale pour les grands écrans */}
      <div className="hidden sm:flex">
        <Sidebar />
      </div>

      {/* Navigation mobile */}
      <div className="sm:hidden fixed top-0 left-0 right-0 bg-slate-900 z-50 shadow-md">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl uppercase text-white font-bold">webpress</h1>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hover:text-pink-500 text-white transition-all"
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
        {menuOpen && (
          <nav className="bg-slate-900 text-white py-4">
            <ul className="flex flex-col gap-4 text-center">
              {sideBarItems.map((item, index) => (
                <Link
                  onClick={() => setMenuOpen(false)}
                  key={index}
                  href={item.link}
                  className="hover:text-pink-500 transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Contenu principal */}
      <div className="flex-1 overflow-y-auto">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
