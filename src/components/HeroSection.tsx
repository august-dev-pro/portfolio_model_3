import Image from "next/image";
import React from "react";
import user from "../imgs/sophiedurand.jpeg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="hero" className="section">
      <div className="section-container">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          {/* Texte de présentation */}
          <div className="text-center lg:min-w-[350px] lg:text-left flex flex-col gap-5 flex-1">
            <h1 className="text-4xl lg:text-[45px] font-bold">
              Bonjour, je suis{" "}
              <span className="text-pink-500">Sophie Durand</span>
            </h1>
            <div className="text-2xl">
              <span className="text-pink-500 font-bold ">Développeuse web</span>
              <span className=""> basé en </span>
              <span className="text-pink-500 font-bold">javaScript</span>
            </div>
            <p className="text-lg">
              passionnée, spécialisée dans la création d&apos;applications
              modernes et performantes. J&apos;aime transformer des idées en
              réalité.
            </p>
            <div className="callBack justify-center lg:justify-start flex gap-10 capitalize">
              {/* Bouton "Hire Me" */}
              <Link
                className="bg-pink-500 text-white font-bold rounded-md md:px-[30px] p-2 md:py-2 transition duration-300 ease-in-out hover:bg-pink-600 hover:shadow-lg"
                href={"#"}
              >
                hire me
              </Link>

              {/* Bouton "See My Projects" */}
              <Link
                className="bg-pink-500 bg-opacity-20 p-2  font-bold rounded-md md:px-[30px] md:py-2 border border-pink-500 transition duration-300 ease-in-out hover:bg-pink-600  hover:bg-opacity-100 "
                href={"#"}
              >
                see my projects
              </Link>
            </div>
          </div>

          {/* Image */}

          <div className=" md:mx-auto">
            <Image
              src={user}
              alt="Portrait de Sophie Durand"
              objectFit="cover"
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
