import { motion } from "framer-motion";
import { useState } from "react";
import { Check, ExternalLink, Github } from "lucide-react";
import { Button } from "../components/ui/button";
import { ParticlesBackground } from "../components/ParticlesBackground";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filters = ["All Projects", "Full Stack", "Frontend", "AI/ML"];

  const projects = [
    {
      title: "Tournament Hub",
      description:
        "A comprehensive tournament management platform with user registration, bracket generation, and real-time scoring.",
      image: "",
      tags: ["Django","HTML","CSS","JavaScript", "Redis"],
      category: "Full Stack",
      features: ["User Authentication", "Tournament Registration", "Real-time Updates", "Manage Complete Tournament"],
    },
  ];

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen relative overflow-hidden pt-24 pb-16" id="Projects">
      <div className="absolute inset-0 bg-background -z-20" />
      <ParticlesBackground />

      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-portfolio-green to-portfolio-cyan bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack
            development, AI/ML, and modern web technologies.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className="rounded-full"
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden border border-border group hover:border-primary transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  <p className="font-semibold text-sm">Key Features:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-portfolio-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Want to see more projects?</h3>
          <p className="text-muted-foreground mb-6">
            Check out my GitHub profile for more projects and contributions to open source.
          </p>
          <Button size="lg" className="rounded-full">
            <Github className="w-5 h-5 mr-2" />
            View GitHub Profile
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
