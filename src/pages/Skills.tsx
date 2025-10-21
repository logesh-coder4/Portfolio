import { motion } from "motion/react";
import { ParticlesBackground } from "../components/ParticlesBackground";
import 'devicon/devicon.min.css'

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 95, icon: "devicon-html5-plain colored" },
        { name: "CSS", level: 85, icon: "devicon-css3-plain colored" },
        { name: "JavaScript", level: 90, icon: "devicon-javascript-plain colored" },
        { name: "React", level: 85, icon: "devicon-react-original colored" },
        { name: "Next.js", level: 80, icon: "devicon-nextjs-plain" },//devicon-nextjs-original-wordmark colored
        { name: "TailwindCSS", level: 90, icon: "devicon-tailwindcss-original colored" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Django", level: 100, icon: "devicon-django-plain" },
        { name: "Django RestFramework", level: 90, icon: "devicon-djangorest-plain" },
        { name: "FastApi", level: 80, icon: "devicon-fastapi-plain colored" },
        { name: "Express", level: 80, icon: "devicon-express-original" },
        { name: "Flask", level: 70, icon: "devicon-flask-original" },
      ],
    },
    {
      title:"General",
      skills:[
        { name: "Python", level: 85, icon: "devicon-python-plain colored" },
        { name: "Node.js", level: 75, icon: "devicon-nodejs-plain colored" },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", level: 85, icon: "devicon-mysql-original colored" },
        { name: "MongoDB", level: 80, icon: "devicon-mongodb-plain colored" },
        { name: "Git", level: 90, icon: "devicon-git-plain colored" },
      ],
    },
    {
      title: "Mobile App",
      skills: [
        { name: "React Native", level: 85, icon: "devicon-reactnative-original colored" },
      ],
    },
    {
      title: "Familar With",
      skills: [
        { name: "GoLang", level: 50, icon: "devicon-go-plain colored" },
        { name: "AIML", level: 50, icon: "" },
      ],
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pt-24 pb-16" id="Skills">
      <div className="absolute inset-0 bg-background -z-20" />
      <ParticlesBackground />

      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue bg-clip-text text-transparent">
              Skills
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm proficient in a wide range of technologies that allow me to build comprehensive
            web applications from conception to deployment.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <h2 className="text-2xl font-bold mb-6">{category.title}</h2>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl"><i className={skill.icon}></i></span>
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-portfolio-blue font-semibold">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full rounded-full"
                        style={{background:"linear-gradient(90deg, hsl(217 91% 60%), hsl(280 60% 50%))"}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
