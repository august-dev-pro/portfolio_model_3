import React, { useState } from "react";
import image1 from "../imgs/OIP2.jpeg";
import Image from "next/image";
import Link from "next/link";
const projects = [
  {
    title: "E-Commerce Website",
    category: "Web",
    image: image1, // Remplacez par vos images
    description: "A modern and responsive e-commerce website.",
    link: "#",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile",
    image: image1,
    description: "A secure and user-friendly banking application.",
    link: "#",
  },
  {
    title: "Landing Page for SaaS",
    category: "Landing Pages",
    image: image1,
    description: "A sleek landing page for a SaaS product.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    category: "Web",
    image: image1,
    description: "A personal portfolio showcasing creative work.",
    link: "#",
  },
];

const categories = ["All", "Web", "Mobile", "Landing Pages"];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="portfolio" className="section bg-slate-900 bg-opacity-60">
      <div className="section-container">
        {/* Title */}
        <h2 className="section_title ">Portfolio</h2>

        {/* Tabs */}
        <div className=" mt-10 gap-4 mb-8 justify-center hidden sm:flex">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md border border-pink-500 font-semibold transition-all ${
                activeTab === category
                  ? "bg-pink-500 text-white"
                  : " text-white hover:bg-pink-500"
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className=" hidden sm:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-slate-800 overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover"
              />

              {/* Details */}
              <div
                className="absolute h-1/2  top-[50%] md:top-0 md:h-full  inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center
                transition-opacity duration-300 sm:p-4 opacity-100 md:opacity-0 group-hover:opacity-100"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-2 hidden md:block">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="text-sm w-fit px-2 py-1 border hover:text-white hover:bg-pink-500 transition-all border-pink-500 rounded-xl text-pink-500 font-semibold"
                >
                  {project.category}
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="grid gap-6 sm:hidden">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-slate-800 overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover"
              />

              {/* Details */}
              <div
                className="absolute h-1/2  top-[50%] md:top-0 md:h-full  inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center
                transition-opacity duration-300 sm:p-4 opacity-100 md:opacity-0 group-hover:opacity-100"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-2 hidden md:block">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="text-sm w-fit px-2 py-1 border hover:text-white hover:bg-pink-500 transition-all border-pink-500 rounded-xl text-pink-500 font-semibold"
                >
                  {project.category}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
