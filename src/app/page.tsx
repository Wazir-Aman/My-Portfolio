// portfolio.tsx
"use client";
import ProfilePhoto from "@/components/profilepic";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/button";
// import Image from "next/image";
import React from "react";
import SkillImage from "@/components/SkillImage";

export default function Portfolio() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Frontend Developer", "Cybersecurity Learner"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 1000); // 1 second delay

    return () => clearInterval(interval);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const [showDetails, setShowDetails] = useState([false, false, false]);

  return (
    <div>
      <header className="w-full fixed top-0 z-50">
        <nav className="bg-gray-800 text-white px-4 md:px-8 py-4 shadow-md ">
          {/* Top Nav Row */}
          <div className="flex items-center justify-between">
            {/* Logo on Left */}
            <h1 className="text-3xl font-bold">
              Port
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
                folio
              </span>
            </h1>

            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-6 items-center">
              <li className="hover:text-blue-300">
                <a href="#About">About</a>
              </li>
              <li className="hover:text-blue-300">
                <a href="#Skills">Skills</a>
              </li>
              <li className="hover:text-blue-300">
                <a href="#Web-Projects">WebApps</a>
              </li>
              <li className="hover:text-blue-300">
                <a href="#App-Projects">Apps</a>
              </li>
              <li className="hover:text-blue-300">
                <a href="#Contact">Contact</a>
              </li>
              <li>
                <Button className="bg-blue-500 hover:bg-blue-600 transition">
                  <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                    View CV
                  </a>
                </Button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Dropdown */}
          {isOpen && (
            <ul className="flex flex-col space-y-4 mt-4 md:hidden">
              <li className="hover:text-blue-300">
                <a href="#About">About</a>
              </li>
              <li className="hover:text-blue-300">
                <a href="#Skills">Skills</a>
              </li>
              <li className="hover:text-blue-300">
                <a href="#Web-Projects">WebApps</a>
              </li>
              <li className="hover:text-blue-300">
                <a href="#App-Projects">Apps</a>
              </li>
              <li className="hover:text-blue-300">
                <a href="#Contact">Contact</a>
              </li>
              <li>
                <Button className="bg-blue-500 hover:bg-blue-600 transition">
                  <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                    View CV
                  </a>
                </Button>
              </li>
            </ul>
          )}
        </nav>
      </header>

      <main
        id="About"
        className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16"
      >
        {/* Left Half - Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <ProfilePhoto />
        </div>

        {/* Right Half - Intro */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4sm font-bold">Hello, I am</h1>
          <h1 className="text-4xl font-bold">Wazir Aman</h1>
          <h1 className="text-2xl font-bold">
            And I'm{" "}
            <span className="text-blue-400">
              <Typewriter
                words={["a MERN Stack Developer", "a React Native Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={500}
              />
            </span>
          </h1>

          <p className="text-sm text-gray-400">
            I build modern web apps using Next.js, Tailwind, Express.js,
            MongoDB, Node.js and I craft cross-platform mobile experiences with
            React Native and NativeWind, powered by a robust MERN backend for
            seamless performance and scalability..
          </p>
          <div className="flex space-x-6 mt-4 justify-center md:justify-start">
            <a
              href="https://instagram.com/wazir.aman02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-400 hover:scale-110 transition" />
            </a>
            <a
              href="https://facebook.com/wazeer.aman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-8 h-8 text-blue-600 hover:text-blue-500 hover:scale-110 transition" />
            </a>
            <a
              href="https://linkedin.com/in/wazir-aman-b5986230a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-8 h-8 text-blue-400 hover:text-blue-300 hover:scale-110 transition" />
            </a>
            <a
              href="https://github.com/Wazir-Aman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-8 h-8 text-white hover:text-gray-300  duration-300 transition hover:scale-110 " />
            </a>
          </div>
        </div>
      </main>

      <main
        id="Skills"
        className="min-h-screen bg-gray-900 text-white  px-6 md:px-16"
      >
        <div className="flex items-center justify-center mb-10">
          <h1 className="text-3xl font-bold">
            My
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Skills
            </span>
          </h1>
        </div>
        <div className="space-y-10 p-6">
          {/* Languages */}
          <div>
            <h2 className="text-xl flex justify-center font-semibold mb-4 text-white/90">
              Languages
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              <SkillImage src="/JavaScript.svg" />
              <SkillImage src="/TypeScript.svg" />
              <SkillImage src="/Python-Light.svg" />
              <SkillImage src="/Java-Light.svg" />
              <SkillImage src="/HTML.svg" />
              <SkillImage src="/CSS.svg" />
            </div>
          </div>

          {/* Frontend */}
          <div>
            <h2 className="text-xl flex justify-center font-semibold mb-4 text-white/90">
              Frontend
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              <SkillImage src="/React-Light.svg" />
              <SkillImage src="/NextJS-Light.svg" />
              <SkillImage src="/react-native.svg" />
              <SkillImage src="/TailwindCSS-Light.svg" />
              <SkillImage src="/Vite-Light.svg" />
            </div>
          </div>

          {/* Backend */}
          <div>
            <h2 className="text-xl flex justify-center font-semibold mb-4 text-white/90">
              Backend
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              <SkillImage src="/NodeJS-Light.svg" />
              <SkillImage src="/ExpressJS-Light.svg" />
              <SkillImage src="/MongoDB.svg" />
              <SkillImage src="/MySQL-Light.svg" />
              <SkillImage src="/Firebase-Light.svg" />
              <SkillImage src="/AWS-Light.svg" />
            </div>
          </div>

          {/* Dev Tools */}
          <div>
            <h2 className="text-xl flex justify-center font-semibold  mb-4 text-white/90">
              Dev Tools
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              <SkillImage src="/Git.svg" />
              <SkillImage src="/Github-Light.svg" />
              <SkillImage src="/Postman.svg" />
              <SkillImage src="/Azure-Light.svg" />
            </div>
          </div>
        </div>
      </main>

      <main
        id="Web-Projects"
        className="min-h-screen bg-gray-900 text-white  px-6 md:px-16"
      >
        <div className="flex items-center justify-center mb-10">
          <h1 className="text-3xl font-bold">
            Latest-
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Web Projects
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {/* <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2">Automated GreenHouse</h2>
            <p className="text-gray-400 mb-4">
              My Final year project of University.
            </p>
            <Button
              onClick={() =>
                window.open("https://my-fyp-lime.vercel.app", "_blank")
              }
              variant="primary"
              size="md"
              className="w-full"
            >
              View Project
            </Button>
          </div> */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2">Project Title</h2>
            <p className="text-gray-400 mb-4">On pending......</p>
            <Button variant="primary" size="md" className="w-full">
              View Project
            </Button>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2">Project Title</h2>
            <p className="text-gray-400 mb-4">On pending......</p>
            <Button variant="primary" size="md" className="w-full">
              View Project
            </Button>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2">Project Title</h2>
            <p className="text-gray-400 mb-4">On pending......</p>
            <Button variant="primary" size="md" className="w-full">
              View Project
            </Button>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2">Project Title</h2>
            <p className="text-gray-400 mb-4">On pending......</p>
            <Button variant="primary" size="md" className="w-full">
              View Project
            </Button>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2">Project Title</h2>
            <p className="text-gray-400 mb-4">On pending......</p>
            <Button variant="primary" size="md" className="w-full">
              View Project
            </Button>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2">Project Title</h2>
            <p className="text-gray-400 mb-4">On pending......</p>
            <Button variant="primary" size="md" className="w-full">
              View Project
            </Button>
          </div>
        </div>
      </main>
      <main
        id="App-Projects"
        className="min-h-screen bg-gray-900 text-white  px-6 md:px-16"
      >
        <div className="flex items-center justify-center mb-10">
          <h1 className="text-3xl font-bold">
            Latest-
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
              App Projects
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {/* <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2">Automated GreenHouse</h2>
            <p className="text-gray-400 mb-4">
              My Final year project of University.
            </p>
            <Button
              onClick={() =>
                window.open("https://my-fyp-lime.vercel.app", "_blank")
              }
              variant="primary"
              size="md"
              className="w-full"
            >
              View Project
            </Button>
          </div> */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2">Project Title</h2>
            <p className="text-gray-400 mb-4">On pending......</p>
            <Button variant="primary" size="md" className="w-full">
              View Project
            </Button>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2">Project Title</h2>
            <p className="text-gray-400 mb-4">On pending......</p>
            <Button variant="primary" size="md" className="w-full">
              View Project
            </Button>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2">Project Title</h2>
            <p className="text-gray-400 mb-4">On pending......</p>
            <Button variant="primary" size="md" className="w-full">
              View Project
            </Button>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2">Project Title</h2>
            <p className="text-gray-400 mb-4">On pending......</p>
            <Button variant="primary" size="md" className="w-full">
              View Project
            </Button>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2">Project Title</h2>
            <p className="text-gray-400 mb-4">On pending......</p>
            <Button variant="primary" size="md" className="w-full">
              View Project
            </Button>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2">Project Title</h2>
            <p className="text-gray-400 mb-4">On pending......</p>
            <Button variant="primary" size="md" className="w-full">
              View Project
            </Button>
          </div>
        </div>
      </main>

      <footer
        id="Contact"
        className="bg-gray-800 text-white py-8 px-6 md:px-16"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start space-x-4">
            <FaPhoneAlt className="text-blue-400 mt-1" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-sm text-gray-300">+92 316 541 2644</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaEnvelope className="text-blue-400 mt-1" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-sm text-gray-300">waziramanwork@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-blue-400 mt-1" />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p className="text-sm text-gray-300">
                River Garden, Islamabad, Pakistan
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaClock className="text-blue-400 mt-1" />
            <div>
              <h4 className="font-semibold">Working Hours</h4>
              <p className="text-sm text-gray-300">
                Mon - Fri, 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          Designed By Wazir Aman. All rights reserved.
        </div>
      </footer>
    </div>
  );
}