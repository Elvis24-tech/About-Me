import React from "react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-blue-900 text-white py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="max-w-xl space-y-5 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I’m Elvis Muasya
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            A passionate Fullstack Developer skilled in HTML, CSS, JavaScript, React, Tailwind CSS, Python, Flask, Django & UI/UX Specialist. I build fast, dynamic, and modern web applications.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button
              onClick={scrollToContact}
              className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
            >
              Get in Touch
            </button>
            <a
              href="#projects"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
            >
              See My Work
            </a>
          </div>
        </div>
        <div className="w-60 h-60 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <img
            src="/images/elvis.jpg" 
            alt="Elvis Kariuki"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-20"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,160L60,170.7C120,181,240,203,360,186.7C480,171,600,117,720,90.7C840,64,960,64,1080,85.3C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
