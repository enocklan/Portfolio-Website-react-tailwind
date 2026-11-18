import React from "react";
import profile from "../assets/profile.jpeg";

function Home() {
  return (
    <section
      id="home"
      class="min-h-screen bg-green-100 flex items-center justify-center px-8 py-16"
    >

      {/* Main Container */}
      <div class="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Side - Introduction */}
        <div class="flex-1 text-center md:text-left">

          {/* Welcome Message */}
          <p class="text-green-700 font-semibold text-lg mb-3">
            Welcome to my portfolio
          </p>

          {/* Name */}
          <h1 class="text-4xl md:text-6xl font-bold text-black mb-4">
            Hello, I'm <span class="text-green-700">Enock Langat</span>
          </h1>

          {/* Profession */}
          <h2 class="text-2xl font-semibold text-black mb-5">
            Frontend Developer
          </h2>

          {/* Description */}
          <p class="text-gray-700 text-lg leading-relaxed mb-8">
            I am passionate about building beautiful, responsive,
            and user-friendly websites. I enjoy learning new
            technologies and turning ideas into reality.
          </p>

          {/* Buttons */}
          <div class="flex flex-wrap gap-4 justify-center md:justify-start">

            <a
              href="#about"
              class="nav"
            >
              About Me
            </a>

            <a
              href="#contact"
              class="nav"
            >
              Get in Touch
            </a>

          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div class="flex-1 flex justify-center">

          <img
            src={profile}
            alt="Profile"
            class="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-8 border-white shadow-xl"
          />

        </div>

      </div>
    </section>
  );
}

export default Home;
