"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter, Mail, ExternalLink, Calendar, MapPin, Briefcase, BookOpen } from "lucide-react"
import Image from "next/image"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"

const jobTitles = [
  "Full Stack Developer",
  "React Specialist",
  "UI/UX Designer",
  "Frontend Engineer",
  "JavaScript Expert",
]

const skillsData = [
  { skill: "React", level: 95 },
  { skill: "TypeScript", level: 90 },
  { skill: "Node.js", level: 85 },
  { skill: "Python", level: 80 },
  { skill: "Design", level: 75 },
  { skill: "DevOps", level: 70 },
]

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "Socket.io", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with location-based forecasts",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "API Integration", "Charts"],
    github: "#",
    demo: "#",
  },
]

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for structuring large React applications...",
    date: "Dec 15, 2024",
    readTime: "5 min read",
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies in web development...",
    date: "Dec 10, 2024",
    readTime: "8 min read",
  },
  {
    title: "Mastering TypeScript",
    excerpt: "Advanced TypeScript patterns and techniques for better code...",
    date: "Dec 5, 2024",
    readTime: "6 min read",
  },
]

// Simulated GitHub contribution data
const generateContributions = () => {
  const contributions = []
  const today = new Date()

  for (let i = 364; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    contributions.push({
      date: date.toISOString().split("T")[0],
      count: Math.floor(Math.random() * 5),
    })
  }
  return contributions
}

function TypingAnimation() {
  const [currentTitle, setCurrentTitle] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = jobTitles[titleIndex]

        if (isDeleting) {
          setCurrentTitle(current.substring(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)

          if (currentIndex === 0) {
            setIsDeleting(false)
            setTitleIndex((titleIndex + 1) % jobTitles.length)
          }
        } else {
          setCurrentTitle(current.substring(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)

          if (currentIndex === current.length) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentTitle, currentIndex, isDeleting, titleIndex])

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
      {currentTitle}
      <span className="animate-pulse">|</span>
    </span>
  )
}

function GitHubContributions() {
  const contributions = generateContributions()

  const getIntensity = (count: number) => {
    if (count === 0) return "bg-gray-800"
    if (count === 1) return "bg-green-900"
    if (count === 2) return "bg-green-700"
    if (count === 3) return "bg-green-500"
    return "bg-green-400"
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">GitHub Contributions</h3>
      <div className="grid grid-cols-53 gap-1 max-w-full overflow-x-auto">
        {contributions.map((day, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-sm ${getIntensity(day.count)}`}
            title={`${day.date}: ${day.count} contributions`}
          />
        ))}
      </div>
      <div className="flex items-center justify-between text-sm text-gray-400">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-sm bg-gray-800"></div>
          <div className="w-3 h-3 rounded-sm bg-green-900"></div>
          <div className="w-3 h-3 rounded-sm bg-green-700"></div>
          <div className="w-3 h-3 rounded-sm bg-green-500"></div>
          <div className="w-3 h-3 rounded-sm bg-green-400"></div>
        </div>
        <span>More</span>
      </div>
    </div>
  )
}

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239C92AC&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold text-white">Portfolio</div>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </a>
                <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                  Skills
                </a>
                <a href="#blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Profile"
                width={150}
                height={150}
                className="mx-auto rounded-full mb-8 border-4 border-white/20"
              />
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">John Doe</h1>
              <div className="text-2xl md:text-3xl font-semibold mb-8 h-12">
                <TypingAnimation />
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Passionate developer crafting beautiful, functional web experiences. I turn ideas into reality with
                clean code and innovative solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-gray-300 text-lg mb-6">
                    I'm a passionate full-stack developer with over 5 years of experience creating digital solutions
                    that make a difference. I specialize in React, Node.js, and modern web technologies.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                      San Francisco, CA
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Briefcase className="w-5 h-5 mr-3 text-blue-400" />
                      Senior Frontend Developer
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-5 h-5 mr-3 text-blue-400" />
                      Available for freelance
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <GitHubContributions />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="backdrop-blur-lg bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-white mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300 mb-4">{project.description}</CardDescription>
                    {/* <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-white/10 text-white border-white/20">
                          {tag}
                        </Badge>
                      ))}
                    </div> */}
                    <div className="flex gap-4">
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Expertise</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">Technical Skills</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={skillsData}>
                      <PolarGrid stroke="#374151" />
                      <PolarAngleAxis dataKey="skill" tick={{ fill: "#D1D5DB", fontSize: 12 }} />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#9CA3AF", fontSize: 10 }} />
                      <Radar
                        name="Skills"
                        dataKey="level"
                        stroke="#8B5CF6"
                        fill="#8B5CF6"
                        fillOpacity={0.3}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-semibold text-white mb-6">Core Technologies</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "React", level: 95 },
                    { name: "TypeScript", level: 90 },
                    { name: "Node.js", level: 85 },
                    { name: "Python", level: 80 },
                    { name: "PostgreSQL", level: 75 },
                    { name: "AWS", level: 70 },
                  ].map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Latest Blog Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="backdrop-blur-lg bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-white hover:text-blue-400 transition-colors">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{post.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <BookOpen className="w-4 h-4 mr-2" />
                View All Posts
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8">Let's Work Together</h2>
              <p className="text-xl text-gray-300 mb-12">
                I'm always interested in new opportunities and exciting projects. Let's connect and create something
                amazing together!
              </p>

              <div className="flex justify-center space-x-6 mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Download CV
                </Button>
              </div>

              <div className="flex justify-center space-x-8">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400">© 2024 John Doe. Built with Next.js and Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
