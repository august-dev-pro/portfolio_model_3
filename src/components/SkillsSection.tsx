import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLaptopCode,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faCode,
    title: "Web Development",
    description:
      "Building responsive and modern web applications tailored to your needs.",
  },
  {
    icon: faLaptopCode,
    title: "Mobile Development",
    description: "Crafting performant and user-friendly mobile applications.",
  },
  {
    icon: faDatabase,
    title: "Database Management",
    description: "Optimizing and managing databases for seamless performance.",
  },
];

const skills = [
  { label: "JavaScript", percentage: 90 },
  { label: "React", percentage: 85 },
  { label: "Node.js", percentage: 80 },
  { label: "MongoDB", percentage: 75 },
  { label: "Flutter", percentage: 70 },
];

const SkillsSection = () => {
  return (
    <section
      id="services&skills"
      className="section bg-slate-900 bg-opacity-60"
    >
      <div className="section-container">
        <div className="">
          <div className="section_title">services offered & skills</div>
        </div>
        <div className="section_content mt-10 flex flex-col gap-10">
          {/* Services */}
          <div className="w-full">
            <div className="capitalize text-[25px] font-semibold mb-4">
              services offered
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-slate-950 border-b-8 rounded-bl-[1rem] border-pink-500 rounded-sm hover:bg-slate-800 transition"
                >
                  <FontAwesomeIcon
                    className="text-pink-500 w-[100px]"
                    icon={service.icon}
                  />

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Skills */}
          <div className="w-full">
            <div className="capitalize text-[25px] font-semibold mb-4">
              skills
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="text-center border w-full rounded-lg  px-10 py-4"
                >
                  {/* Circular Progress */}
                  <div className="relative w-20 h-20 mx-auto">
                    <svg className="w-full h-full">
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        className="text-gray-600 stroke-current fill-none"
                        strokeWidth="8"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        className="text-pink-500 stroke-current fill-none"
                        strokeWidth="8"
                        strokeDasharray="226"
                        strokeDashoffset={226 - (226 * skill.percentage) / 100}
                        style={{ transition: "stroke-dashoffset 1s" }}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
                      {skill.percentage}%
                    </span>
                  </div>
                  {/* Skill Title */}
                  <h3 className="mt-4 text-xl text-white">{skill.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
