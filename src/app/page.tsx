// portfolio.tsx
"use client";
import ProfilePhoto from "@/components/profilepic";
import { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import { Button } from "@/components/button";
import React from "react";

export default function Portfolio() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Frontend Developer', 'Cybersecurity Learner'];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 1000); // 1 second delay


    return () => clearInterval(interval);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  return <div>
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
            <li className="hover:text-blue-300"><a href="#About">About</a></li>
            <li className="hover:text-blue-300"><a href="#Skills">Skills</a></li>
            <li className="hover:text-blue-300"><a href="#Projects">Projects</a></li>
            <li className="hover:text-blue-300"><a href="#Services">Services</a></li>
            <li className="hover:text-blue-300"><a href="#Contact">Contact</a></li>
            <li>
              <Button className="bg-blue-500 hover:bg-blue-600 transition">
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">View CV</a>
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
            <li className="hover:text-blue-300"><a href="#About">About</a></li>
            <li className="hover:text-blue-300"><a href="#Skills">Skills</a></li>
            <li className="hover:text-blue-300"><a href="#Projects">Projects</a></li>
            <li className="hover:text-blue-300"><a href="#Services">Services</a></li>
            <li className="hover:text-blue-300"><a href="#Contact">Contact</a></li>
            <li>
              <Button className="bg-blue-500 hover:bg-blue-600 transition">
                Download CV
              </Button>
            </li>
          </ul>
        )}
      </nav>
    </header>

    <main id="About" className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16">

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
              words={['a Frontend Developer', 'a Cybersecurity Learner']}
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
          I build modern web apps using Next.js, Tailwind, Firebase and love exploring the world of ethical hacking and security.
        </p>
        <div className="flex space-x-6 mt-4 justify-center md:justify-start">
          <a href="https://instagram.com/wazir.aman02" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-400 hover:scale-110 transition" />
          </a>
          <a href="https://facebook.com/wazeer.aman" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-8 h-8 text-blue-600 hover:text-blue-500 hover:scale-110 transition" />
          </a>
          <a href="https://linkedin.com/in/wazir-aman-b5986230a" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-8 h-8 text-blue-400 hover:text-blue-300 hover:scale-110 transition" />
          </a>
          <a href="https://github.com/Wazir-Aman" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-8 h-8 text-white hover:text-gray-300  duration-300 transition hover:scale-110 " />
          </a>
        </div>
      </div>
    </main>


    <main id="Skills" className="min-h-screen bg-gray-900 text-white  px-6 md:px-16">
      <div className="flex items-center justify-center mb-10">
        <h1 className="text-3xl font-bold">
          My
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
            Skills
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">HTML</h2>
          <p className="text-gray-400">I have a strong foundation in semantic and accessible HTML, which allows me to structure content effectively and build clean, meaningful layouts for modern websites.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">CSS</h2>
          <p className="text-gray-400">I use CSS to craft responsive and visually appealing interfaces, with a growing focus on layout techniques like Flexbox and Grid for cross-device compatibility.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">JavaScript</h2>
          <p className="text-gray-400">My JavaScript journey includes creating interactive features, DOM manipulation, and problem-solving through functions, loops, and modern ES6+ syntax.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">MYSQL</h2>
          <p className="text-gray-400">I understand the basics of relational databases and use MySQL for creating, managing, and querying structured data in small to medium-sized applications.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">React.js</h2>
          <p className="text-gray-400">I’m currently building projects using React.js to master component-based development, hooks, and state management while exploring real-world use cases.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Next.js</h2>
          <p className="text-gray-400">I'm actively learning Next.js to combine the power of React with performance-optimized server-side rendering and modern routing for scalable web apps.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">CSS Tailwind</h2>
          <p className="text-gray-400">Tailwind CSS has become my go-to utility-first framework for designing consistent and responsive UIs efficiently without writing custom CSS from scratch.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Cybersecurity</h2>
          <p className="text-gray-400">With a growing interest in cybersecurity, I’m exploring essential tools and techniques like ethical hacking, network monitoring, and secure coding practices to strengthen digital defense skills.</p>
        </div>
      </div>
    </main>

    <main id="Projects" className="min-h-screen bg-gray-900 text-white  px-6 md:px-16">
      <div className="flex items-center justify-center mb-10">
        <h1 className="text-3xl font-bold">
          Latest
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
            Projects
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Project Title</h2>
          <p className="text-gray-400 mb-4">Brief description of the project.</p>
          <Button variant="primary" size="md" className="w-full">
            View Project
          </Button>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Project Title</h2>
          <p className="text-gray-400 mb-4">Brief description of the project.</p>
          <Button variant="primary" size="md" className="w-full">
            View Project
          </Button>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Project Title</h2>
          <p className="text-gray-400 mb-4">Brief description of the project.</p>
          <Button variant="primary" size="md" className="w-full">
            View Project
          </Button>
        </div>
      </div>
    </main>


    <main id="Services" className="min-h-screen bg-gray-900 text-white  px-6 md:px-16">
      <div className="flex items-center justify-center mb-10">
        <h1 className="text-3xl font-bold">
          My
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
            Services
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Service Title</h2>
          <p className="text-gray-400 mb-4">Brief description of the service.</p>
          <Button variant="primary" size="md" className="w-full">
            Read More
          </Button>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Service Title</h2>
          <p className="text-gray-400 mb-4">Brief description of the service.</p>
          <Button variant="primary" size="md" className="w-full">
            Read More
          </Button>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Service Title</h2>
          <p className="text-gray-400 mb-4">Brief description of the service.</p>
          <Button variant="primary" size="md" className="w-full">
            Read More
          </Button>
        </div>
      </div>
    </main>

    <footer id="Contact" className="bg-gray-800 text-white py-8 px-6 md:px-16">
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
            <p className="text-sm text-gray-300">River Garden, Islamabad, Pakistan</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FaClock className="text-blue-400 mt-1" />
          <div>
            <h4 className="font-semibold">Working Hours</h4>
            <p className="text-sm text-gray-300">Mon - Fri, 9:00 AM - 6:00 PM</p>
          </div>
        </div>

      </div>

      <div className="mt-8 text-center text-gray-400 text-sm">
        Designed By Wazir Aman. All rights reserved.
      </div>
    </footer>
  </div>;


}