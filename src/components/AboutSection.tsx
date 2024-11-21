import React from "react";
const languagesM = [
  { label: "english", pourcentage: "85%" },
  { label: "spanish", pourcentage: "80%" },
  { label: "portugais", pourcentage: "75%" },
  { label: "french", pourcentage: "90%" },
];
const AboutSection = () => {
  return (
    <div id="about" className="section bg-slate-800 bg-opacity-40">
      <div className="section-container">
        <div className="section_content flex flex-col gap-10 lg:flex-row justify-between">
          <div className="lg:max-w-[420px]">
            <h2 className="section_title text-white">About Me</h2>
            <p className="section_sub font-bold text-white">
              Passionate developer dedicated to building functional and visually
              appealing web applications.
            </p>
            <p className="my-4">
              I am a web developer specializing in creating modern, responsive,
              and user-friendly interfaces. With a focus on clean code and
              performance, I transform ideas into interactive experiences.
            </p>
            <p className="my-4">
              Outside of coding, I enjoy learning new technologies, contributing
              to open-source projects, and exploring innovative design trends.
            </p>
          </div>

          <div className="w-full flex flex-col gap-10 ">
            <div className="w-full">
              <div className="capitalize text-[25px] font-semibold mb-2">
                statistics
              </div>
              <div className="infos grid gap-6 lg:gap-1 md:grid-cols-2 lg:grid-cols-3 text-center">
                <div className="border rounded-md p-2 w-full">
                  <div className="text-[30px] font-extrabold text-pink-500">
                    78
                  </div>
                  <div className="">projects completed</div>
                </div>
                <div className="border rounded-md p-2">
                  <div className="text-[30px] font-extrabold text-pink-500">
                    77
                  </div>
                  <div className="capitalize">satistied clients</div>
                </div>
                <div className="border rounded-md p-2">
                  <div className="text-[30px] font-extrabold text-pink-500">
                    13+
                  </div>
                  <div className="capitalize">wining awards</div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="capitalize text-[25px] font-semibold mb-2">
                language spoken
              </div>
              <div className="language-purcent w-full grid sm:grid-cols-2 gap-4">
                {languagesM.map((language, index) => (
                  <div key={index} className=" min-w-[150px]">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 capitalize">
                        {language.label}
                      </span>
                      <span className="text-gray-400">
                        {language.pourcentage}
                      </span>
                    </div>
                    <div className="w-full bg-gray-600 h-2 rounded-full">
                      <div
                        className="h-full bg-pink-500 rounded-full"
                        style={{ width: language.pourcentage }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
